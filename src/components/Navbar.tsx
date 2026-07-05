import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const courses = [
  { to: '/courses/psvar-training', label: 'PSVAR Training' },
  { to: '/courses/accessibility-inspection', label: 'Accessibility Inspection & Compliance' },
  { to: '/courses/wheelchair-passenger-safety', label: 'Wheelchair Passenger Safety' },
  { to: '/courses/disability-awareness', label: 'Disability Awareness' },
  { to: '/courses/safeguarding', label: 'Safeguarding' },
  { to: '/courses/equality-act', label: 'Equality Act & Accessible Transport' },
  { to: '/courses/corporate-training', label: 'Corporate Training' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setCoursesOpen(false)
  }, [location])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(10,22,40,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <<img
  src="/assets/3BED2C2A-5C06-4C0F-9D88-46487B48CE16.png"
  alt="Transport Training UK"
  style={{
    height: '50px',
    width: 'auto',
    display: 'block'
  }}
/>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About Us' },
          ].map(({ to, label }) => (
            <NavLink key={to} to={to} end style={({ isActive }) => ({
              padding: '0.5rem 0.9rem', borderRadius: 6, color: isActive ? 'var(--blue-light)' : 'rgba(255,255,255,0.85)',
              fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.875rem',
              transition: 'all 0.2s', textDecoration: 'none',
            })}>
              {label}
            </NavLink>
          ))}

          {/* Courses dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}>
            <NavLink to="/courses" style={({ isActive }) => ({
              padding: '0.5rem 0.9rem', borderRadius: 6, color: isActive ? 'var(--blue-light)' : 'rgba(255,255,255,0.85)',
              fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.875rem',
              transition: 'all 0.2s', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem',
            })}>
              Courses <span style={{ fontSize: '0.7rem' }}>▼</span>
            </NavLink>
            {coursesOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, background: 'var(--navy)',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '0.5rem',
                minWidth: 280, boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                animation: 'fadeIn 0.15s ease',
              }}>
                {courses.map(c => (
                  <Link key={c.to} to={c.to} style={{
                    display: 'block', padding: '0.6rem 1rem', color: 'rgba(255,255,255,0.85)',
                    fontFamily: 'Open Sans, sans-serif', fontSize: '0.875rem', borderRadius: 6,
                    transition: 'all 0.15s',
                  }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; (e.target as HTMLElement).style.color = 'white'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)'; }}>
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { to: '/news', label: 'News & Resources' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <NavLink key={to} to={to} style={({ isActive }) => ({
              padding: '0.5rem 0.9rem', borderRadius: 6, color: isActive ? 'var(--blue-light)' : 'rgba(255,255,255,0.85)',
              fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.875rem',
              transition: 'all 0.2s', textDecoration: 'none',
            })}>
              {label}
            </NavLink>
          ))}

          <Link to="/contact" className="btn btn-primary" style={{ marginLeft: '0.5rem', padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
            Get a Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: 'white' }}
          className="mobile-menu-btn"
          aria-label="Toggle menu">
          <div style={{ width: 24, height: 2, background: 'white', marginBottom: 5, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: 24, height: 2, background: 'white', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
          <div style={{ width: 24, height: 2, background: 'white', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'var(--navy)', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '1rem' }}>
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About Us' },
            { to: '/courses', label: 'Training Courses' },
            ...courses,
            { to: '/news', label: 'News & Resources' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <Link key={to} to={to} style={{
              display: 'block', padding: '0.75rem 1rem', color: 'rgba(255,255,255,0.85)',
              fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.9rem',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              {label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
            Get a Quote
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
