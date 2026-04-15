import { useEffect, useState } from 'react'
import InternalLink from '../components/InternalLink.jsx'
import aboutHeroImage from '../assets/about1.png'
import aboutSectionImage from '../assets/about2.jpeg'
import aboutSectionImageSecondary from '../assets/about3.png'
import visionImage from '../assets/visimisi.jpeg'
import logoBoma from '../assets/LogoBOMA2.png'
import pengurusintiBackground from '../assets/pengurusinti.png'
import logofutsal from '../assets/logofutsal.png'
import logovoli from '../assets/logovoli.png'
import logobasket from '../assets/logobasket.png'
import logobadminton from '../assets/logobadminton.png'
import logocatur from '../assets/logocatur.png'
import ketua from '../assets/ketua.png'
import wakil from '../assets/wakil.png'
import bilal from '../assets/bilal.png'
import lala from '../assets/lala.png'
import nafila from '../assets/nafila.png'
import risma from '../assets/risma.png'
import pale from '../assets/pale.png'
import tari from '../assets/tari.png'
import meysa from '../assets/meysa.png'
import pri from '../assets/pri.png'
import royan from '../assets/royan.png'
import iki from '../assets/iki.png'
import feri from '../assets/feri.png'
import mahesa from '../assets/mahesa.png'
import yoga from '../assets/yoga.png'
import './AboutPage.css'

const aboutIntroParagraphs = [
  'Humans are endowed with unique potentials and naturally strive to develop their abilities, including through physical activities that support both physical and mental well-being. To facilitate and nurture these potentials in sports, students of the Cibiru Campus at Universitas Pendidikan Indonesia established the Student Sports Organization (UKM Badan Olahraga Mahasiswa), which was founded in Cibiru on  2 October 2015.'
]

const visionStatement =
  'Menjadi rumah tumbuhnya insan olahraga berprestasi yang menjunjung sportivitas, disiplin, dan semangat juang.'

const missionItems = [
  { letter: 'G', text: 'Galang prestasi' },
  { letter: 'A', text: 'Asah potensi' },
  { letter: 'C', text: 'Ciptakan sportivitas' },
  { letter: 'O', text: 'Optimalkan kolaborasi' },
  { letter: 'R', text: 'Rawat solidaritas' },
]

const valueCards = [
  {
    title: 'Disiplin yang hidup',
    text: 'Kami membangun budaya latihan, ketepatan waktu, dan tanggung jawab dalam setiap program kerja.',
  },
  {
    title: 'Sportivitas yang terasa',
    text: 'BOMA mendorong persaingan yang sehat, saling menghargai, dan keberanian untuk terus berkembang.',
  },
  {
    title: 'Kolaborasi lintas minat',
    text: 'Setiap cabang olahraga, pengurus, dan anggota bergerak sebagai satu ekosistem yang saling menguatkan.',
  },
]

const storyBlocks = [
  {
    title: 'Kenapa BOMA ada',
    text: 'BOMA hadir sebagai ruang yang menghubungkan minat olahraga mahasiswa UPI Kampus Cibiru agar tidak berjalan sendiri-sendiri. Dari latihan, pengembangan potensi, sampai pencapaian prestasi, semuanya diarahkan untuk tumbuh bersama.',
  },
  {
    title: 'Cara kami bergerak',
    text: 'Kami tidak hanya mengurus agenda pertandingan. BOMA juga membangun ritme organisasi, kaderisasi, dan komunikasi yang membuat tiap anggota merasa punya tempat untuk berkembang.',
  },
]

const journeyPoints = [
  'Menjadi titik temu mahasiswa yang ingin aktif, sehat, dan kompetitif.',
  'Mengembangkan kegiatan yang terstruktur dari latihan rutin hingga kompetisi.',
  'Mendorong prestasi yang membawa nama baik UPI Kampus Cibiru ke ruang yang lebih luas.',
]

const branchesData = [
  { name: 'Futsal', logo: logofutsal },
  { name: 'Voli', logo: logovoli },
  { name: 'Basket', logo: logobasket },
  { name: 'Badminton', logo: logobadminton },
  { name: 'Catur', logo: logocatur },
]

const pengurusData = [
  // Ketua Departemen
  { name: 'Arya Adi Wijaya', jabatan: 'Ketua Umum', image: ketua },
  { name: 'Keyla Zahra', jabatan: 'Wakil Ketua', image: wakil },
  { name: 'M. Bilal Mardhiyyano. A', jabatan: 'Sekretaris 1', image: bilal },
  { name: 'Naufal Latifah', jabatan: 'Bendahara 1', image: lala },
  { name: 'Nafila Fauziyah', jabatan: 'Kadept Kaderisasi & Perekrutan', image: nafila },
  { name: 'Risma Nurkamila', jabatan: 'Kadept Pengembangan', image: risma },
  { name: 'Naufal Abdala. S', jabatan: 'Kadepet Media & Informasi', image: pale },
  { name: 'Mentari Meyllani. P', jabatan: 'Kadept Inventaris', image: tari },
  { name: 'Meysa Damayahnthi. H', jabatan: 'Kadept Hubungan Masyarakat', image: meysa },
  { name: 'Prihatma Nurwahid', jabatan: 'Kadept Kewirausahaan', image: pri },
  // Ketua Bidang
  { name: 'Royan Akbar', jabatan: 'Ketua Bidang Futsal', image: royan },
  { name: 'Achmad Rizky Fauzy', jabatan: 'Ketua Bidang Voli', image: iki },
  { name: 'Feri Ilham Azkia', jabatan: 'Ketua Bidang Basket', image: feri },
  { name: 'Mahesa Syawal A', jabatan: 'Ketua Bidang Badminton', image: mahesa },
  { name: 'Yoga Triansyah', jabatan: 'Ketua Bidang Catur', image: yoga },
]

const ketuaDepartemen = pengurusData.slice(0, 10)
const ketuaBidang = pengurusData.slice(10)

