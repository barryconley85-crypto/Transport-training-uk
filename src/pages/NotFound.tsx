
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found" description="The page you are looking for could not be found." canonical="/404" />
      <section style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', background: 'var(--off-white)' }}>
        <div className="container" style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '6rem', color: 'var(--blue)', lineHeight: 1, marginBottom: '1rem' }}>404</div>
          <h1 style={{ marginBottom: '1rem' }}>Page Not Found</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: 500, margin: '0 auto 2.5rem' }}>
            The page you are looking for does not exist or has been moved. Please use the navigation to find what you need.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary btn-lg">Go to Homepage</Link>
            <Link to="/courses" className="btn btn-outline btn-lg">View Our Courses</Link>
          </div>
        </div>
      </section>
    </>
  )
}
