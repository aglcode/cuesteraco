import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FiHexagon,
  FiCode,
  FiDatabase,
  FiTool  
} from 'react-icons/fi'

const Technologies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
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

    const gradientVariants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
      transition: {
        duration: 2,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse'
      }
    },
  }

  const technologies = [
    {
      icon: <FiCode />,
      title: 'Frontend',
      items: ['React', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'Bootstap 5']
    },
    {
      icon: <FiDatabase />,
      title: 'Backend',
      items: ['Laravel', 'PHP']
    },
    {
      icon: <FiHexagon />,
      title: 'Databases',
      items: ['MongoDB', 'MySQL', 'Firebase']
    },
    {
      icon: <FiTool />,
      title: 'Design Tools',
      items: ['Figma', 'Canva', 'Photoshop', 'Wix Studio']
    }
  ]

  return (
    <section id="technologies" className="section" style={{ background: 'var(--bg-secondary)' }}>
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
            OUR TECH STACK
          </span>
          <h2>Technologies We Use</h2>
          <p 
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--text-secondary)'
            }}
          >
            We stay at the forefront of technology, using the most effective tools to deliver exceptional digital solutions.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                position: 'relative',
                padding: '0.25rem',
                borderRadius: '1rem',
                background: 'linear-gradient(45deg, var(--accent-yellow), var(--accent-blue), var(--accent-orange))',
                backgroundSize: '300% 300%',
                animation: 'gradient 15s ease infinite',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                transform: 'translateY(-5px)',
                backgroundSize: '150% 150%'
              }}
            >
              <div
                style={{
                  background: 'var(--bg-primary)',
                  borderRadius: '0.875rem',
                  padding: '1.5rem',
                  height: '100%'
                }}
              >
                <div 
                  style={{
                    fontSize: '1.75rem',
                    color: 'var(--accent-color)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}
                >
                  {tech.icon}
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>
                    {tech.title}
                  </h3>
                </div>
                
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}
                >
                  {tech.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '999px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        fontSize: '0.875rem',
                        fontWeight: 500
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies