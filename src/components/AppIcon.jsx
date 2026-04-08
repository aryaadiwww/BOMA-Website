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

export default AppIcon
