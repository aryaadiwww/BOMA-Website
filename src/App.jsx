import { useEffect, useRef, useState } from 'react'
import heroImage from './assets/gedungbiru.jpg'
import prestasiImage1 from './assets/prestasi1.jpg'
import prestasiImage2 from './assets/prestasi2.jpg'
import prestasiImage3 from './assets/prestasi3.jpg'
import visionImage from './assets/visimisi.jpeg'
import logoBoma from './assets/LogoBOMA2.png'
import './App.css'

const navigation = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const quickActions = [
  { label: 'Join BOMA', href: '#contact' },
  { label: 'Lihat Gallery', href: '#gallery', subtle: true },
]

const highlights = [
  {
    id: 'active-sports',
    value: '5+',
    label: 'Cabang olahraga aktif',
    chip: 'Active Sports',
    popupTitle: 'Active Sports',
    popupType: 'list',
    popupItems: ['Futsal', 'Voli', 'Basket', 'Badminton', 'Catur'],
  },
  {
    id: 'structure',
    value: '11+',
    label: 'Struktur kepengurusan',
    chip: 'Structure',
    popupTitle: 'Structure',
    popupType: 'list',
    popupItems: [
      'Ketua Umum dan Wakil Ketua Umum',
      'Sekretaris',
      'Bendahara',
      'Ketua bidang',
      'Departemen Kaderisasi dan Perekrutan',
      'Departemen Pengembangan Organisasi',
      'Departemen Inventaris',
      'Departemen Humas',
      'Departemen Media dan Informasi',
      'Departemen Kewirausahaan',
      'Pengawas',
    ],
  },
  {
    id: 'growing-network',
    value: '252+',
    label: 'Mahasiswa terhubung',
    chip: 'Growing Network',
    popupTitle: 'Growing Network',
    popupType: 'text',
    popupText: '200 lebih anggota aktif BOMA dan 52 kepengurusan BOMA 2025.',
  },
]

const missions = [
 { letter: 'G', text: 'Galang prestasi' },
  { letter: 'A', text: 'Asah potensi' },
  { letter: 'C', text: 'Ciptakan sportivitas' },
  { letter: 'O', text: 'Optimalkan kolaborasi' },
  { letter: 'R', text: 'Rawat solidaritas' },
]

const congratulationsPosts = [
  {
    image: prestasiImage1,
    href: 'https://www.instagram.com/p/DQnTh1ak_Pe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    alt: 'Poster prestasi BOMA pertama',
  },
  {
    image: prestasiImage2,
    href: 'https://www.instagram.com/p/DR1JcmPE_i5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    alt: 'Poster prestasi BOMA kedua',
  },
  {
    image: prestasiImage3,
    href: 'https://www.instagram.com/p/DSKaW3Aky1Q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    alt: 'Poster prestasi BOMA ketiga',
  },
]

const footerQuickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Video Profile', href: '#about' },
  { label: 'Congratulations', href: '#gallery' },
]

const contactDetails = [
  {
    id: 'whatsapp',
    icon: 'phone',
    text: '+62 812-3456-7890 (WhatsApp)',
    href: 'https://wa.me/6281234567890',
    external: true,
  },
  {
    id: 'secretariat',
    icon: 'map-pin',
    text: 'Gedung Sekretariat UPI Kampus Cibiru',
  },
  {
    id: 'email',
    icon: 'mail',
    text: 'bomaupicibir02@gmail.com',
    href: 'mailto:bomaupicibir02@gmail.com',
  },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/', icon: 'instagram', external: true },
  { label: 'TikTok', href: 'https://tiktok.com/', icon: 'tiktok', external: true },
  { label: 'YouTube', href: 'https://youtube.com/', icon: 'youtube', external: true },
  { label: 'Email', href: 'mailto:bomaupicibir02@gmail.com', icon: 'mail' },
  { label: 'WhatsApp', href: 'https://wa.me/6281234567890', icon: 'phone', external: true },
]

