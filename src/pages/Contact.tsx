import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', course: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Contact Transport Training UK to enquire about training courses, request a quote or discuss your compliance requirements. Nationwide delivery across England, Scotland and Wales."
        canonical="/contact"
      />

      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Contact Us</span>
          </div>
          <h1 className="animate-fade-in-up">Get in Touch</h1>
          <p className="animate-fade-in-up delay-1">
            Whether you need a single course or a comprehensive corporate training programme, our team is here to help. We respond to all enquiries within one working day.
          </p>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            {/* Contact info */}
            <div>
              <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>How We Can Help</h2>
              <div className="divider divider-left" />
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, margin: '1.5rem 0' }}>
                Our training specialists have in-depth knowledge of UK passenger transport law, DVSA requirements and CPT best practice. Whether you are an operator looking to improve compliance, a transport manager seeking to upskill your drivers, or a local authority commissioning accessible transport services, we can help.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: '📞', label: 'Phone', value: '0300 111 111', href: 'tel:03001234567', note: 'Monday–Friday, 8am–6pm' },
                  { icon: '✉️', label: 'Email', value: 'info@transporttraininguk.co.uk', href: 'mailto:info@transporttraininguk.co.uk', note: 'We respond within one working day' },
                  { icon: '📍', label: 'Coverage', value: 'Nationwide — England, Scotland & Wales', href: undefined, note: 'On-site delivery at your depot' },
                ].map(({ icon, label, value, href, note }) => (
                  <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 44, height: 44, background: 'var(--blue-pale)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: 'var(--navy)', fontSize: '0.875rem', marginBottom: '0.2rem' }}>{label}</div>
                      {href ? (
                        <a href={href} style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.95rem' }}>{value}</a>
                      ) : (
                        <div style={{ color: 'var(--text-mid)', fontSize: '0.95rem' }}>{value}</div>
                      )}
                      <div style={{ color: 'var(--text-light)', fontSize: '0.8rem', marginTop: '0.2rem' }}>{note}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to expect */}
              <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '2rem', color: 'white' }}>
                <h3 style={{ color: 'white', fontSize: '1rem', marginBottom: '1rem' }}>What Happens Next?</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'We will review your enquiry and respond within one working day',
                    'A training specialist will discuss your specific requirements',
                    'We will provide a tailored proposal and quote',
                    'Training is scheduled at a time and location that suits your operation',
                    'You receive full training records and certificates for all participants',
                  ].map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ width: 22, height: 22, background: 'var(--blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800, color: 'white', flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', lineHeight: 1.5 }}>{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '2.5rem', boxShadow: 'var(--shadow-lg)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ marginBottom: '0.75rem' }}>Enquiry Received</h3>
                  <p style={{ color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    Thank you for getting in touch. A member of our training team will respond to your enquiry within one working day.
                  </p>
                  <Link to="/courses" className="btn btn-primary">Browse Our Courses</Link>
                </div>
              ) : (
                <>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Training Enquiry</h2>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.875rem', marginBottom: '2rem' }}>Complete the form below and we will be in touch within one working day.</p>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: 'var(--navy)', marginBottom: '0.4rem' }}>Full Name *</label>
                        <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--grey-mid)', borderRadius: 8, fontSize: '0.9rem', fontFamily: 'Open Sans, sans-serif', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                          onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--blue)'}
                          onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'var(--grey-mid)'} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: 'var(--navy)', marginBottom: '0.4rem' }}>Company Name *</label>
                        <input name="company" required value={form.company} onChange={handleChange} placeholder="Your company" style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--grey-mid)', borderRadius: 8, fontSize: '0.9rem', fontFamily: 'Open Sans, sans-serif', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                          onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--blue)'}
                          onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'var(--grey-mid)'} />
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: 'var(--navy)', marginBottom: '0.4rem' }}>Email Address *</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--grey-mid)', borderRadius: 8, fontSize: '0.9rem', fontFamily: 'Open Sans, sans-serif', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                          onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--blue)'}
                          onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'var(--grey-mid)'} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: 'var(--navy)', marginBottom: '0.4rem' }}>Phone Number</label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="01234 567890" style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--grey-mid)', borderRadius: 8, fontSize: '0.9rem', fontFamily: 'Open Sans, sans-serif', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                          onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--blue)'}
                          onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'var(--grey-mid)'} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: 'var(--navy)', marginBottom: '0.4rem' }}>Course of Interest</label>
                      <select name="course" value={form.course} onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--grey-mid)', borderRadius: 8, fontSize: '0.9rem', fontFamily: 'Open Sans, sans-serif', outline: 'none', background: 'white', boxSizing: 'border-box' }}>
                        <option value="">Select a course (optional)</option>
                        <option>PSVAR Training</option>
                        <option>Accessibility Inspection & Compliance</option>
                        <option>Wheelchair Passenger Safety</option>
                        <option>Disability Awareness</option>
                        <option>Safeguarding in Passenger Transport</option>
                        <option>Equality Act & Accessible Transport</option>
                        <option>Corporate Training Package</option>
                        <option>Multiple / Not Sure Yet</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: 'var(--navy)', marginBottom: '0.4rem' }}>Your Message *</label>
                      <textarea name="message" required value={form.message} onChange={handleChange} rows={5} placeholder="Please describe your training requirements, number of drivers, location and any other relevant information..." style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--grey-mid)', borderRadius: 8, fontSize: '0.9rem', fontFamily: 'Open Sans, sans-serif', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                        onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--blue)'}
                        onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--grey-mid)'} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }}>
                      Send Enquiry
                    </button>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.75rem', textAlign: 'center', lineHeight: 1.5 }}>
                      By submitting this form you agree to our Privacy Policy. We will never share your details with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
