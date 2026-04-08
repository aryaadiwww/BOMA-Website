import { useEffect, useState } from 'react'
import AppIcon from './AppIcon.jsx'
import InternalLink from './InternalLink.jsx'
import { contactDetails, footerLogos, footerQuickLinks, socials } from '../data/siteData.js'

function SiteFooter({ onNavigate }) {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false)

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

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__column">
          <h3>Quick Links</h3>
          <nav className="footer-link-list" aria-label="Footer quick links">
            {footerQuickLinks.map((item) => (
              <InternalLink key={item.href} href={item.href} onNavigate={onNavigate}>
                {item.label}
              </InternalLink>
            ))}
          </nav>
        </div>

        <div className="site-footer__column site-footer__column--brand">
          <div className="site-footer__brand">
            {footerLogos.map((logo) => (
              <span className={logo.className} key={logo.id}>
                <img src={logo.src} alt={logo.alt} />
              </span>
            ))}
          </div>

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
        <p>Copyright © 2025 BOMA UPI Kampus Cibiru. All rights reserved.</p>
      </div>

      <button
        className={`scroll-top${isScrollTopVisible ? ' is-visible' : ''}`}
        type="button"
        aria-label="Kembali ke atas"
        onClick={handleScrollTop}
      >
        <AppIcon name="arrow-up" />
      </button>
    </footer>
  )
}

export default SiteFooter
