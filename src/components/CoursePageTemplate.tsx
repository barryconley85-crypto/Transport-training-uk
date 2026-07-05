import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from './SEOHead'

export interface CourseData {
  title: string
  subtitle: string
  description: string
  seoDescription: string
  canonical: string
  duration: string
  audience: string[]
  overview: string
  outcomes: string[]
  operatorBenefits: string[]
  driverBenefits: string[]
  legalContext: string
  practicalContent: string[]
  faqs: { q: string; a: string }[]
  relatedCourses?: { to: string; label: string }[]
}

interface Props {
  course: CourseData
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span style={{ fontSize: '1.2rem', color: 'var(--blue)', transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'none', flexShrink: 0 }}>+</span>
      </button>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  )
}

export default function CoursePageTemplate({ course }: Props) {
  return (
    <>
      <SEOHead title={course.title} description={course.seoDescription} canonical={course.canonical} />

      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <Link to="/courses">Training Courses</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>{course.title}</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>⏱ {course.duration}</span>
            <span className="tag" style={{ background: 'rgba(21,101,192,0.4)', color: 'var(--blue-light)' }}>CPD Accredited</span>
          </div>
          <h1 className="animate-fade-in-up">{course.title}</h1>
          <p className="animate-fade-in-up delay-1">{course.subtitle}</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }} className="animate-fade-in-up delay-2">
            <Link to="/contact" className="btn btn-accent btn-lg">Enquire About This Course</Link>
            <Link to="/courses" className="btn btn-secondary btn-lg">View All Courses</Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section bg-off-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '3rem', alignItems: 'start' }}>
            {/* Left column */}
            <div>
              {/* Overview */}
              <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '2.5rem', boxShadow: 'var(--shadow-md)', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Course Overview</h2>
                <div className="divider divider-left" />
                <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginTop: '1rem' }}>{course.overview}</p>
              </div>

              {/* Learning outcomes */}
              <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '2.5rem', boxShadow: 'var(--shadow-md)', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Learning Outcomes</h2>
                <div className="divider divider-left" />
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', marginTop: '1rem', fontSize: '0.95rem' }}>Upon successful completion of this course, participants will be able to:</p>
                <ul className="outcome-list">
                  {course.outcomes.map((o, i) => <li key={i}>{o}</li>)}
                </ul>
              </div>

              {/* Practical content */}
              <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '2.5rem', boxShadow: 'var(--shadow-md)', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Practical Training Delivered</h2>
                <div className="divider divider-left" />
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', marginTop: '1rem', fontSize: '0.95rem' }}>This course includes hands-on, real-world practical elements covering:</p>
                <ul className="outcome-list">
                  {course.practicalContent.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>

              {/* Benefits grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
                  <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1rem' }}>Benefits to Operators</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {course.operatorBenefits.map((b, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.6rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                        <span style={{ color: 'var(--blue-light)', flexShrink: 0 }}>→</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: 'var(--blue)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
                  <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1rem' }}>Benefits to Drivers</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {course.driverBenefits.map((b, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.6rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                        <span style={{ color: 'var(--blue-light)', flexShrink: 0 }}>→</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Legal context */}
              <div style={{ background: 'var(--blue-pale)', borderRadius: 'var(--radius-lg)', padding: '2rem', borderLeft: '4px solid var(--blue)', marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--navy)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Legal Responsibilities</h3>
                <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, fontSize: '0.95rem' }}>{course.legalContext}</p>
              </div>

              {/* FAQs */}
              <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
                <div className="divider divider-left" style={{ marginBottom: '1.5rem' }} />
                {course.faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
              </div>
            </div>

            {/* Right sidebar */}
            <div style={{ position: 'sticky', top: '90px' }}>
              {/* Who should attend */}
              <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-md)', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--navy)' }}>Who Should Attend</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {course.audience.map((a, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-mid)', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--blue)', marginTop: '2px' }}>●</span>{a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)', borderRadius: 'var(--radius-lg)', padding: '2rem', color: 'white', marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Ready to Book?</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Contact our training team to discuss your requirements, group bookings and on-site delivery options.
                </p>
                <Link to="/contact" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem' }}>
                  Enquire Now
                </Link>
                <a href="tel:03001234567" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}>
                  📞 0300 123 4567
                </a>
              </div>

              {/* Related courses */}
              {course.relatedCourses && course.relatedCourses.length > 0 && (
                <div style={{ background: 'var(--grey-light)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--navy)' }}>Related Courses</h3>
                  {course.relatedCourses.map(rc => (
                    <Link key={rc.to} to={rc.to} style={{
                      display: 'block', padding: '0.6rem 0.75rem', color: 'var(--blue)',
                      fontSize: '0.875rem', fontWeight: 600, borderRadius: 6,
                      marginBottom: '0.25rem', transition: 'background 0.2s',
                    }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'white'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
                      → {rc.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>
            Protect Your Passengers. Protect Your Licence.
          </h2>
          <p style={{ maxWidth: 600, margin: '0 auto 2rem' }}>
            Our specialist training helps operators across the UK meet their legal obligations, reduce risk and deliver a safer, more inclusive service.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-accent btn-lg">Get a Training Quote</Link>
            <Link to="/courses" className="btn btn-secondary btn-lg">Explore All Courses</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .course-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