function AboutPage({ onNavigate }) {
  const [visibleCardCount, setVisibleCardCount] = useState(3)
  const [departemenCarousel, setDepartemenCarousel] = useState({ index: 3, isAnimating: true })
  const [bidangCarousel, setBidangCarousel] = useState({ index: 3, isAnimating: true })

  const nextSlide = (items, setCarousel) => {
    if (items.length <= visibleCardCount) {
      return
    }

    setCarousel((current) => ({ ...current, index: current.index + 1, isAnimating: true }))
  }

  const prevSlide = (items, setCarousel) => {
    if (items.length <= visibleCardCount) {
      return
    }

    setCarousel((current) => ({ ...current, index: current.index - 1, isAnimating: true }))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(ketuaDepartemen, setDepartemenCarousel)
      nextSlide(ketuaBidang, setBidangCarousel)
    }, 3000)

    return () => clearInterval(interval)
  }, [visibleCardCount])

  useEffect(() => {
    const updateVisibleCardCount = () => {
      if (window.innerWidth <= 640) {
        setVisibleCardCount(1)
        return
      }

      if (window.innerWidth <= 1024) {
        setVisibleCardCount(2)
        return
      }

      setVisibleCardCount(3)
    }

    updateVisibleCardCount()
    window.addEventListener('resize', updateVisibleCardCount)

    return () => window.removeEventListener('resize', updateVisibleCardCount)
  }, [])

  useEffect(() => {
    setDepartemenCarousel({ index: visibleCardCount, isAnimating: false })
    setBidangCarousel({ index: visibleCardCount, isAnimating: false })
  }, [visibleCardCount])

  const createLoopedItems = (items) => {
    const cloneCount = Math.min(visibleCardCount, items.length)
    return [...items.slice(-cloneCount), ...items, ...items.slice(0, cloneCount)]
  }

  const normalizeCarousel = (items, carousel, setCarousel) => {
    if (items.length <= visibleCardCount) {
      return
    }

    const cloneCount = Math.min(visibleCardCount, items.length)
    const maxIndex = items.length + cloneCount

    if (carousel.index >= maxIndex) {
      setCarousel({ index: cloneCount, isAnimating: false })
      return
    }

    if (carousel.index < cloneCount) {
      setCarousel({ index: items.length + cloneCount - 1, isAnimating: false })
    }
  }

  const departemenLoop = createLoopedItems(ketuaDepartemen)
  const bidangLoop = createLoopedItems(ketuaBidang)

  return (
    <main className="about-page">
      <section className="about-hero">
        <div
          className="about-hero__intro"
          style={{ '--about-hero-image': `url(${aboutHeroImage})` }}
        >
          <div className="about-hero__media" aria-hidden="true" />

          <div className="container about-hero__content">
            <div className="about-hero__copy page-enter" style={{ '--enter-delay': '160ms' }}>
              <h1>About</h1>

              <div className="about-hero__text">
                {aboutIntroParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-vision">
        <div className="container about-vision__stack">
          <div className="about-vision__row about-vision__row--vision">
            <div
              className="about-vision__content page-enter"
              style={{ '--enter-delay': '220ms' }}
            >
              <div className="vision-copy about-vision__copy">
                <div className="vision-copy__block">
                  <h2>Our Vision</h2>
                  <p className="vision-copy__lead">{visionStatement}</p>
                </div>
              </div>
            </div>

            <div className="about-vision__media page-enter" style={{ '--enter-delay': '300ms' }}>
              <div className="about-vision__image-frame">
                <img src={aboutSectionImage} alt="Kebersamaan anggota BOMA UPI Kampus Cibiru" />
              </div>
            </div>
          </div>

          <div className="about-vision__row about-vision__row--mission">
            <div className="about-vision__media page-enter" style={{ '--enter-delay': '360ms' }}>
              <div className="about-vision__image-frame">
                <img
                  src={aboutSectionImageSecondary}
                  alt="Aktivitas anggota BOMA UPI Kampus Cibiru"
                />
              </div>
            </div>

            <div
              className="about-vision__content page-enter"
              style={{ '--enter-delay': '440ms' }}
            >
              <div className="vision-copy about-vision__copy">
                <div className="vision-copy__block vision-copy__block--mission">
                  <h2>Our Mission</h2>
                  <ul className="vision-mission-list">
                    {missionItems.map((item) => (
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
            </div>
          </div>
        </div>
      </section>

      <div
        className="about-showcase-band"
        style={{ '--about-showcase-bg': `url(${pengurusintiBackground})` }}
      >
        <section className="section about-branches">
          <div className="container">
            <div className="section-heading scroll-reveal">
              <h2>Bidang Olahraga</h2>
            </div>

            <div className="about-branches__grid">
              {branchesData.map((branch, index) => (
                <div
                  className="about-branch-card scroll-reveal scroll-reveal--card"
                  key={branch.name}
                  style={{ '--reveal-delay': `${index * 80}ms` }}
                >
                  <div className="about-branch-card__circle">
                    <img src={branch.logo} alt={branch.name} />
                  </div>
                  <p className="about-branch-card__name">{branch.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-pengurus">
          <div className="container">
            <div className="section-heading scroll-reveal">
              <h2>Leader of BOMA</h2>
            </div>

            <div className="about-pengurus__rows">
              <div className="about-pengurus__row">
                <div className="about-pengurus__carousel">
                  <button
                    type="button"
                    className="about-pengurus__nav about-pengurus__nav--prev"
                    aria-label="Lihat pengurus sebelumnya"
                    onClick={() => prevSlide(ketuaDepartemen, setDepartemenCarousel)}
                  >
                    &#8249;
                  </button>

                  <div className="about-pengurus__viewport">
                    <div
                      className={`about-pengurus__slide${departemenCarousel.isAnimating ? ' is-animating' : ''}`}
                      style={{
                        '--pengurus-columns': Math.min(visibleCardCount, ketuaDepartemen.length),
                        '--active-index': departemenCarousel.index,
                      }}
                      onTransitionEnd={() =>
                        normalizeCarousel(ketuaDepartemen, departemenCarousel, setDepartemenCarousel)}
                    >
                      {departemenLoop.map((pengurus, index) => (
                        <div className="about-pengurus-card" key={`departemen-${pengurus.name}-${index}`}>
                          <div className="about-pengurus-card__image">
                            <img src={pengurus.image} alt={pengurus.name} />
                          </div>
                          <div className="about-pengurus-card__meta">
                            <p className="about-pengurus-card__name">{pengurus.name}</p>
                            <p className="about-pengurus-card__role">{pengurus.jabatan}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="about-pengurus__nav about-pengurus__nav--next"
                    aria-label="Lihat pengurus berikutnya"
                    onClick={() => nextSlide(ketuaDepartemen, setDepartemenCarousel)}
                  >
                    &#8250;
                  </button>
                </div>
              </div>

              <div className="about-pengurus__row">
                <div className="about-pengurus__carousel">
                  <button
                    type="button"
                    className="about-pengurus__nav about-pengurus__nav--prev"
                    aria-label="Lihat pengurus sebelumnya"
                    onClick={() => prevSlide(ketuaBidang, setBidangCarousel)}
                  >
                    &#8249;
                  </button>

                  <div className="about-pengurus__viewport">
                    <div
                      className={`about-pengurus__slide${bidangCarousel.isAnimating ? ' is-animating' : ''}`}
                      style={{
                        '--pengurus-columns': Math.min(visibleCardCount, ketuaBidang.length),
                        '--active-index': bidangCarousel.index,
                      }}
                      onTransitionEnd={() =>
                        normalizeCarousel(ketuaBidang, bidangCarousel, setBidangCarousel)}
                    >
                      {bidangLoop.map((pengurus, index) => (
                        <div className="about-pengurus-card" key={`bidang-${pengurus.name}-${index}`}>
                          <div className="about-pengurus-card__image">
                            <img src={pengurus.image} alt={pengurus.name} />
                          </div>
                          <div className="about-pengurus-card__meta">
                            <p className="about-pengurus-card__name">{pengurus.name}</p>
                            <p className="about-pengurus-card__role">{pengurus.jabatan}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="about-pengurus__nav about-pengurus__nav--next"
                    aria-label="Lihat pengurus berikutnya"
                    onClick={() => nextSlide(ketuaBidang, setBidangCarousel)}
                  >
                    &#8250;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="section about-journey">
        <div className="container about-journey__grid">
          <div className="about-journey__media scroll-reveal scroll-reveal--left">
            <div className="about-journey__image-frame">
              <img src={visionImage} alt="Visual semangat kebersamaan untuk halaman about BOMA" />
            </div>
          </div>

          <div
            className="about-journey__copy scroll-reveal scroll-reveal--right"
            style={{ '--reveal-delay': '120ms' }}
          >
            <span className="section-tag">How We Move</span>
            <h2>Dari minat, menjadi sistem yang menjaga progres.</h2>
            <ol className="about-journey__list">
              {journeyPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="container">
          <div className="about-cta__panel scroll-reveal">
            <div>
              <span className="section-tag about-cta__tag">Next Step</span>
              <h2>Ingin mengenal BOMA lebih dekat?</h2>
              <p>
                Kunjungi gallery untuk melihat jejak prestasi atau langsung masuk ke kontak agar
                bisa terhubung dengan pengurus.
              </p>
            </div>

            <div className="about-cta__actions">
              <InternalLink className="pill-action" href="/#gallery" onNavigate={onNavigate}>
                Buka Gallery
              </InternalLink>
              <InternalLink
                className="pill-action pill-action--subtle"
                href="/#contact"
                onNavigate={onNavigate}
              >
                Ke Contact
              </InternalLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
