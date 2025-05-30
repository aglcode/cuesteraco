import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi'
import { useEffect } from 'react'
import { faWhatsapp, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      icon: <FiFacebook />,
      title: 'Twitter',
      link: 'https://www.facebook.com/profile.php?id=61576337483139'
    },
    {
      icon: <FiInstagram />,
      title: 'Instagram',
      link: 'https://www.instagram.com/cuesteracoteam/'
    },
    {
      icon: <FontAwesomeIcon icon={faWhatsapp} />,
      title: 'WhatsApp',
      link: 'https://wa.me/qr/XF7XMVDCJZVBD1'
    },
    {
      icon: <FontAwesomeIcon icon={faTelegram} />,
      title: 'WhatsApp',
      link: 'https://t.me/cuesteracoteam'
    },
    {
      icon: <FontAwesomeIcon icon={faDiscord} />,
      title: 'WhatsApp',
      link: 'https://discord.com/channels/@me'
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
            padding: '2rem 1.5rem', // Reduced padding for mobile
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            maxHeight: '90vh', // Prevent modal from being too tall
            overflowY: 'auto', // Enable scrolling if content is too long
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

         <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start', // Changed to flex-start for better text wrapping
                  gap: '0.75rem', // Reduced gap for mobile
                  padding: '0.75rem', // Reduced padding for mobile
                  borderRadius: '0.5rem',
                  background: 'var(--bg-secondary)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  color: 'inherit',
                  flexWrap: 'wrap', // Allow content to wrap on very small screens
                }}
                className="contact-item"
              >
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2rem', // Slightly smaller icons on mobile
                    height: '2rem',
                    borderRadius: '50%',
                    background: 'var(--accent-color)',
                    color: 'white',
                    fontSize: '1rem',
                    flexShrink: 0
                  }}
                >
                  {item.icon}
                </div>
                 <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>{item.title}</h3>
                  <p style={{ 
                    margin: 0, 
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    wordBreak: 'break-word' // Prevent text overflow
                  }}>{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Follow Us</h3>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '0.75rem',
              flexWrap: 'wrap' // Allow social icons to wrap on small screens
            }}>
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  aria-label={item.title}
                  target='blank'
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2.25rem', // Slightly smaller social icons
                    height: '2.25rem',
                    borderRadius: '50%',
                    background: 'var(--accent-color)',
                    color: 'white',
                    fontSize: '1.125rem',
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

       <style>{`
          .contact-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          }
          
          .social-link:hover {
            transform: scale(1.05);
          }
          
          .close-button:hover {
            background: var(--bg-secondary);
          }

          @media (max-width: 480px) {
            .modal {
              width: 95%;
              padding: 1.5rem 1rem;
            }

            .contact-item {
              padding: 0.75rem;
            }

            h2 {
              font-size: 1.25rem;
            }

            p {
              font-size: 0.9rem;
            }
          }
        `}</style>
    </AnimatePresence>
  )
}

export default ContactModal