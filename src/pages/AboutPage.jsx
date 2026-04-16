import { useEffect, useState } from 'react'
import aboutHeroImage from '../assets/about/about1.png'
import aboutSectionImage from '../assets/about/about2.jpeg'
import aboutSectionImageSecondary from '../assets/about/about3.png'
import pengurusintiBackground from '../assets/about/pengurusinti.png'
import logofutsal from '../assets/logo/logofutsal.png'
import logovoli from '../assets/logo/logovoli.png'
import logobasket from '../assets/logo/logobasket.png'
import logobadminton from '../assets/logo/logobadminton.png'
import logocatur from '../assets/logo/logocatur.png'
import ketua from '../assets/ketua-wakil/ketua.png'
import wakil from '../assets/ketua-wakil/wakil.png'
import bilal from '../assets/sekretaris/bilal.png'
import lala from '../assets/bendahara/lala.png'
import nafila from '../assets/dept-perekrutan/nafila.png'
import risma from '../assets/dept-pengembangan/risma.png'
import pale from '../assets/dept-medinfo/pale.png'
import tari from '../assets/dept-inventaris/tari.png'
import meysa from '../assets/dept-humas/meysa.png'
import pri from '../assets/dept-kewirausahaan/pri.png'
import royan from '../assets/bidang-futsal/royan.png'
import iki from '../assets/bidang-voli/iki.png'
import feri from '../assets/bidang-basket/feri.png'
import mahesa from '../assets/bidang-badminton/mahesa.png'
import yoga from '../assets/bidang-catur/yoga.png'
import strukturKetuaWakil from '../assets/ketua-wakil/ketuawakil.png'
import strukturSekretaris from '../assets/sekretaris/sekretaris.png'
import strukturBendahara from '../assets/bendahara/bendahara.png'
import strukturPerekrutan from '../assets/dept-perekrutan/perekrutan.png'
import strukturPengembangan from '../assets/dept-pengembangan/pengembangan.png'
import strukturMedinfo from '../assets/dept-medinfo/medinfo.png'
import strukturHumas from '../assets/dept-humas/humas.png'
import strukturInventaris from '../assets/dept-inventaris/inventaris.png'
import strukturKewirausahaan from '../assets/dept-kewirausahaan/kewirausahaan.png'
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

const branchesData = [
  { name: 'Futsal', logo: logofutsal },
  { name: 'Voli', logo: logovoli },
  { name: 'Basket', logo: logobasket },
  { name: 'Badminton', logo: logobadminton },
  { name: 'Catur', logo: logocatur },
]

const pengurusData = [
  // Ketua Departemen
  {
    name: 'Arya Adi Wijaya',
    jabatan: 'Ketua Umum',
    image: ketua,
    instagramUrl: 'https://www.instagram.com/aryaadiww/',
  },
  {
    name: 'Keyla Zahra',
    jabatan: 'Wakil Ketua',
    image: wakil,
    instagramUrl: 'https://www.instagram.com/keylazahra_dummy/',
  },
  {
    name: 'M. Bilal Mardhiyyano. A',
    jabatan: 'Sekretaris 1',
    image: bilal,
    instagramUrl: 'https://www.instagram.com/bilalmardhiyyano_dummy/',
  },
  {
    name: 'Naufal Latifah',
    jabatan: 'Bendahara 1',
    image: lala,
    instagramUrl: 'https://www.instagram.com/naufallatifah_dummy/',
  },
  {
    name: 'Nafila Fauziyah',
    jabatan: 'Kadept Kaderisasi & Perekrutan',
    image: nafila,
    instagramUrl: 'https://www.instagram.com/nafilafauziyah_dummy/',
  },
  {
    name: 'Risma Nurkamila',
    jabatan: 'Kadept Pengembangan',
    image: risma,
    instagramUrl: 'https://www.instagram.com/rismanurkamila_dummy/',
  },
  {
    name: 'Naufal Abdala. S',
    jabatan: 'Kadepet Media & Informasi',
    image: pale,
    instagramUrl: 'https://www.instagram.com/naufalabdala_dummy/',
  },
  {
    name: 'Mentari Meyllani. P',
    jabatan: 'Kadept Inventaris',
    image: tari,
    instagramUrl: 'https://www.instagram.com/mentarimeyllani_dummy/',
  },
  {
    name: 'Meysa Damayahnthi. H',
    jabatan: 'Kadept Hubungan Masyarakat',
    image: meysa,
    instagramUrl: 'https://www.instagram.com/meysadamayahnthi_dummy/',
  },
  {
    name: 'Prihatma Nurwahid',
    jabatan: 'Kadept Kewirausahaan',
    image: pri,
    instagramUrl: 'https://www.instagram.com/prihatmanurwahid_dummy/',
  },
  // Ketua Bidang
  {
    name: 'Royan Akbar',
    jabatan: 'Ketua Bidang Futsal',
    image: royan,
    instagramUrl: 'https://www.instagram.com/royanakbar_dummy/',
  },
  {
    name: 'Achmad Rizky Fauzy',
    jabatan: 'Ketua Bidang Voli',
    image: iki,
    instagramUrl: 'https://www.instagram.com/achmadrizkyfauzy_dummy/',
  },
  {
    name: 'Feri Ilham Azkia',
    jabatan: 'Ketua Bidang Basket',
    image: feri,
    instagramUrl: 'https://www.instagram.com/feriilhamazkia_dummy/',
  },
  {
    name: 'Mahesa Syawal A',
    jabatan: 'Ketua Bidang Badminton',
    image: mahesa,
    instagramUrl: 'https://www.instagram.com/mahesasyawal_dummy/',
  },
  {
    name: 'Yoga Triansyah',
    jabatan: 'Ketua Bidang Catur',
    image: yoga,
    instagramUrl: 'https://www.instagram.com/yogatriansyah_dummy/',
  },
]

