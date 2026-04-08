import InternalLink from '../components/InternalLink.jsx'
import heroImage from '../assets/gedungbiru.jpg'
import visionImage from '../assets/visimisi.jpeg'
import logoBoma from '../assets/LogoBOMA2.png'
import './AboutPage.css'

const spotlightItems = [
  {
    value: '5+',
    label: 'Cabang olahraga aktif yang rutin bergerak bersama.',
  },
  {
    value: '250+',
    label: 'Mahasiswa yang terhubung lewat agenda, latihan, dan kompetisi.',
  },
  {
    value: '1',
    label: 'Rumah kolaborasi untuk olahraga, solidaritas, dan prestasi kampus.',
  },
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

function AboutPage({ onNavigate }) {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__copy page-enter" style={{ '--enter-delay': '160ms' }}>
            <span className="eyebrow">About BOMA</span>
            <h1>Tumbuh lewat olahraga, bergerak lewat kebersamaan.</h1>
            <p className="about-hero__lead">
              BOMA UPI Cibiru adalah rumah untuk mahasiswa yang ingin membangun potensi olahraga
              dengan disiplin, sportivitas, dan semangat kolektif. Halaman ini dibuat terpisah
              agar profil organisasi punya ruang sendiri tanpa bercampur dengan halaman utama.
            </p>

            <div className="about-hero__actions">
              <InternalLink className="pill-action" href="/#contact" onNavigate={onNavigate}>
                Hubungi Kami
              </InternalLink>
              <InternalLink
                className="pill-action pill-action--subtle"
                href="/#gallery"
                onNavigate={onNavigate}
              >
                Lihat Prestasi
              </InternalLink>
            </div>

            <div className="about-hero__highlights">
              {spotlightItems.map((item) => (
                <article className="about-spotlight-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="about-hero__visual page-enter" style={{ '--enter-delay': '260ms' }}>
            <div className="about-hero__image-frame">
              <img src={heroImage} alt="Gedung UPI Kampus Cibiru sebagai visual halaman about" />
            </div>

            <div className="about-hero__badge">
              <span>Profile Space</span>
              <strong>BOMA UPI Cibiru</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container">
          <div className="section-heading section-heading--left section-heading--compact scroll-reveal">
            <span className="section-tag">Who We Are</span>
            <h2>Organisasi yang dibangun untuk bergerak, bukan sekadar terlihat aktif.</h2>
          </div>

          <div className="about-story__layout">
            <article className="about-story__quote scroll-reveal scroll-reveal--left">
              <img className="about-story__quote-logo" src={logoBoma} alt="Logo BOMA" />
              <p>
                BOMA menjaga agar olahraga di kampus punya ritme, arah, dan ruang tumbuh yang
                terasa nyata untuk anggotanya.
              </p>
            </article>

            <div className="about-story__blocks">
              {storyBlocks.map((item, index) => (
                <article
                  className="about-story-card scroll-reveal scroll-reveal--card"
                  key={item.title}
                  style={{ '--reveal-delay': `${index * 100}ms` }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <div className="section-heading scroll-reveal">
            <span className="section-tag">Nilai Gerak</span>
            <h2>Tiga fondasi yang membuat BOMA tetap relevan.</h2>
          </div>

          <div className="about-values__grid">
            {valueCards.map((item, index) => (
              <article
                className="about-value-card scroll-reveal scroll-reveal--card"
                key={item.title}
                style={{ '--reveal-delay': `${index * 90}ms` }}
              >
                <span className="about-value-card__index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
