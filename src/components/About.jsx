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
              Pioneers in Digital <br />
              Transformation
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1.125rem',
                marginBottom: '1.5rem',
                color: 'var(--text-secondary)'
              }}
            >
              CUESTERACO was founded with a vision to bridge the gap between cutting-edge technology and business needs. We believe in creating digital solutions that not only solve problems but also inspire innovation.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1.125rem',
                marginBottom: '2rem',
                color: 'var(--text-secondary)'
              }}
            >
              With a team of experienced developers and designers, we approach each project with creativity, technical expertise, and a commitment to excellence that sets us apart.
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
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.25rem' }}>150+</h3>
                <p style={{ fontWeight: 500 }}>Projects Completed</p>
              </div>
              
              <div>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.25rem' }}>10+</h3>
                <p style={{ fontWeight: 500 }}>Years Experience</p>
              </div>
              
              <div>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.25rem' }}>50+</h3>
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