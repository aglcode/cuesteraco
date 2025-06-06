import { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Features from './components/Features'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Team from './components/Team'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import PrivacyPolicy from './components/Policy'
import TermsAndConditions from './components/TermsAndConditions'
import { Skeleton } from '@heroui/skeleton'
import './App.css'

function AppContent({ openContactModal, closeContactModal, isContactModalOpen }) {
  const location = useLocation()
  const isPolicyOrTerms = location.pathname === '/privacy-policy' || location.pathname === '/terms-and-conditions'

  return (
    <>
      {!isPolicyOrTerms && <Header openContactModal={openContactModal} />}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero openContactModal={openContactModal} />
                <About />
                <Services />
                <Features />
                <Projects />
                <Technologies />
                <Team />
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route
            path="*"
            element={
              <div
                style={{
                  padding: '4rem 2rem',
                  textAlign: 'center',
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                <h2>Page Not Found</h2>
                <p>The page you're looking for doesn't exist.</p>
                <a href="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
                  Go back to home
                </a>
              </div>
            }
          />
        </Routes>
      </main>
      {!isPolicyOrTerms && <Footer openContactModal={openContactModal} />}
      {isContactModalOpen && <ContactModal closeModal={closeContactModal} />}
    </>
  )
}

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const openContactModal = () => {
    setIsContactModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  if (isLoading) {
    return (
      <div className="container" style={{ padding: '2rem' }}>
        <Skeleton height={60} width={150} style={{ marginBottom: '2rem' }} />
        {/* Hero Section Skeleton */}
        <div style={{ marginBottom: '4rem' }}>
          <Skeleton height={40} width={200} style={{ marginBottom: '1rem' }} />
          <Skeleton height={60} width="80%" style={{ marginBottom: '1rem' }} />
          <Skeleton height={20} width="60%" style={{ marginBottom: '2rem' }} />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Skeleton height={40} width={120} />
            <Skeleton height={40} width={120} />
          </div>
        </div>
        {/* About Section Skeleton */}
        <div style={{ marginBottom: '4rem' }}>
          <Skeleton height={300} width="100%" style={{ marginBottom: '2rem' }} />
          <Skeleton height={30} width={150} style={{ marginBottom: '1rem' }} />
          <Skeleton height={20} width="100%" style={{ marginBottom: '0.5rem' }} />
          <Skeleton height={20} width="90%" style={{ marginBottom: '0.5rem' }} />
          <Skeleton height={20} width="95%" />
        </div>
        {/* Services Section Skeleton */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item}>
              <Skeleton height={200} width="100%" style={{ marginBottom: '1rem' }} />
              <Skeleton height={24} width="80%" style={{ marginBottom: '0.5rem' }} />
              <Skeleton height={16} width="90%" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Router>
      <AppContent
        openContactModal={openContactModal}
        closeContactModal={closeContactModal}
        isContactModalOpen={isContactModalOpen}
      />
    </Router>
  )
}

export default App