const profileVideo = {
  embedUrl:
    'https://www.youtube.com/embed/tMYFTGCwi3c?rel=0&controls=1&modestbranding=1&playsinline=1',
}

function AppIcon({ name }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '1.8',
  }

  switch (name) {
    case 'phone':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            {...common}
            d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72l.35 2.55a2 2 0 0 1-.57 1.7L8.6 11.24a16 16 0 0 0 4.16 4.16l1.27-1.26a2 2 0 0 1 1.7-.58l2.55.35A2 2 0 0 1 22 16.92Z"
          />
          <path {...common} d="M15.5 4.5a5 5 0 0 1 4 4" />
          <path {...common} d="M15.5 8a2 2 0 0 1 1.5 1.5" />
        </svg>
      )

    case 'map-pin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            {...common}
            d="M12 21s6-5.03 6-11a6 6 0 1 0-12 0c0 5.97 6 11 6 11Z"
          />
          <circle {...common} cx="12" cy="10" r="2.4" />
        </svg>
      )

    case 'mail':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect {...common} x="3" y="5" width="18" height="14" rx="2.5" />
          <path {...common} d="m5 7 7 5 7-5" />
        </svg>
      )

    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect {...common} x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle {...common} cx="12" cy="12" r="3.7" />
          <path {...common} d="M17.6 6.7h.01" />
        </svg>
      )

    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            {...common}
            d="M21 12.2c0 2.17-.25 3.59-.46 4.28a2.77 2.77 0 0 1-1.94 1.94c-.69.21-2.11.46-6.28.46s-5.59-.25-6.28-.46a2.77 2.77 0 0 1-1.94-1.94C3.89 15.79 3.64 14.37 3.64 12.2s.25-3.59.46-4.28A2.77 2.77 0 0 1 6.04 5.98c.69-.21 2.11-.46 6.28-.46s5.59.25 6.28.46a2.77 2.77 0 0 1 1.94 1.94c.21.69.46 2.11.46 4.28Z"
          />
          <path {...common} d="m10.2 9.3 5 2.9-5 2.9V9.3Z" />
        </svg>
      )

    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M14 4c.45 1.65 1.8 3.12 3.5 3.8" />
          <path
            {...common}
            d="M10 10.3v6.05a2.75 2.75 0 1 1-2.75-2.75c.3 0 .58.05.85.14"
          />
          <path {...common} d="M14 4v8.9a4.7 4.7 0 0 1-4.7 4.7" />
          <path {...common} d="M14 7.45a6.3 6.3 0 0 0 3.8 1.25" />
        </svg>
      )

    case 'arrow-up':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M12 19V5" />
          <path {...common} d="m6.5 10.5 5.5-5.5 5.5 5.5" />
        </svg>
      )

    default:
      return null
  }
}

