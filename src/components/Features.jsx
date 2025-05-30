import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCheck } from 'react-icons/fi'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const features = [
    'Custom Software & Application Development',
    'Managed IT Services & Support',
    'Web & Mobile Solutions',
    'Technology Strategy & Consulting',
    'Ongoing support and maintenance'
  ]

  return (
    <section id="features" className="section" style={{ background: 'var(--bg-secondary)' }}>
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
              Why Cuestera Co.?
            </motion.span>
            
            <motion.h2 variants={itemVariants}>
              Features That Set <br />
              Us Apart
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1.125rem',
                marginBottom: '2rem',
                color: 'var(--text-secondary)'
              }}
            >
              Because we don’t just deliver services—we build partnerships. With a customer first mindset and a passion for innovation, we’re committed to understanding your unique challenges and crafting solutions that fit like a glove.
            </motion.p>
            
            <motion.ul
              variants={containerVariants}
              style={{
                listStyle: 'none',
                display: 'grid',
                gap: '1rem'
              }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}
                >
                  <span 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '1.5rem',
                      height: '1.5rem',
                      borderRadius: '50%',
                      background: 'var(--accent-color)',
                      color: 'white',
                      flexShrink: 0
                    }}
                  >
                    <FiCheck />
                  </span>
                  <span style={{ fontSize: '1.125rem' }}>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.button
              variants={itemVariants}
              className="button button-primary"
              style={{ marginTop: '2rem' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
          
          <motion.div 
            variants={itemVariants}
            style={{
              position: 'relative',
              height: '100%',
              minHeight: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                width: '80%',
                height: '80%',
                borderRadius: '1rem',
                background: 'var(--bg-primary)',
                transform: 'rotate(-3deg)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                zIndex: 1
              }}
            />
            <div 
              style={{
                position: 'relative',
                width: '80%',
                height: '80%',
                borderRadius: '1rem',
                overflow: 'hidden',
                zIndex: 2
              }}
            >
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Team collaboration" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features