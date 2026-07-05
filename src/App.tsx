import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Courses = lazy(() => import('./pages/Courses'))
const PSVARPage = lazy(() => import('./pages/courses/PSVARPage'))
const AccessibilityInspectionPage = lazy(() => import('./pages/courses/AccessibilityInspectionPage'))
const WheelchairSafetyPage = lazy(() => import('./pages/courses/WheelchairSafetyPage'))
const DisabilityAwarenessPage = lazy(() => import('./pages/courses/DisabilityAwarenessPage'))
const SafeguardingPage = lazy(() => import('./pages/courses/SafeguardingPage'))
const EqualityActPage = lazy(() => import('./pages/courses/EqualityActPage'))
const CorporateTrainingPage = lazy(() => import('./pages/courses/CorporateTrainingPage'))
const News = lazy(() => import('./pages/News'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 40, height: 40, border: '3px solid #e2e8f0', borderTopColor: '#1565C0', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/psvar-training" element={<PSVARPage />} />
            <Route path="/courses/accessibility-inspection" element={<AccessibilityInspectionPage />} />
            <Route path="/courses/wheelchair-passenger-safety" element={<WheelchairSafetyPage />} />
            <Route path="/courses/disability-awareness" element={<DisabilityAwarenessPage />} />
            <Route path="/courses/safeguarding" element={<SafeguardingPage />} />
            <Route path="/courses/equality-act" element={<EqualityActPage />} />
            <Route path="/courses/corporate-training" element={<CorporateTrainingPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </HelmetProvider>
  )
}