function App() {
  const highlightGridRef = useRef(null)
  const highlightPopoverRef = useRef(null)
  const [activeHighlightPopover, setActiveHighlightPopover] = useState(null)
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false)
  const [isPageReady, setIsPageReady] = useState(false)

  const activeHighlight = highlights.find((item) => item.id === activeHighlightPopover?.id) ?? null

  useEffect(() => {
    let secondFrameId = 0

    const firstFrameId = window.requestAnimationFrame(() => {
      secondFrameId = window.requestAnimationFrame(() => {
        setIsPageReady(true)
      })
    })

    return () => {
      window.cancelAnimationFrame(firstFrameId)
      window.cancelAnimationFrame(secondFrameId)
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
  }, [isPageReady])

  useEffect(() => {
    if (!activeHighlightPopover) {
      return undefined
    }

    const closeHighlightPopover = (event) => {
      if (!(event.target instanceof Element)) {
        return
      }

      if (event.target.closest('.highlight-card') || event.target.closest('.highlight-popover')) {
        return
      }

      setActiveHighlightPopover(null)
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveHighlightPopover(null)
      }
    }

    const handleResize = () => {
      setActiveHighlightPopover(null)
    }

    document.addEventListener('pointerdown', closeHighlightPopover)
    document.addEventListener('keydown', handleEscape)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('pointerdown', closeHighlightPopover)
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('resize', handleResize)
    }
  }, [activeHighlightPopover])

  useEffect(() => {
    if (!activeHighlightPopover || !highlightPopoverRef.current) {
      return undefined
    }

    const frameId = window.requestAnimationFrame(() => {
      const popoverRect = highlightPopoverRef.current?.getBoundingClientRect()

      if (!popoverRect) {
        return
      }

      const topOffset = 112
      const bottomOffset = 28

      if (popoverRect.bottom > window.innerHeight - bottomOffset) {
        window.scrollBy({
          top: popoverRect.bottom - window.innerHeight + bottomOffset,
          behavior: 'smooth',
        })
        return
      }

      if (popoverRect.top < topOffset) {
        window.scrollBy({
          top: popoverRect.top - topOffset - 12,
          behavior: 'smooth',
        })
      }
    })

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [activeHighlightPopover])

  useEffect(() => {
    const updateScrollTopVisibility = () => {
      setIsScrollTopVisible(window.scrollY > 360)
    }

    updateScrollTopVisibility()
    window.addEventListener('scroll', updateScrollTopVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrollTopVisibility)
    }
  }, [])

  const handleHighlightClick = (event, itemId) => {
    if (activeHighlightPopover?.id === itemId) {
      setActiveHighlightPopover(null)
      return
    }

    const gridElement = highlightGridRef.current
    const cardElement = event.currentTarget.closest('.highlight-card')

    if (!gridElement || !cardElement) {
      return
    }

    const gridRect = gridElement.getBoundingClientRect()
    const cardRect = cardElement.getBoundingClientRect()
    const popoverWidth = Math.min(340, gridRect.width - 8)
    const centeredLeft = cardRect.left + cardRect.width / 2 - gridRect.left - popoverWidth / 2
    const left = Math.max(0, Math.min(centeredLeft, gridRect.width - popoverWidth))
    const anchor = Math.max(
      30,
      Math.min(cardRect.left + cardRect.width / 2 - gridRect.left - left, popoverWidth - 30),
    )

    setActiveHighlightPopover({
      id: itemId,
      top: cardRect.bottom - gridRect.top + 14,
      left,
      width: popoverWidth,
      anchor,
    })
  }

  return (
    <div className={`page-shell${isPageReady ? ' page-shell--ready' : ''}`} id="top">
      <div className="page-intro" aria-hidden="true" />
      <header className="site-header">
        <div className="container site-header__inner page-enter page-enter--header">
          <a className="brand" href="#top" aria-label="BOMA Home">
            <span className="brand__mark" aria-hidden="true">
              <img className="brand__logo" src={logoBoma} alt="" />
            </span>
            <span className="brand__copy">
              <strong>BOMA</strong>
              <small>Badan Olahraga Mahasiswa</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            {quickActions.map((item) => (
              <a
                key={item.label}
                className={`pill-action${item.subtle ? ' pill-action--subtle' : ''}`}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div
            className={`container hero-section__grid${activeHighlight ? ' hero-section__grid--popover-open' : ''}`}
          >
            <div className="hero-copy">
              <span className="eyebrow">Welcome to</span>
              <h1>BOMA</h1>
              <h1>UPI Cibiru 2025</h1>
              <p className="hero-copy__lead">
                BOMA or Badan Olahraga Mahasiswa is a student activity unit focused on 
                sports at the Cibiru Campus of Universitas Pendidikan Indonesia. BOMA aims to 
                facilitate and develop students’ interests, talents, and achievements in the field 
                of sports at UPI Cibiru.
              </p>

              <div
                className={`highlight-grid${activeHighlight ? ' highlight-grid--has-popover' : ''}`}
                ref={highlightGridRef}
              >
                {highlights.map((item) => {
                  const isActive = activeHighlight?.id === item.id

                  return (
                    <article
                      className={`highlight-card${isActive ? ' is-active' : ''}`}
                      key={item.id}
                    >
                      <button
                        className="highlight-card__button"
                        type="button"
                        onClick={(event) => handleHighlightClick(event, item.id)}
                        aria-expanded={isActive}
                        aria-controls={`${item.id}-popover`}
                      >
                        <span className="highlight-card__chip">{item.chip}</span>
                        <div className="highlight-card__metric">
                          <strong>{item.value}</strong>
                          <span className="highlight-card__spark" aria-hidden="true"></span>
                        </div>
                        <span className="highlight-card__title">{item.label}</span>
                        <span className="highlight-card__action">
                          {isActive ? 'Tutup detail' : 'Lihat detail'}
                        </span>
                      </button>
                    </article>
                  )
                })}

                {activeHighlight && activeHighlightPopover ? (
                  <div
                    className="highlight-popover"
                    id={`${activeHighlight.id}-popover`}
                    ref={highlightPopoverRef}
                    style={{
                      top: `${activeHighlightPopover.top}px`,
                      left: `${activeHighlightPopover.left}px`,
                      width: `${activeHighlightPopover.width}px`,
                      '--highlight-popover-anchor': `${activeHighlightPopover.anchor}px`,
                    }}
                  >
                    <div className="highlight-popover__head">
                      <div>
                        <span className="highlight-popover__chip">{activeHighlight.chip}</span>
                        <h3 className="highlight-popover__title">{activeHighlight.popupTitle}</h3>
                      </div>

                      <button
                        className="highlight-popover__close"
                        type="button"
                        onClick={() => setActiveHighlightPopover(null)}
                        aria-label="Tutup detail highlight"
                      >
                        ×
                      </button>
                    </div>

                    {activeHighlight.popupType === 'list' ? (
                      <ol className="highlight-popover__list">
                        {activeHighlight.popupItems.map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                      </ol>
                    ) : (
                      <p className="highlight-popover__text">{activeHighlight.popupText}</p>
                    )}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="hero-visual">
              <img
                className="hero-visual__echo"
                src={heroImage}
                alt=""
                aria-hidden="true"
              />
              <div className="hero-visual__main">
                <img
                  src={heroImage}
                  alt="Foto gedung biru untuk hero section BOMA"
                />
              </div>

              <div className="hero-floating hero-floating--top">
                <span>BOMA?</span>
                <strong>Sehatkan badanmu, banggakan kampusmu, salam olahraga!</strong>
              </div>

              <div className="hero-floating hero-floating--bottom">
                <span>Universitas Pendidikan Indonesia</span>
                <strong>Kampus Daerah Cibiru</strong>
              </div>
            </div>
          </div>

        </section>

        <section className="section section--soft section--overlap" id="about">
          <div className="container">
            <div className="about-showcase">
              <article className="profile-video-card scroll-reveal scroll-reveal--left">
                <iframe
                  className="profile-video-card__frame"
                  src={profileVideo.embedUrl}
                  title="Video profil BOMA UPI Cibiru"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                  allowFullScreen
                />
              </article>

              <div
                className="profile-copy scroll-reveal scroll-reveal--right"
                style={{ '--reveal-delay': '120ms' }}
              >
                <span className="section-tag profile-copy__eyebrow">Who We Are</span>
                <h2>Video Profile</h2>
                <p>
                  Captured in this one-period video, with a spirit of sportsmanship, unity,
                  and potential development, we serve as a platform that brings together students
                  interests and talents in sports. We also encourage collaboration across sports
                  disciplines and foster creativity and achievement to elevate the campus reputation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--vision">
          <div className="container">
            <div className="vision-showcase">
              <div className="vision-copy scroll-reveal scroll-reveal--left">
                <span className="section-tag vision-copy__eyebrow">Who We Are</span>

                <div className="vision-copy__block">
                  <h2>Our Vision</h2>
                  <p className="vision-copy__lead">
                    Menjadi rumah tumbuhnya insan olahraga berprestasi yang menjunjung 
                    sportivitas, disiplin dan semangat juang.
                  </p>
                </div>

                <div className="vision-copy__block vision-copy__block--mission">
                  <h2>Our Mission</h2>
                  <ul className="vision-mission-list">
                    {missions.map((item) => (
                      <li key={item.letter}>
                        <span className="vision-mission-list__badge" aria-hidden="true">
                          {item.letter}
                        </span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className="vision-media scroll-reveal scroll-reveal--right"
                style={{ '--reveal-delay': '120ms' }}
              >
                <div className="vision-media__frame">
                  <img
                    src={visionImage}
                    alt="Visual dummy suasana kampus untuk section visi dan misi BOMA"
                  />
                </div>

                <div className="vision-media__badge">
                  <strong>2025</strong>
                  <span>BOMA UPI Cibiru</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--accent section--congrats" id="gallery">
          <div className="container">
            <div className="section-heading congrats-heading scroll-reveal">
              <h2>Congratulations!</h2>
            </div>

            <div className="gallery-grid gallery-grid--instagram">
              {congratulationsPosts.map((item, index) => (
                <a
                  className="gallery-card gallery-card--instagram scroll-reveal scroll-reveal--card"
                  href={item.href}
                  key={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Buka postingan Instagram prestasi ${index + 1}`}
                  style={{ '--enter-delay': `${760 + index * 90}ms` }}
                >
                  <img src={item.image} alt={item.alt} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--contact" id="contact">
          <div className="contact-banner">
            <div className="container contact-banner__inner">
              <div className="contact-banner__badge" aria-hidden="true">
                <AppIcon name="phone" />
              </div>

              <div className="contact-banner__content">
                <h2>
                  Need further information?
                  <span>Don&apos;t hesitate to contact us!</span>
                </h2>

                <a
                  className="contact-banner__action"
                  href="mailto:bomaupicibir02@gmail.com?subject=Halo%20BOMA%20UPI%20Cibiru"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div className="site-footer__column">
            <h3>Quick Links</h3>
            <nav className="footer-link-list" aria-label="Footer quick links">
              {footerQuickLinks.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="site-footer__column site-footer__column--brand">
            <a className="site-footer__brand" href="#top" aria-label="BOMA Home">
              <img src={logoBoma} alt="Logo BOMA UPI Kampus Cibiru" />
            </a>

            <div className="footer-socials" aria-label="Social media links">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  aria-label={item.label}
                >
                  <AppIcon name={item.icon} />
                  <span className="sr-only">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="site-footer__column">
            <h3>Contact Info</h3>
            <div className="footer-contact-list">
              {contactDetails.map((item) => {
                const content = (
                  <>
                    <span className="footer-contact-item__icon" aria-hidden="true">
                      <AppIcon name={item.icon} />
                    </span>
                    <span className="footer-contact-item__text">{item.text}</span>
                  </>
                )

                if (!item.href) {
                  return (
                    <div className="footer-contact-item" key={item.id}>
                      {content}
                    </div>
                  )
                }

                return (
                  <a
                    className="footer-contact-item"
                    href={item.href}
                    key={item.id}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                  >
                    {content}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="container site-footer__bottom">
          <p>Copyright © 2026 BOMA UPI Kampus Cibiru. All rights reserved.</p>
        </div>

        <a
          className={`scroll-top${isScrollTopVisible ? ' is-visible' : ''}`}
          href="#top"
          aria-label="Kembali ke atas"
        >
          <AppIcon name="arrow-up" />
        </a>
      </footer>
    </div>
  )
}

export default App
