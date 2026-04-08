function InternalLink({
  href,
  onNavigate,
  children,
  className,
  ariaCurrent,
  ...props
}) {
  const handleClick = (event) => {
    if (
      !onNavigate ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return
    }

    const targetUrl = new URL(href, window.location.origin)

    if (targetUrl.origin !== window.location.origin) {
      return
    }

    event.preventDefault()
    onNavigate(href)
  }

  return (
    <a
      href={href}
      className={className}
      aria-current={ariaCurrent}
      {...props}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

export default InternalLink
