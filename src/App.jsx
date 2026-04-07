import { useEffect, useRef, useState } from 'react'
import heroImage from './assets/gedungbiru.jpg'
import prestasiImage1 from './assets/prestasi1.jpg'
import prestasiImage2 from './assets/prestasi2.jpg'
import prestasiImage3 from './assets/prestasi3.jpg'
import visionImage from './assets/visimisi.jpeg'
import logoBoma from './assets/LogoBOMA2.png'
import './App.css'

const navigation = [
  { label: 'Home', href: '#home' },
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

const contacts = [
  {
    title: 'Sekretariat',
    text: 'Gedung Sekretariat UPI Kampus Cibiru. (Ruangan ke 3 dari pintu masuk sebelah kiri)',
  },
  {
    title: 'Email',
    text: 'bomaupicibir02@gmail.com',
  },
  {
    title: 'WhatsApp',
    text: '+62 812-3456-7890',
  },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'TikTok', href: 'https://tiktok.com/' },
  { label: 'YouTube', href: 'https://youtube.com/' },
  { label: 'Email', href: 'mailto:boma.cibiru@upi.edu' },
]

const profileVideo = {
  embedUrl:
    'https://www.youtube.com/embed/tMYFTGCwi3c?rel=0&controls=1&modestbranding=1&playsinline=1',
}

function App() {
  const highlightGridRef = useRef(null)
  const highlightPopoverRef = useRef(null)
  const [activeHighlightPopover, setActiveHighlightPopover] = useState(null)

  const activeHighlight = highlights.find((item) => item.id === activeHighlightPopover?.id) ?? null

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
    <div className="page-shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand" href="#home" aria-label="BOMA Home">
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
              <article className="profile-video-card">
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

              <div className="profile-copy">
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
              <div className="vision-copy">
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

              <div className="vision-media">
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
            <div className="section-heading congrats-heading">
              <h2>Congratulations!</h2>
            </div>

            <div className="gallery-grid gallery-grid--instagram">
              {congratulationsPosts.map((item, index) => (
                <a
                  className="gallery-card gallery-card--instagram"
                  href={item.href}
                  key={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Buka postingan Instagram prestasi ${index + 1}`}
                >
                  <img src={item.image} alt={item.alt} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--contact" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy">
              <div className="section-heading section-heading--left">
                <span className="section-tag">Contact</span>
                <h2>Contact us</h2>
                <p>
                Need further information? Don't hesitate to contact us!
                </p>
              </div>

              <div className="contact-card-grid">
                {contacts.map((item) => (
                  <article className="contact-card" key={item.title}>
                    <span>{item.title}</span>
                    <strong>{item.text}</strong>
                  </article>
                ))}
              </div>
            </div>

            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                Nama
                <input type="text" placeholder="Nama lengkap" />
              </label>
              <label>
                Email
                <input type="email" placeholder="email@contoh.com" />
              </label>
              <label>
                Pesan
                <textarea
                  rows="5"
                  placeholder="Tulis pesan, pertanyaan, atau ajakan kolaborasi di sini."
                />
              </label>
              <button className="button button--primary" type="submit">
                Kirim Pesan
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div>
            <strong>BOMA UPI Kampus Cibiru</strong>
            <p>
              Dummy landing page dengan konsep yang diarahkan mendekati referensi:
              airy, editorial, elegan, dan tetap responsif.
            </p>
          </div>

          <div className="social-links" aria-label="Social media links">
            {socials.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="container site-footer__bottom">
          <p>Copyright © 2026 BOMA UPI Kampus Cibiru. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
