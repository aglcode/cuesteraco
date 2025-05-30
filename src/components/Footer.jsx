import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiMapPin, FiMail, FiPhone, FiInstagram, FiGithub, FiFacebook } from 'react-icons/fi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faWhatsapp, faDiscord } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ openContactModal }) => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'projects' },
    { name: 'Technologies', to: 'technologies' },
    { name: 'Team', to: 'team' }
  ]

  const services = [
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Database Solutions',
    'Security Services'
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--primary-color)', color: 'var(--text-light)' }}>
      <div className="container">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            padding: '5rem 0 3rem'
          }}
        >
          <motion.div variants={itemVariants}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>CUESTERA CO.</h3>
            <p style={{ marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.7)' }}>
              Let Cuestera Co. be your trusted guide in the ever-changing world of tech. Together, we’ll shape the future of your business.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="https://www.instagram.com/cuesteracoteam/" 
                target='blank'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  transition: 'all 0.3s ease'
                }}
                className="social-link"
              >
                <FiInstagram />
              </a>

              <a 
                href="https://www.facebook.com/profile.php?id=61576337483139" 
                target='blank'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  transition: 'all 0.3s ease'
                }}
                className="social-link"
              >
                <FiFacebook />
              </a>

              <a 
                href="https://wa.me/qr/XF7XMVDCJZVBD1" 
                target='blank'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  transition: 'all 0.3s ease'
                }}
                className="social-link"
              >
                <FontAwesomeIcon icon={faWhatsapp}/>
              </a>

              <a 
                href="https://t.me/cuesteracoteam" 
                target='blank'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  transition: 'all 0.3s ease'
                }}
                className="social-link"
              >
                <FontAwesomeIcon icon={faTelegram}/>
              </a>

              <a 
                href="https://discord.com/channels/@me" 
                target='blank'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  transition: 'all 0.3s ease'
                }}
                className="social-link"
              >
                <FontAwesomeIcon icon={faDiscord}/>
              </a>

            </div>
          </motion.div>

           <motion.div variants={itemVariants}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '1rem' }}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    style={{ 
                      cursor: 'pointer',
                      color: 'rgba(255, 255, 255, 0.7)',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    className="footer-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {/* Add Privacy Policy and Terms links */}
              <li style={{ marginBottom: '1rem' }}>
                <a
                  href="/privacy-policy"
                  style={{
                    cursor: 'pointer',
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  style={{
                    cursor: 'pointer',
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Services</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map((service, index) => (
                <li key={index} style={{ marginBottom: '1rem' }}>
                  <a 
                    href="#services" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    className="footer-link"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Contact Us</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.25rem', marginTop: '0.125rem' }}><FiMapPin /></span>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  123 Tech Avenue, San Francisco, CA 94107
                </span>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.25rem' }}><FiMail /></span>
                <a 
                  href="mailto:info@cuesteraco.com" 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease'
                  }}
                  className="footer-link"
                >
                  info@cuesteraco.com
                </a>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.25rem' }}><FiPhone /></span>
                <a 
                  href="tel:+15551234567" 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease'
                  }}
                  className="footer-link"
                >
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
            <button
              onClick={openContactModal}
              className="button button-primary"
              style={{ marginTop: '1rem' }}
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem 0',
            textAlign: 'center'
          }}
        >
          <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.7)' }}>
            © {currentYear} CUESTERACO. All Rights Reserved.
          </p>
        </div>
      </div>

      <style>{`
        .social-link:hover {
          background: var(--accent-color);
          transform: translateY(-5px);
        }
        
        .footer-link:hover {
          color: var(--accent-color);
          transform: translateX(5px);
        }
      `}</style>
    </footer>
  )
}

export default Footer