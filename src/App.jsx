import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import './App.css'

const LOADER_DURATION_MS = 1800
const LOADER_EXIT_MS = 720

const routes = {
  '/': HomePage,
  '/about': AboutPage,
}

function normalizePath(pathname) {
  if (!pathname) {
    return '/'
  }

  if (pathname !== '/' && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname
}

function getCurrentLocation() {
  return {
    pathname: normalizePath(window.location.pathname),
    hash: window.location.hash,
  }
}

function easeOutQuart(progress) {
  return 1 - Math.pow(1 - progress, 4)
}

function App() {
  const [isPageReady, setIsPageReady] = useState(false)
  const [isLoaderVisible, setIsLoaderVisible] = useState(true)
  const [isLoaderLeaving, setIsLoaderLeaving] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [locationState, setLocationState] = useState(getCurrentLocation)
  const hasMountedRef = useRef(false)
  const previousPathRef = useRef(locationState.pathname)
  const pageReadyFrameIdsRef = useRef([])
  const loaderFrameRef = useRef(null)
  const loaderExitTimeoutRef = useRef(null)
  const currentPath = locationState.pathname
  const PageComponent = routes[currentPath] ?? HomePage

  const clearPageReadyFrames = useCallback(() => {
    pageReadyFrameIdsRef.current.forEach((frameId) => {
      window.cancelAnimationFrame(frameId)
    })

    pageReadyFrameIdsRef.current = []
  }, [])

  const clearLoaderFrames = useCallback(() => {
    if (loaderFrameRef.current) {
      window.cancelAnimationFrame(loaderFrameRef.current)
      loaderFrameRef.current = null
    }

    if (loaderExitTimeoutRef.current) {
      window.clearTimeout(loaderExitTimeoutRef.current)
      loaderExitTimeoutRef.current = null
    }
  }, [])

  const playPageEntrance = useCallback(() => {
    clearPageReadyFrames()
    setIsPageReady(false)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsPageReady(true)
      return
    }

    const firstFrameId = window.requestAnimationFrame(() => {
      const secondFrameId = window.requestAnimationFrame(() => {
        setIsPageReady(true)
        pageReadyFrameIdsRef.current = []
      })

      pageReadyFrameIdsRef.current = [firstFrameId, secondFrameId]
    })

    pageReadyFrameIdsRef.current = [firstFrameId]
  }, [clearPageReadyFrames])

  useEffect(() => {
    clearLoaderFrames()

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      loaderFrameRef.current = window.requestAnimationFrame(() => {
        setLoadingProgress(100)
        setIsPageReady(true)
        setIsLoaderVisible(false)
        loaderFrameRef.current = null
      })
      hasMountedRef.current = true

      return () => {
        clearPageReadyFrames()
        clearLoaderFrames()
      }
    }

    const startedAt = window.performance.now()

    const tick = (timestamp) => {
      const elapsed = timestamp - startedAt
      const progress = Math.min(elapsed / LOADER_DURATION_MS, 1)
      const displayProgress =
        progress >= 1 ? 100 : Math.min(99, Math.round(easeOutQuart(progress) * 99))

      setLoadingProgress(displayProgress)

      if (progress < 1) {
        loaderFrameRef.current = window.requestAnimationFrame(tick)
        return
      }

      setIsLoaderLeaving(true)
      setIsPageReady(true)

      loaderExitTimeoutRef.current = window.setTimeout(() => {
        setIsLoaderVisible(false)
        loaderExitTimeoutRef.current = null
      }, LOADER_EXIT_MS)
    }

    loaderFrameRef.current = window.requestAnimationFrame(tick)
    hasMountedRef.current = true

    return () => {
      clearPageReadyFrames()
      clearLoaderFrames()
    }
  }, [clearLoaderFrames, clearPageReadyFrames])

  useLayoutEffect(() => {
    if (!hasMountedRef.current) {
      return
    }

    const previousPath = previousPathRef.current
    let frameId = null

    if (currentPath !== previousPath) {
      frameId = window.requestAnimationFrame(() => {
        playPageEntrance()
      })
    }

    previousPathRef.current = currentPath

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [currentPath, playPageEntrance])

  useEffect(() => {
    const syncLocation = () => {
      setLocationState(getCurrentLocation())
    }

    window.addEventListener('popstate', syncLocation)
    window.addEventListener('hashchange', syncLocation)

    return () => {
      window.removeEventListener('popstate', syncLocation)
      window.removeEventListener('hashchange', syncLocation)
    }
  }, [])

  useEffect(() => {
    if (!isPageReady) {
      return undefined
    }

    const revealElements = Array.from(document.querySelectorAll('.scroll-reveal'))

    if (!revealElements.length) {
      return undefined
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements.forEach((element) => {
        element.classList.add('is-revealed')
      })

      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    revealElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [isPageReady, currentPath])

  useEffect(() => {
    document.title = currentPath === '/about' ? 'About | BOMA UPI Cibiru' : 'BOMA UPI Cibiru'
  }, [currentPath])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (locationState.hash) {
        const targetElement = document.querySelector(locationState.hash)

        if (targetElement instanceof HTMLElement) {
          targetElement.scrollIntoView({ block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [locationState])

  const handleNavigate = (href) => {
    const targetUrl = new URL(href, window.location.origin)
    const nextLocation = {
      pathname: normalizePath(targetUrl.pathname),
      hash: targetUrl.hash,
    }
    const currentLocation = getCurrentLocation()

    if (
      currentLocation.pathname === nextLocation.pathname &&
      currentLocation.hash === nextLocation.hash
    ) {
      if (nextLocation.hash) {
        const targetElement = document.querySelector(nextLocation.hash)

        if (targetElement instanceof HTMLElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    window.history.pushState({}, '', `${nextLocation.pathname}${nextLocation.hash}`)
    setLocationState(nextLocation)
  }

  return (
    <div className={`page-shell${isPageReady ? ' page-shell--ready' : ''}`} id="top">
      {isLoaderVisible && (
        <div
          className={`page-loader${isLoaderLeaving ? ' page-loader--leaving' : ''}`}
          role="status"
          aria-label="Memuat halaman BOMA UPI Cibiru"
          aria-live="polite"
          style={{ '--loader-progress': `${loadingProgress}%` }}
        >
          <div className="page-loader__content">
            <p className="page-loader__title">
              <span>BOMA</span>
              <span>UPI CIBIRU</span>
            </p>
            <span className="page-loader__year">2025</span>
            <p className="page-loader__tagline">
              <span aria-hidden="true"></span>
              <span>BADAN OLAHRAGA MAHASISWA</span>
              <span aria-hidden="true"></span>
            </p>
            <div className="page-loader__track" aria-hidden="true">
              <span className="page-loader__bar"></span>
            </div>
            <span className="page-loader__percent">{loadingProgress}%</span>
          </div>
        </div>
      )}
      <SiteHeader currentPath={currentPath} onNavigate={handleNavigate} />
      <PageComponent onNavigate={handleNavigate} />
      <SiteFooter onNavigate={handleNavigate} />
    </div>
  )
}

export default App
