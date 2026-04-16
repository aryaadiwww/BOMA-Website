import logoBoma from '../assets/logo/LogoBOMA2.png'
import logoCibiru from '../assets/logo/logocibiru.png'
import logoUpi from '../assets/logo/logoupi.png'

export const siteNavigation = [
  { label: 'Home', href: '/', matchPath: '/' },
  { label: 'About', href: '/about', matchPath: '/about' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
]

export const quickActions = [
  { label: 'Join BOMA', href: '/#contact' },
  { label: 'Lihat Gallery', href: '/#gallery', subtle: true },
]

export const footerQuickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/#gallery' },
]

export const contactDetails = [
  {
    id: 'whatsapp',
    icon: 'phone',
    text: '+62 821-1804-0677 (Arya)',
    href: 'https://wa.me/6282118040677',
    external: true,
  },
  {
    id: 'secretariat',
    icon: 'map-pin',
    text: 'Gedung Sekretariat UPI Kampus Cibiru (Barisan ke 3 sebelah kiri dari pintu masuk)',
    href: 'https://maps.app.goo.gl/DtiWq8n3N66Q1Pgm7',
    external: true,
  },
  {
    id: 'email',
    icon: 'mail',
    text: 'bomaupicibir02@gmail.com',
    href: 'mailto:bomaupicibir02@gmail.com',
    external: true,
  },
]

export const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/boma_upicibiru?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: 'instagram',
    external: true,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@bomaupicibiru?_r=1&_t=ZS-95M71Q3yZRl',
    icon: 'tiktok',
    external: true,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCu9hPDONUuVrCx4VDrsoEaw',
    icon: 'youtube',
    external: true,
  },
  { label: 'Email', href: 'mailto:bomaupicibir02@gmail.com', icon: 'mail' },
  { label: 'WhatsApp', href: 'https://wa.me/6282118040677', icon: 'phone', external: true },
]

export const footerLogos = [
  {
    id: 'upi',
    src: logoUpi,
    alt: 'Logo UPI',
    className: 'site-footer__brand-logo site-footer__brand-logo--upi',
  },
  {
    id: 'cibiru',
    src: logoCibiru,
    alt: 'Logo UPI Kampus Cibiru',
    className: 'site-footer__brand-logo site-footer__brand-logo--cibiru',
  },
  {
    id: 'boma',
    src: logoBoma,
    alt: 'Logo BOMA',
    className: 'site-footer__brand-logo site-footer__brand-logo--boma',
  },
]
