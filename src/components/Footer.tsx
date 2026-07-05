
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.75)', paddingTop: '4rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {/* Brand */}
<div>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1rem'
    }}
  >
    <img
      src="/assets/3BED2C2A-5C06-4C0F-9D88-46487B48CE16.png"
      alt="Transport Training UK"
      style={{
        height: '50px',
        width: 'auto',
        display: 'block'
      }}
    />

    <div>
      <div
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 800,
          color: 'white',
          fontSize: '1rem'
        }}
      >
        Transport Training UK
      </div>
    </div>
  </div>

  <p
    style={{
      fontSize: '0.875rem',
      lineHeight: 1.7,
      marginBottom: '1.25rem'
    }}
  >
    The UK's specialist provider of passenger transport accessibility,
    safety and compliance training. Helping operators stay compliant,
    reduce liability and improve driver confidence.
  </p>

  <div style={{ display: 'flex', gap: '0.5rem' }}>
    {['DVSA', 'CPT', 'DfT'].map(badge => (
      <span
        key={badge}
        style={{
          background: 'rgba(255,255,255,0.1)',
          color: 'rgba(255,255,255,0.7)',
          fontSize: '0.7rem',
          fontWeight: 700,
          padding: '0.25rem 0.6rem',
          borderRadius: 4,
          fontFamily: 'Montserrat, sans-serif',
          letterSpacing: '0.05em'
        }}
      >
        {badge} Aligned
      </span>
    ))}
  </div>
</div>

          {/* Training Courses */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Training Courses</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { to: '/courses/psvar-training', label: 'PSVAR Training' },
                { to: '/courses/accessibility-inspection', label: 'Accessibility Inspection' },
                { to: '/courses/wheelchair-passenger-safety', label: 'Wheelchair Passenger Safety' },
                { to: '/courses/disability-awareness', label: 'Disability Awareness' },
                { to: '/courses/safeguarding', label: 'Safeguarding' },
                { to: '/courses/equality-act', label: 'Equality Act & Transport' },
                { to: '/courses/corporate-training', label: 'Corporate Training' },
              ].map(({ to, label }) => (
                <li key={to}><Link to={to} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = 'white'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { to: '/about', label: 'About Us' },
                { to: '/courses', label: 'All Courses' },
                { to: '/news', label: 'News & Resources' },
                { to: '/contact', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to}><Link to={to} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = 'white'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</div>
                <a href="tel:03001234567" style={{ color: 'rgba(255,255,255,0.85)' }}>0300 123 4567</a>
              </div>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                <a href="mailto:info@transporttraininguk.co.uk" style={{ color: 'rgba(255,255,255,0.85)' }}>info@transporttraininguk.co.uk</a>
              </div>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Coverage</div>
                <span style={{ color: 'rgba(255,255,255,0.85)' }}>Nationwide — England, Scotland & Wales</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>
            © {new Date().getFullYear()} Transport Training UK Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map(label => (
              <Link key={label} to="/contact" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.75)'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.45)'}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