const strukturKepengurusanRows = [
  [{ title: 'Ketua & Wakil Ketua', image: strukturKetuaWakil }],
  [
    { title: 'Sekretaris', image: strukturSekretaris },
    { title: 'Bendahara', image: strukturBendahara },
  ],
  [
    { title: 'Dept. Perekrutan', image: strukturPerekrutan },
    { title: 'Dept. Pengembangan', image: strukturPengembangan },
    { title: 'Dept. Media & Informasi', image: strukturMedinfo },
  ],
  [
    { title: 'Dept. Humas', image: strukturHumas },
    { title: 'Dept. Inventaris', image: strukturInventaris },
    { title: 'Dept. Kewirausahaan', image: strukturKewirausahaan },
  ],
]

const ketuaDepartemen = pengurusData.slice(0, 10)
const ketuaBidang = pengurusData.slice(10)

function AboutPage() {
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
                        <a
                          className="about-pengurus-card"
                          key={`departemen-${pengurus.name}-${index}`}
                          href={pengurus.instagramUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Buka profil Instagram ${pengurus.name}`}
                        >
                          <div className="about-pengurus-card__image">
                            <img src={pengurus.image} alt={pengurus.name} />
                          </div>
                          <div className="about-pengurus-card__meta">
                            <p className="about-pengurus-card__name">{pengurus.name}</p>
                            <p className="about-pengurus-card__role">{pengurus.jabatan}</p>
                          </div>
                        </a>
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
                        <a
                          className="about-pengurus-card"
                          key={`bidang-${pengurus.name}-${index}`}
                          href={pengurus.instagramUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Buka profil Instagram ${pengurus.name}`}
                        >
                          <div className="about-pengurus-card__image">
                            <img src={pengurus.image} alt={pengurus.name} />
                          </div>
                          <div className="about-pengurus-card__meta">
                            <p className="about-pengurus-card__name">{pengurus.name}</p>
                            <p className="about-pengurus-card__role">{pengurus.jabatan}</p>
                          </div>
                        </a>
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

      <section className="section about-structure">
        <div className="container">
          <div className="section-heading scroll-reveal">
            <h2>Organizational Structure</h2>
          </div>

          <div className="about-structure__rows">
            {strukturKepengurusanRows.map((row, rowIndex) => (
              <div
                className={`about-structure__row about-structure__row--${row.length} scroll-reveal`}
                key={`struktur-row-${rowIndex}`}
                style={{
                  '--structure-columns': row.length,
                  '--reveal-delay': `${rowIndex * 90}ms`,
                }}
              >
                {row.map((item) => (
                  <article className="about-structure-card" key={item.title}>
                    <div className="about-structure-card__image">
                      <img src={item.image} alt={`Struktur kepengurusan ${item.title}`} />
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
