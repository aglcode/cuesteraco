import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
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

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          <div>
            <motion.div 
              variants={itemVariants}
              style={{ 
                width: '100%', 
                height: '400px', 
                borderRadius: '1rem',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#e2e8f0'
              }}
            >
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Team working together" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </motion.div>
          </div>
          
          <div>
            <motion.span
              variants={itemVariants}
              style={{
                display: 'block',
                fontSize: '1.125rem',
                fontWeight: 500,
                color: 'var(--accent-color)',
                marginBottom: '0.5rem'
              }}
            >
              ABOUT US
            </motion.span>
            
            <motion.h2 variants={itemVariants}>
              Cuestera Co. <br /> 
               Your All-in-One Tech Partner
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1.125rem',
                marginBottom: '1.5rem',
                color: 'var(--text-secondary)'
              }}
            >
              Established in May 2025, Cuestera Co. is a technology solutions provider dedicated to helping businesses succeed in a digital first world. We offer a full range of services from software development and cloud solutions to IT support and technology consulting under one trusted name.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1.125rem',
                marginBottom: '2rem',
                color: 'var(--text-secondary)'
              }}
            >
              Our mission is simple: to make technology seamless, efficient, and aligned with your business goals. Whether you're launching a startup or scaling an enterprise, Cuestera Co. delivers smart, tailored solutions that drive results.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem'
              }}
            >
              <div>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.25rem' }}>3</h3>
                <p style={{ fontWeight: 500 }}>Projects Completed</p>
              </div>
              
              <div>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.25rem' }}>2+</h3>
                <p style={{ fontWeight: 500 }}>Years Experience</p>
              </div>
              
              <div>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.25rem' }}>5</h3>
                <p style={{ fontWeight: 500 }}>Team Members</p>
              </div>
              
              <div>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.25rem' }}>98%</h3>
                <p style={{ fontWeight: 500 }}>Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About