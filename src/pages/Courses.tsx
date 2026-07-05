
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { allCourses } from '../data/courses'

const tagColors: Record<string, string> = {
  Compliance: '#1565c0',
  Safety: '#0a7c59',
  Inclusion: '#7b3fa0',
  Safeguarding: '#c0392b',
  Legal: '#e67e22',
  Bespoke: '#2c3e50',
}

export default function Courses() {
  return (
    <>
      <SEOHead
        title="Training Courses"
        description="Browse all specialist passenger transport training courses from Transport Training UK. PSVAR, Wheelchair Safety, Disability Awareness, Safeguarding, Equality Act and Corporate Training packages."
        canonical="/courses"
      />

      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Training Courses</span>
          </div>
          <h1 className="animate-fade-in-up">Our Training Courses</h1>
          <p className="animate-fade-in-up delay-1">
            Specialist, practical training for passenger transport operators and drivers across the UK. Every course is built on current legislation, DVSA guidance and real-world best practice.
          </p>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          {/* Why training matters */}
          <div style={{ background: 'var(--blue-pale)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', marginBottom: '3rem', borderLeft: '4px solid var(--blue)' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Why Specialist Training Matters</h2>
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, fontSize: '0.95rem', maxWidth: 900 }}>
              The UK's passenger transport sector is subject to a complex and evolving set of legal obligations. The Public Service Vehicles Accessibility Regulations 2000 (PSVAR), the Equality Act 2010, PSVAIR 2023 and DVSA enforcement guidance place significant duties on operators and drivers. Non-compliance is not just a regulatory risk — it is a risk to the safety and dignity of the passengers who depend on accessible transport. Our courses translate legislation into practical, actionable knowledge that protects your passengers, your drivers and your operator licence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
            {allCourses.map(course => (
              <Link key={course.to} to={course.to} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ background: 'var(--navy)', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ background: tagColors[course.tag] || 'var(--blue)', color: 'white', fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: 100, fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>{course.tag}</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>⏱ {course.duration}</span>
                  </div>
                  <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--navy)', lineHeight: 1.3 }}>{course.title}</h3>
                    <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem', lineHeight: 1.7, flex: 1 }}>{course.description}</p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ background: 'var(--grey-light)', color: 'var(--text-light)', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: 100, fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>CPD Accredited</span>
                      <span style={{ background: 'var(--grey-light)', color: 'var(--text-light)', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: 100, fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>On-Site Available</span>
                    </div>
                    <div style={{ color: 'var(--blue)', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.4rem', borderTop: '1px solid var(--grey-mid)', paddingTop: '1rem' }}>
                      View Course Details →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Complementary courses note */}
          <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', marginTop: '3rem', color: 'white' }}>
            <h3 style={{ color: 'white', marginBottom: '1rem' }}>Complementary Training Recommendations</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Based on our research and experience working with transport operators, we recommend the following additional training modules to complement your accessibility and compliance programme:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {[
                { title: 'Emergency Procedures & Evacuation', desc: 'Safe evacuation of disabled passengers and wheelchair users in the event of an incident.' },
                { title: 'First Aid for Transport Drivers', desc: 'Basic first aid skills tailored to the transport environment, including passenger medical emergencies.' },
                { title: 'Manual Handling for Drivers', desc: 'Safe techniques for assisting passengers with luggage and mobility aids without risk of injury.' },
                { title: 'Customer Service Excellence', desc: 'Enhancing the overall passenger experience and managing challenging customer interactions.' },
                { title: 'Driver CPC Periodic Training', desc: 'Periodic training modules aligned with Driver CPC requirements, including accessibility topics.' },
                { title: 'Risk Assessment for Transport', desc: 'Conducting and documenting risk assessments for passenger transport operations.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 10, padding: '1.25rem' }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: 'var(--blue-light)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/contact" className="btn btn-accent">Enquire About Complementary Training</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Not Sure Which Course You Need?</h2>
          <p style={{ maxWidth: 600, margin: '0 auto 2rem' }}>Our training specialists will help you identify the right combination of courses for your fleet, routes and compliance requirements.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-accent btn-lg">Speak to Our Team</Link>
            <Link to="/courses/corporate-training" className="btn btn-secondary btn-lg">View Corporate Packages</Link>
          </div>
        </div>
      </section>
    </>
  )
}
