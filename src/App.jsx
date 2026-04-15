import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import './App.css'

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

function App() {
  const [isPageReady, setIsPageReady] = useState(false)
  const [locationState, setLocationState] = useState(getCurrentLocation)
  const hasMountedRef = useRef(false)
  const previousPathRef = useRef(locationState.pathname)
  const pageReadyFrameIdsRef = useRef([])
  const currentPath = locationState.pathname
  const PageComponent = routes[currentPath] ?? HomePage

  const clearPageReadyFrames = useCallback(() => {
    pageReadyFrameIdsRef.current.forEach((frameId) => {
      window.cancelAnimationFrame(frameId)
    })

    pageReadyFrameIdsRef.current = []
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
    playPageEntrance()
    hasMountedRef.current = true

    return () => {
      clearPageReadyFrames()
    }
  }, [clearPageReadyFrames, playPageEntrance])

  useLayoutEffect(() => {
    if (!hasMountedRef.current) {
      return
    }

    const previousPath = previousPathRef.current

    if (currentPath !== previousPath) {
      playPageEntrance()
    }

    previousPathRef.current = currentPath
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
      <div className="page-intro" aria-hidden="true" />
      <SiteHeader currentPath={currentPath} onNavigate={handleNavigate} />
      <PageComponent onNavigate={handleNavigate} />
      <SiteFooter onNavigate={handleNavigate} />
    </div>
  )
}

export default App
