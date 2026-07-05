
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const ABOUT_IMG = '/assets/about-team.jpg'

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Transport Training UK is the UK's specialist provider of passenger transport accessibility, safety and compliance training. Learn about our team, our approach and our commitment to inclusive transport."
        canonical="/about"
      />

      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>About Us</span>
          </div>
          <h1 className="animate-fade-in-up">About Transport Training UK</h1>
          <p className="animate-fade-in-up delay-1">
            We are the UK's specialist provider of passenger transport accessibility, safety and compliance training — helping operators stay compliant, reduce liability and improve driver confidence since 2014.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Mission</span>
              <h2 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Making Accessible Transport Safer for Everyone</h2>
              <div className="divider divider-left" />
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, margin: '1.5rem 0' }}>
                Transport Training UK was founded on a simple but important belief: that every passenger deserves to travel safely, with dignity and without discrimination — and that every driver and operator deserves the knowledge and skills to make that happen.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                The UK's passenger transport sector operates within a complex and evolving legal framework. The Public Service Vehicles Accessibility Regulations 2000, the Equality Act 2010, PSVAIR 2023 and DVSA enforcement guidance place significant obligations on operators and drivers alike. Yet research consistently shows that accessibility failures remain widespread — not because operators don't care, but because the training and knowledge to get it right has not always been available.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8 }}>
                We exist to close that gap. Our training is practical, sector-specific and built on the latest legislation and best practice. We don't just tell operators what the law says — we help them understand why it matters, how to apply it in the real world, and how to build a compliance culture that protects their passengers, their drivers and their business.
              </p>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
              <img src={ABOUT_IMG} alt="Transport training team in a professional training environment" style={{ width: '100%', height: 480, objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Everything We Do</h2>
          </div>
          <div className="grid-3">
            {[
              { icon: '⚖️', title: 'Compliance Without Compromise', desc: 'We believe that legal compliance and excellent service are not in tension — they reinforce each other. Our training helps operators meet their obligations while delivering a better experience for all passengers.' },
              { icon: '♿', title: 'Inclusion as Standard', desc: 'Accessible transport is not a special provision — it is a right. We are committed to helping the transport sector deliver services that genuinely include everyone, regardless of disability or mobility need.' },
              { icon: '🎓', title: 'Practical, Real-World Learning', desc: 'Classroom theory only goes so far. Our training is built around practical, hands-on learning using real vehicles and equipment, ensuring that skills are retained and applied where it matters most — in service.' },
              { icon: '🛡️', title: 'Protecting What Matters', desc: 'We understand that an operator\'s licence is their livelihood. Our training is designed to protect it — by building the compliance culture, documentation and driver knowledge that regulators and commissioners expect.' },
              { icon: '🤝', title: 'Partnership Approach', desc: 'We work with operators as partners, not just training providers. We take the time to understand your fleet, your routes and your challenges, and we tailor our training to deliver maximum value.' },
              { icon: '📈', title: 'Continuous Improvement', desc: 'The legislative and regulatory landscape is always evolving. We continuously update our courses to reflect the latest DVSA guidance, DfT policy and CPT best practice, ensuring our training is always current.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section bg-navy">
        <div className="container">
          <div className="section-header">
            <span className="section-label" style={{ background: 'rgba(66,165,245,0.15)', color: 'var(--blue-light)' }}>Our Credentials</span>
            <h2 className="section-title" style={{ color: 'white' }}>Training You Can Trust</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>Our courses are aligned with the leading regulatory and industry bodies in UK passenger transport.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'DVSA Guidance Aligned', desc: 'All our courses are developed in line with current DVSA guidance on PSV operator licensing, driver responsibilities and accessibility compliance.' },
              { title: 'DfT Inclusive Transport Strategy', desc: 'Our training supports the Department for Transport\'s goal of equal access for disabled people by 2030, as set out in the Inclusive Transport Strategy.' },
              { title: 'CPT Best Practice', desc: 'We incorporate the Confederation of Passenger Transport\'s compliance guidance and best practice standards throughout our course content.' },
              { title: 'CPD Accredited', desc: 'Our courses are recognised for Continuing Professional Development, providing operators with documented evidence of training for compliance and contract purposes.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-lg)', padding: '1.75rem' }}>
                <div style={{ width: 8, height: 8, background: 'var(--blue-light)', borderRadius: '50%', marginBottom: '1rem' }} />
                <h3 style={{ color: 'white', fontSize: '1rem', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Work With the UK's Transport Training Specialists</h2>
          <p style={{ maxWidth: 600, margin: '0 auto 2rem' }}>
            Whether you need a single course or a comprehensive corporate training programme, we are here to help. Contact our team to discuss your requirements.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-accent btn-lg">Get in Touch</Link>
            <Link to="/courses" className="btn btn-secondary btn-lg">View Our Courses</Link>
          </div>
        </div>
      </section>
    </>
  )
}
