import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { allCourses } from '../data/courses'

const HERO_IMG = '/assets/hero-bus.jpg'
const WHEELCHAIR_IMG = '/assets/wheelchair-training.jpg'

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1800
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <div ref={ref} className="stat-number">{count.toLocaleString()}{suffix}</div>
}

const tagColors: Record<string, string> = {
  Compliance: '#1565c0',
  Safety: '#0a7c59',
  Inclusion: '#7b3fa0',
  Safeguarding: '#c0392b',
  Legal: '#e67e22',
  Bespoke: '#2c3e50',
}

export default function Home() {
  return (
    <>
      <SEOHead
        title="Transport Training UK — Specialist Passenger Transport Accessibility & Compliance Training"
        description="The UK's specialist provider of passenger transport accessibility, safety and compliance training. PSVAR, Wheelchair Safety, Disability Awareness, Safeguarding and Equality Act training delivered nationwide."
        canonical="/"
      />

      {/* HERO */}
      <section style={{
        position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center',
        background: 'var(--navy)', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.35,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.75) 50%, rgba(21,101,192,0.4) 100%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem 4rem' }}>
          <div style={{ maxWidth: 780 }}>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }} className="animate-fade-in">
              <span style={{ background: 'rgba(21,101,192,0.3)', border: '1px solid rgba(66,165,245,0.4)', color: 'var(--blue-light)', padding: '0.3rem 0.9rem', borderRadius: 100, fontSize: '0.8rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, letterSpacing: '0.06em' }}>DVSA Aligned</span>
              <span style={{ background: 'rgba(21,101,192,0.3)', border: '1px solid rgba(66,165,245,0.4)', color: 'var(--blue-light)', padding: '0.3rem 0.9rem', borderRadius: 100, fontSize: '0.8rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, letterSpacing: '0.06em' }}>Nationwide Delivery</span>
              <span style={{ background: 'rgba(21,101,192,0.3)', border: '1px solid rgba(66,165,245,0.4)', color: 'var(--blue-light)', padding: '0.3rem 0.9rem', borderRadius: 100, fontSize: '0.8rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, letterSpacing: '0.06em' }}>CPD Accredited</span>
            </div>
            <h1 className="animate-fade-in-up" style={{ color: 'white', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              The UK's Specialist in<br />
              <span style={{ color: 'var(--blue-light)' }}>Transport Accessibility</span><br />
              & Compliance Training
            </h1>
            <p className="animate-fade-in-up delay-1" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 640 }}>
              We help bus and coach operators across the UK stay compliant, reduce liability and improve driver confidence through practical, real-world training grounded in PSVAR, the Equality Act 2010 and DVSA best practice.
            </p>
            <div className="animate-fade-in-up delay-2" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/courses" className="btn btn-accent btn-lg">Explore Our Courses</Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">Request a Quote</Link>
            </div>
            <div className="animate-fade-in-up delay-3" style={{ display: 'flex', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }}>
              {[['500+', 'Operators Trained'], ['12,000+', 'Drivers Certified'], ['100%', 'UK Coverage']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.75rem', color: 'var(--blue-light)', lineHeight: 1 }}>{n}</div>
                  <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.5 }}>
          <div style={{ width: 1, height: 40, background: 'white', animation: 'fadeInUp 1s ease infinite alternate' }} />
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: 'var(--navy-mid)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '1.25rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
          {['DVSA Guidance Aligned', 'DfT Inclusive Transport Strategy', 'CPT Best Practice', 'Equality Act 2010 Compliant', 'PSVAR 2000 & PSVAIR 2023'].map(label => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, letterSpacing: '0.04em' }}>
              <span style={{ color: 'var(--blue-light)', fontSize: '0.9rem' }}>✓</span> {label}
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRY STATISTICS */}
      <section className="section bg-navy">
        <div className="container">
          <div className="section-header">
            <span className="section-label" style={{ background: 'rgba(66,165,245,0.15)', color: 'var(--blue-light)' }}>The Case for Training</span>
            <h2 className="section-title" style={{ color: 'white' }}>The Compliance Gap in UK Transport</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Research consistently shows that accessibility failures in passenger transport are widespread — and the legal and reputational consequences are significant.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            {[
              { n: 41, s: '%', label: 'of disabled passengers experienced negative driver attitudes or behaviours', src: 'Transport for All, 2024' },
              { n: 28, s: '%', label: 'experienced problems with ramps or accessibility equipment', src: 'Transport for All, 2024' },
              { n: 51, s: '%', label: 'experienced issues with priority spaces and seating', src: 'Transport for All, 2024' },
              { n: 13, s: '%', label: 'said they were unable to use buses at all due to accessibility barriers', src: 'Transport for All, 2024' },
            ].map(({ n, s, label, src }, i) => (
              <div key={i} className="stat-card" style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <AnimatedNumber target={n} suffix={s} />
                <p className="stat-label">{label}</p>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', marginTop: '0.5rem', fontStyle: 'italic' }}>{src}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginTop: '2rem', lineHeight: 1.6 }}>
            These are not just customer service failures — they are legal compliance failures with real consequences for operators, drivers and the passengers who depend on accessible transport.
          </p>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Training Courses</span>
            <h2 className="section-title">Specialist Training for Every Compliance Need</h2>
            <p className="section-subtitle">From PSVAR legislation to wheelchair safety and safeguarding, our courses are designed for the real world of UK passenger transport.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {allCourses.map(course => (
              <Link key={course.to} to={course.to} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ background: tagColors[course.tag] || 'var(--blue)', color: 'white', fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: 100, fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>{course.tag}</span>
                    <span style={{ color: 'var(--text-light)', fontSize: '0.8rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>⏱ {course.duration}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', lineHeight: 1.3 }}>{course.title}</h3>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem', lineHeight: 1.6, flex: 1 }}>{course.description}</p>
                  <div style={{ color: 'var(--blue)', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    Learn More <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/courses" className="btn btn-primary btn-lg">View All Training Courses</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Practical Training That Makes a Real Difference</h2>
              <div className="divider divider-left" />
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, margin: '1.5rem 0', fontSize: '1rem' }}>
                We are not a generic training company that happens to offer transport courses. We are specialists in UK passenger transport accessibility, safety and compliance — and everything we do is designed around the real challenges operators and drivers face every day.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>
                Our trainers have direct experience of the transport sector, and our courses are built on the latest DVSA guidance, DfT policy and CPT best practice. We deliver training that is immediately applicable — not just in the classroom, but on the road.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: '🎯', title: 'Sector Specialists', desc: 'Deep expertise in UK passenger transport law, PSVAR, PSVAIR and DVSA enforcement.' },
                  { icon: '🚌', title: 'On-Site Delivery', desc: 'We come to your depot and train on your vehicles, ensuring skills transfer directly to the workplace.' },
                  { icon: '📋', title: 'Compliance Documentation', desc: 'Every course includes training records and certificates that protect your operator licence.' },
                  { icon: '🇬🇧', title: 'Nationwide Coverage', desc: 'We deliver training across England, Scotland and Wales, with flexible scheduling to suit your operation.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 44, height: 44, background: 'var(--blue-pale)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{title}</div>
                      <div style={{ color: 'var(--text-light)', fontSize: '0.875rem', lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                <img src={WHEELCHAIR_IMG} alt="Driver assisting wheelchair user onto accessible bus" style={{ width: '100%', height: 480, objectFit: 'cover' }} />
              </div>
              <div style={{
                position: 'absolute', bottom: -24, left: -24,
                background: 'var(--navy)', color: 'white', borderRadius: 'var(--radius-lg)',
                padding: '1.5rem', boxShadow: 'var(--shadow-xl)', maxWidth: 240,
              }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '2rem', color: 'var(--blue-light)', lineHeight: 1 }}>10+</div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.25rem' }}>Years of specialist transport training experience</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .why-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-grey-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Client Testimonials</span>
            <h2 className="section-title">Trusted by Operators Across the UK</h2>
          </div>
          <div className="grid-3">
            {[
              { quote: 'The PSVAR training was exactly what we needed. Our drivers now understand their legal duties and approach accessibility with genuine confidence. We passed our DVSA inspection without a single accessibility-related issue.', name: 'Operations Director', company: 'Regional Bus Operator, Yorkshire' },
              { quote: 'The wheelchair safety course transformed how our drivers handle mobility equipment. The practical, hands-on approach meant skills were immediately applied in service. Complaints about accessibility have dropped significantly.', name: 'Transport Manager', company: 'Community Transport Provider, West Midlands' },
              { quote: 'We commissioned a full corporate training package covering PSVAR, disability awareness and safeguarding. The trainer\'s knowledge of the sector was exceptional. Our local authority contract was renewed with commendation for our training standards.', name: 'Managing Director', company: 'School Transport Operator, South East' },
            ].map(({ quote, name, company }, i) => (
              <div key={i} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ color: 'var(--blue)', fontSize: '2rem', lineHeight: 1 }}>"</div>
                <p style={{ color: 'var(--text-mid)', lineHeight: 1.7, fontSize: '0.925rem', flex: 1, fontStyle: 'italic' }}>{quote}</p>
                <div style={{ borderTop: '1px solid var(--grey-mid)', paddingTop: '1rem' }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: 'var(--navy)', fontSize: '0.875rem' }}>{name}</div>
                  <div style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>{company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NATIONWIDE COVERAGE */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Nationwide Coverage</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Training Delivered Wherever You Operate</h2>
              <div className="divider divider-left" />
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, margin: '1.5rem 0' }}>
                We deliver specialist transport training at depots, operating centres and training facilities across England, Scotland and Wales. Our trainers travel to you, ensuring that practical training is conducted on your vehicles and with your equipment — the most effective way to ensure skills are retained and applied.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {['London & South East', 'Midlands', 'North West', 'Yorkshire & Humber', 'South West', 'East of England', 'Scotland', 'Wales'].map(region => (
                  <div key={region} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-mid)' }}>
                    <span style={{ color: 'var(--success)', fontWeight: 700 }}>✓</span> {region}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Check Availability in Your Area</Link>
            </div>
            <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '3rem', color: 'white' }}>
              <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Get a Training Quote</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  { label: 'Phone', value: '0300 123 4567', href: 'tel:03001234567' },
                  { label: 'Email', value: 'info@transporttraininguk.co.uk', href: 'mailto:info@transporttraininguk.co.uk' },
                ].map(({ label, value, href }) => (
                  <div key={label}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{label}</div>
                    <a href={href} style={{ color: 'var(--blue-light)', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>{value}</a>
                  </div>
                ))}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                We respond to all enquiries within one working day. Group bookings and on-site delivery available for all courses.
              </p>
              <Link to="/contact" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>Send an Enquiry</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>Ready to Improve Your Compliance?</h2>
          <p style={{ maxWidth: 600, margin: '0 auto 2rem' }}>
            Join hundreds of operators across the UK who trust Transport Training UK to keep their drivers compliant, their passengers safe and their licences protected.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/courses" className="btn btn-accent btn-lg">Browse All Courses</Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">Speak to Our Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
