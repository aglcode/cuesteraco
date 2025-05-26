import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  FiShoppingCart, 
  FiPackage, 
  FiCalendar, 
  FiFolder, 
  FiClock, 
  FiDollarSign, 
  FiShoppingBag, 
  FiBook, 
  FiMonitor, 
  FiMapPin, 
  FiMessageSquare, 
  FiGlobe, 
  FiHeart, 
  FiEdit3,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const containerVariants = {
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

  const services = [
    {
      icon: <FiShoppingCart />,
      title: 'Point of Sale (POS) System',
      description: 'Comprehensive POS solutions to streamline your retail operations with inventory tracking, sales reporting, and customer management.'
    },
    {
      icon: <FiPackage />,
      title: 'Inventory System',
      description: 'Advanced inventory management systems to track stock levels, manage suppliers, and optimize your supply chain operations.'
    },
    {
      icon: <FiCalendar />,
      title: 'Booking System',
      description: 'User-friendly booking and scheduling systems for appointments, services, and resource management across various industries.'
    },
    {
      icon: <FiFolder />,
      title: 'Document Management System',
      description: 'Secure digital document storage and management solutions with version control, access permissions, and search capabilities.'
    },
    {
      icon: <FiClock />,
      title: 'Attendance Tracking Software',
      description: 'Automated time and attendance tracking systems with biometric integration, reporting, and payroll compatibility.'
    },
    {
      icon: <FiDollarSign />,
      title: 'Simple Payroll System',
      description: 'Streamlined payroll processing systems that handle salary calculations, deductions, and generate comprehensive payroll reports.'
    },
    {
      icon: <FiShoppingBag />,
      title: 'E-commerce System',
      description: 'Complete e-commerce platforms with payment gateways, product catalogs, order management, and customer portals.'
    },
    {
      icon: <FiBook />,
      title: 'Capstone/Thesis Assistance',
      description: 'Technical guidance and development support for academic projects, research systems, and thesis implementations.'
    },
    {
      icon: <FiMonitor />,
      title: 'Website Design and Development',
      description: 'Modern, responsive websites built with HTML, CSS, and JavaScript, optimized for performance and user experience.'
    },
    {
      icon: <FiMapPin />,
      title: 'Online Reservation System',
      description: 'Digital reservation platforms for restaurants, hotels, events, and services with real-time availability and notifications.'
    },
    {
      icon: <FiMessageSquare />,
      title: 'Complaint/Feedback Management',
      description: 'Centralized systems to collect, track, and manage customer complaints and feedback with automated workflows.'
    },
    {
      icon: <FiGlobe />,
      title: 'Business Landing Pages',
      description: 'Professional, conversion-optimized landing pages designed to showcase your business and drive customer engagement.'
    },
    {
      icon: <FiHeart />,
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare solutions for patient records, appointment scheduling, and medical practice management.'
    },
    {
      icon: <FiEdit3 />,
      title: 'Graphic Design',
      description: 'Creative graphic design services including logos, branding materials, marketing collateral, and digital assets.'
    }
  ]

  // Get items per slide based on screen size
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3 // Desktop: 3 items
      if (window.innerWidth >= 768) return 2  // Tablet: 2 items
      return 1 // Mobile: 1 item
    }
    return 3
  }

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide())

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide())
      setCurrentSlide(0) // Reset to first slide on resize
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalSlides = Math.ceil(services.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentServices = () => {
    const startIndex = currentSlide * itemsPerSlide
    return services.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <span 
            style={{
              display: 'block',
              fontSize: '1.125rem',
              fontWeight: 500,
              color: 'var(--accent-color)',
              marginBottom: '0.5rem'
            }}
          >
            OUR SERVICES
          </span>
          <h2>What We Offer</h2>
          <p 
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--text-secondary)'
            }}
          >
            We provide comprehensive digital solutions tailored to your business needs, from custom software development to creative design services.
          </p>
        </motion.div>
        
        {/* Carousel Container */}
        <div style={{ position: 'relative', marginTop: '3rem' }}>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--accent-color)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2,
              fontSize: '18px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-50%) scale(1.1)'
              e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(-50%) scale(1)'
              e.target.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)'
            }}
          >
            <FiChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--accent-color)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2,
              fontSize: '18px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-50%) scale(1.1)'
              e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(-50%) scale(1)'
              e.target.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)'
            }}
          >
            <FiChevronRight />
          </button>

          {/* Carousel Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${itemsPerSlide}, 1fr)`,
              gap: '2rem',
              overflow: 'hidden'
            }}
          >
            {getCurrentServices().map((service, index) => (
              <motion.div
                key={`${currentSlide}-${index}`}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                style={{
                  background: 'var(--bg-secondary)',
                  borderRadius: '0.5rem',
                  padding: '2rem',
                  transition: 'all 0.3s ease',
                  minHeight: '280px'
                }}
              >
                <div 
                  style={{
                    fontSize: '2.5rem',
                    color: 'var(--accent-color)',
                    marginBottom: '1rem'
                  }}
                >
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots Indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
            gap: '0.5rem'
          }}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: currentSlide === index ? 'var(--accent-color)' : '#ccc',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services