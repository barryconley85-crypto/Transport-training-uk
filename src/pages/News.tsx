
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const articles = [
  {
    date: '24 May 2024',
    tag: 'Legislation',
    title: 'PSVAIR 2023: What Operators Need to Know Before the 2026 Deadline',
    excerpt: 'The Public Service Vehicles (Accessible Information) Regulations 2023 require operators to provide audible and visible next-stop announcements on local bus and coach services. With the compliance deadline approaching, here is what you need to do.',
    readTime: '5 min read',
  },
  {
    date: '12 March 2024',
    tag: 'Compliance',
    title: 'DVSA Accessibility Inspections: The Most Common Failures and How to Avoid Them',
    excerpt: 'DVSA accessibility inspections are becoming more frequent. Our analysis of recent inspection outcomes reveals the most common compliance failures — and the practical steps operators can take to address them before an inspector arrives.',
    readTime: '7 min read',
  },
  {
    date: '8 January 2024',
    tag: 'Case Law',
    title: 'Paulley v FirstGroup: Seven Years On — What Operators Still Get Wrong',
    excerpt: 'The Supreme Court\'s landmark 2017 ruling in Paulley v FirstGroup clarified driver duties when wheelchair users need the priority space. Seven years later, many operators are still not fully compliant. We explain what the ruling requires and how to ensure your drivers are meeting their obligations.',
    readTime: '6 min read',
  },
  {
    date: '15 November 2023',
    tag: 'Best Practice',
    title: 'Wheelchair Restraint Systems: A Practical Guide for Operators',
    excerpt: 'Correct use of Wheelchair Tie-down and Occupant Restraint Systems (WTORS) is a legal requirement and a critical safety measure. This guide explains the different types of restraint system, how they should be used, and the common errors that put passengers at risk.',
    readTime: '8 min read',
  },
  {
    date: '3 October 2023',
    tag: 'Safeguarding',
    title: 'Safeguarding in School Transport: Are You Meeting Your Obligations?',
    excerpt: 'Operators carrying children to school face specific safeguarding obligations that go beyond general transport law. With local authority contracts increasingly requiring documented safeguarding training, we explain what operators need to have in place.',
    readTime: '5 min read',
  },
  {
    date: '19 July 2023',
    tag: 'Equality Act',
    title: 'The Equality Act 2010 and Passenger Transport: A Plain English Guide',
    excerpt: 'The Equality Act 2010 places significant obligations on transport operators, but its requirements are often misunderstood. This guide explains the key provisions that affect bus and coach operators, including the reasonable adjustments duty and Section 165 wheelchair duties.',
    readTime: '9 min read',
  },
]

const resources = [
  { title: 'PSVAR 2000 — Full Text', desc: 'The Public Service Vehicles Accessibility Regulations 2000 as enacted.', href: 'https://www.legislation.gov.uk/uksi/2000/1970/contents/made', type: 'Legislation' },
  { title: 'Equality Act 2010 — Section 165', desc: 'Duties on drivers of designated wheelchair-accessible vehicles.', href: 'https://www.legislation.gov.uk/ukpga/2010/15/section/165', type: 'Legislation' },
  { title: 'DfT: Buses and Coaches — Features for Disabled People', desc: 'Government guidance on bus and coach accessibility requirements.', href: 'https://www.gov.uk/government/publications/buses-and-coaches-features-and-help-for-disabled-people', type: 'Guidance' },
  { title: 'DfT Inclusive Transport Strategy', desc: 'The Government\'s strategy for equal access for disabled people by 2030.', href: 'https://www.gov.uk/government/publications/inclusive-transport-strategy', type: 'Strategy' },
  { title: 'DVSA: PSV Operator Licensing Guide', desc: 'Comprehensive guidance on PSV operator licensing requirements.', href: 'https://www.gov.uk/guidance/public-service-vehicle-operator-licensing-guide', type: 'Guidance' },
  { title: 'Transport for All: Barriers to Buses Report', desc: 'Research on disabled passengers\' experiences of bus travel.', href: 'https://www.transportforall.org.uk/the-issues/public-transport/buses-and-coaches/', type: 'Research' },
]

const tagColors: Record<string, string> = {
  Legislation: '#1565c0',
  Compliance: '#0a7c59',
  'Case Law': '#7b3fa0',
  'Best Practice': '#2c3e50',
  Safeguarding: '#c0392b',
  'Equality Act': '#e67e22',
}

export default function News() {
  return (
    <>
      <SEOHead
        title="News & Resources"
        description="Latest news, guidance and resources on UK passenger transport accessibility, PSVAR compliance, DVSA inspections, the Equality Act 2010 and wheelchair passenger safety."
        canonical="/news"
      />

      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>News & Resources</span>
          </div>
          <h1 className="animate-fade-in-up">News & Resources</h1>
          <p className="animate-fade-in-up delay-1">
            Stay up to date with the latest developments in UK passenger transport accessibility, compliance and safety. Expert guidance from the Transport Training UK team.
          </p>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '3rem', alignItems: 'start' }}>
            {/* Articles */}
            <div>
              <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Latest Articles</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {articles.map((article, i) => (
                  <div key={i} className="card" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ background: tagColors[article.tag] || 'var(--blue)', color: 'white', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 100, fontFamily: 'Montserrat, sans-serif' }}>{article.tag}</span>
                      <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>{article.date}</span>
                      <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>· {article.readTime}</span>
                    </div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', lineHeight: 1.4 }}>{article.title}</h3>
                    <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem', lineHeight: 1.7 }}>{article.excerpt}</p>
                    <div style={{ marginTop: '1.25rem', color: 'var(--blue)', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer' }}>
                      Read More →
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: '90px' }}>
              {/* Key resources */}
              <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-md)', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem' }}>Key Resources</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {resources.map((r, i) => (
                    <a key={i} href={r.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '0.75rem', background: 'var(--off-white)', borderRadius: 8, textDecoration: 'none', transition: 'background 0.2s' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--blue-pale)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--off-white)'}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: 'var(--navy)', fontSize: '0.8rem', lineHeight: 1.4 }}>{r.title}</div>
                        <span style={{ background: 'var(--blue-pale)', color: 'var(--blue)', fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: 4, whiteSpace: 'nowrap', flexShrink: 0 }}>{r.type}</span>
                      </div>
                      <div style={{ color: 'var(--text-light)', fontSize: '0.75rem', marginTop: '0.25rem', lineHeight: 1.5 }}>{r.desc}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '1.75rem', color: 'white' }}>
                <h3 style={{ color: 'white', fontSize: '1rem', marginBottom: '0.75rem' }}>Stay Informed</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Get the latest compliance updates, legislation changes and training news delivered to your inbox.
                </p>
                <Link to="/contact" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}>
                  Subscribe to Updates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Need Compliance Guidance for Your Operation?</h2>
          <p style={{ maxWidth: 600, margin: '0 auto 2rem' }}>Our training specialists are available to discuss your specific compliance requirements and recommend the right training programme.</p>
          <Link to="/contact" className="btn btn-accent btn-lg">Speak to Our Team</Link>
        </div>
      </section>
    </>
  )
}
