import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'A fully responsive e-commerce platform with advanced product filtering, cart functionality, and secure payment integration.'
    },
    {
      title: 'Healthcare Management System',
      category: 'Custom Software',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'An integrated healthcare management solution for streamlining patient records, appointments, and clinical workflows.'
    },
    {
      title: 'Financial Dashboard',
      category: 'UI/UX Design',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'A comprehensive financial dashboard providing real-time analytics, reporting, and visualization tools for business intelligence.'
    },
    {
      title: 'Smart Home Mobile App',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'An intuitive mobile application for controlling smart home devices with voice commands and automated routines.'
    }
  ]

  return (
    <section id="projects" className="section">
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
            OUR PORTFOLIO
          </span>
          <h2>Recent Projects</h2>
          <p 
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--text-secondary)'
            }}
          >
            Explore our latest work showcasing our expertise in design and development across various industries.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                background: 'var(--bg-primary)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'all 0.5s ease'
                  }}
                  className="project-image"
                />
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span 
                  style={{
                    display: 'inline-block',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--accent-color)',
                    marginBottom: '0.5rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    background: 'rgba(59, 130, 246, 0.1)'
                  }}
                >
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                  {project.description}
                </p>
                <a 
                  href="#" 
                  style={{
                    fontWeight: 600,
                    color: 'var(--accent-color)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginTop: 'auto'
                  }}
                >
                  View Project 
                  <span style={{ fontSize: '1.25rem' }}>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3rem'
          }}
        >
          <motion.button
            className="button button-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
      
      <style>{`
        .project-image:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  )
}

export default Projects