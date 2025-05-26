import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FiHexagon,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiSmartphone,
  FiCloud,
  FiShield,
  FiTrendingUp
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

  const technologies = [
    {
      icon: <FiCode />,
      title: 'Frontend',
      items: ['React', 'Vue.js', 'Angular', 'Next.js', 'TailwindCSS']
    },
    {
      icon: <FiDatabase />,
      title: 'Backend',
      items: ['Node.js', 'Python', 'Java', 'PHP', 'Ruby on Rails']
    },
    {
      icon: <FiHexagon />,
      title: 'Databases',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis']
    },
    {
      icon: <FiGlobe />,
      title: 'CMS',
      items: ['WordPress', 'Shopify', 'Contentful', 'Strapi', 'Sanity.io']
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile',
      items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic']
    },
    {
      icon: <FiCloud />,
      title: 'Cloud',
      items: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Netlify']
    },
    {
      icon: <FiShield />,
      title: 'Security',
      items: ['OAuth', 'JWT', 'HTTPS', 'SSL', 'Two-Factor Auth']
    },
    {
      icon: <FiTrendingUp />,
      title: 'Analytics',
      items: ['Google Analytics', 'Mixpanel', 'Hotjar', 'Amplitude', 'Segment']
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
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              style={{
                background: 'var(--bg-primary)',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies