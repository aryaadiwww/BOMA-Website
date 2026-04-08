import InternalLink from './InternalLink.jsx'
import logoBoma from '../assets/LogoBOMA2.png'
import { quickActions, siteNavigation } from '../data/siteData.js'

function SiteHeader({ currentPath, onNavigate }) {
  return (
    <header className="site-header">
      <div className="container site-header__inner page-enter page-enter--header">
        <InternalLink className="brand" href="/" aria-label="BOMA Home" onNavigate={onNavigate}>
          <span className="brand__mark" aria-hidden="true">
            <img className="brand__logo" src={logoBoma} alt="" />
          </span>
          <span className="brand__copy">
            <strong>BOMA</strong>
            <small>Badan Olahraga Mahasiswa</small>
          </span>
        </InternalLink>

        <nav className="site-nav" aria-label="Main navigation">
          {siteNavigation.map((item) => (
            <InternalLink
              key={item.href}
              href={item.href}
              ariaCurrent={item.matchPath === currentPath ? 'page' : undefined}
              onNavigate={onNavigate}
            >
              {item.label}
            </InternalLink>
          ))}
        </nav>

        <div className="site-header__actions">
          {quickActions.map((item) => (
            <InternalLink
              key={item.label}
              className={`pill-action${item.subtle ? ' pill-action--subtle' : ''}`}
              href={item.href}
              onNavigate={onNavigate}
            >
              {item.label}
            </InternalLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
