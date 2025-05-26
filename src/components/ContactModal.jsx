import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'
import { useEffect } from 'react'

const ContactModal = ({ closeModal }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    
    window.addEventListener('keydown', handleEsc)
    
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [closeModal])

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      }
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  }

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'info@cuesteraco.com',
      link: 'mailto:info@cuesteraco.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FiMapPin />,
      title: 'Address',
      value: '123 Tech Avenue, San Francisco, CA 94107',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <FiLinkedin />,
      title: 'LinkedIn',
      link: '#'
    },
    {
      icon: <FiTwitter />,
      title: 'Twitter',
      link: '#'
    },
    {
      icon: <FiInstagram />,
      title: 'Instagram',
      link: '#'
    }
  ]

  return (
    <AnimatePresence>
      <motion.div
        className="overlay"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={closeModal}
      >
        <motion.div
          className="modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: '500px',
            width: '90%',
            borderRadius: '0.75rem',
            padding: '2.5rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            position: 'relative'
          }}
        >
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              transition: 'all 0.3s ease'
            }}
            className="close-button"
            aria-label="Close modal"
          >
            <FiX />
          </button>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '0.75rem' }}>Get In Touch</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              We'd love to hear from you. Reach out to us through any of these channels.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  background: 'var(--bg-secondary)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                className="contact-item"
              >
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    background: 'var(--accent-color)',
                    color: 'white',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{item.title}</h3>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Follow Us</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  aria-label={item.title}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    background: 'var(--accent-color)',
                    color: 'white',
                    fontSize: '1.25rem',
                    transition: 'all 0.3s ease'
                  }}
                  className="social-link"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .contact-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        }
        
        .social-link:hover {
          transform: scale(1.1);
        }
        
        .close-button:hover {
          background: var(--bg-secondary);
        }
      `}</style>
    </AnimatePresence>
  )
}

export default ContactModal