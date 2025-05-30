import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

import logo from '../assets/img/logo.png';

const Header = ({ openContactModal }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    // Prevent background scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  const menuItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'projects' },
    { name: 'Technologies', to: 'technologies' },
    { name: 'Team', to: 'team' }
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease',
        padding: '1rem 0',
        zIndex: 1000
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontWeight: 800, fontSize: '1.75rem' }}
        >
          <img
            src={logo}
            alt="Cuesteraco Logo"
            style={{ height: '40px', width: 'auto', display: 'block' }}
          />
        </motion.div>

        <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            style={{ display: 'none', gap: '2rem' }}
            className="desktop-nav"
          >
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                style={{ 
                  fontWeight: 500, 
                  cursor: 'pointer',
                  position: 'relative',
                  paddingBottom: '0.25rem'
                }}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={openContactModal}
            className="button button-primary"
            style={{ display: 'none' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>

          <motion.button
            className="mobile-menu-button"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ 
              display: 'block', 
              fontSize: '1.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              zIndex: 1001
            }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>

        <motion.div
          className="mobile-menu"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
          style={{
            position: 'fixed',
            top: 0,
            left: 0, // <-- add this
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh', // <-- add this
            background: 'var(--accent-peach, #ffe5b4)',
            boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.1)',
            padding: '5rem 2rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
            alignItems: 'center',
            justifyContent: 'flex-start',
            overflowY: 'auto', // <-- add this
          }}
        >
          <div style={{ width: '100%', marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            <img
              src={logo}
              alt="Cuesteraco Logo"
              style={{ height: '40px', width: 'auto' }}
            />
            {/* <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>CUESTERACO</span> */}
          </div>
          <nav style={{ width: '100%' }}>
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
                style={{
                  display: 'block',
                  width: '100%',
                  fontWeight: 500,
                  padding: '1rem 0',
                  fontSize: '1.2rem',
                  textAlign: 'center',
                  color: 'var(--text-primary)',
                  borderBottom: '1px solid var(--bg-secondary)',
                  transition: 'background 0.2s',
                  cursor: 'pointer'
                }}
                className="mobile-nav-link"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => {
              closeMenu();
              openContactModal();
            }}
            className="button button-primary"
            style={{
              marginTop: '2rem',
              width: '100%',
              fontSize: '1.1rem',
              padding: '1rem 0'
            }}
          >
            Contact Us
          </button>
        </motion.div>
        </div>

          <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .button-primary {
            display: block !important;
          }
          .mobile-menu-button {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
        .mobile-menu {
          display: flex;
        }
        .mobile-nav-link:hover {
          background: var(--bg-secondary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--accent-color);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

    </header>
  )
}

export default Header