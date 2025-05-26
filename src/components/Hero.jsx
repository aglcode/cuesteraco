import { motion } from 'framer-motion'

const Hero = ({ openContactModal }) => {
  return (
    <section 
      id="hero" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        className="shape-1" 
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'var(--accent-color)', 
          opacity: 0.1,
          zIndex: 0
        }}
      />
      <div 
        className="shape-2" 
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: 'var(--secondary-color)',
          opacity: 0.1,
          zIndex: 0
        }}
      />
      
      <div className="container">
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            maxWidth: '800px',
            position: 'relative',
            zIndex: 1
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '1.125rem',
              fontWeight: 500,
              color: 'var(--text-secondary)'
            }}
          >
            SYSTEM DEVELOPMENT & DESIGN
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              color: 'var(--text-secondary)'
            }}
          >
            <span style={{ fontSize: '2rem' }}> Transforming Ideas Into </span><br />
            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold'}}>Digital Excellence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: '1.125rem',
              maxWidth: '600px',
              marginBottom: '2rem',
              color: 'var(--text-secondary)'
            }}
          >
            We craft exceptional digital experiences through innovative design and robust development. Elevate your business with solutions that stand out.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            <motion.button
              className="button button-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openContactModal}
            >
              Get Started
            </motion.button>
            
            <motion.button
              className="button button-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero