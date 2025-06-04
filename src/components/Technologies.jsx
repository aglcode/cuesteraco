import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { 
  HTML5,
  JavaScript,
  React,
  CSS3,
  TailwindCSS,
  Bootstrap5,
  Laravel,
  PHP,
  MongoDB,
  MySQL,
  Firebase,
  Figma,
  Canva,
  Photoshop
} from 'developer-icons'

const Technologies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Embla Carousel setup (matches the Skills component)
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    AutoScroll({ playOnInit: true, speed: 2 }),
  ])

  const technologyIcons = [
    { name: 'HTML', icon: <HTML5 size={40} /> },
    { name: 'JavaScript', icon: <JavaScript size={40} /> },
    { name: 'React', icon: <React size={40} /> },
    { name: 'CSS', icon: <CSS3 size={40} /> },
    { name: 'TailwindCSS', icon: <TailwindCSS size={40} /> },
    { name: 'Bootstrap 5', icon: <Bootstrap5 size={40} /> },
    { name: 'Laravel', icon: <Laravel size={40} /> },
    { name: 'PHP', icon: <PHP size={40} /> },
    { name: 'MongoDB', icon: <MongoDB size={40} /> },
    { name: 'MySQL', icon: <MySQL size={40} /> },
    { name: 'Firebase', icon: <Firebase size={40} /> },
    { name: 'Figma', icon: <Figma size={40} /> },
    { name: 'Canva', icon: <Canva size={40} /> },
    { name: 'Photoshop', icon: <Photoshop size={40} /> }
  ]

  return (
    <section id="technologies" ref={ref} className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="relative overflow-hidden py-4 md:py-8">
            <div className="embla-overflow-fix"ref={emblaRef}>
              <div className="flex tech-icons-row">
                {technologyIcons.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="tech-icon-item"
                  >
                    <motion.div 
                      className="tech-icon-motion"
                      whileHover={{ 
                        scale: 1.1,
                        y: -2
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400,
                        damping: 15
                      }}
                    >
                      <div className="tech-icon-inner">
                        {tech.icon}
                      </div>
                    </motion.div>
                    <span className="tech-icon-label">
                      {tech.name}
                    </span>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {technologyIcons.map((tech, index) => (
                  <div
                    key={`duplicate-${tech.name}`}
                    className="tech-icon-item"
                  >
                    <motion.div 
                      className="tech-icon-motion"
                      whileHover={{ 
                        scale: 1.1,
                        y: -2
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400,
                        damping: 15
                      }}
                    >
                      <div className="tech-icon-inner">
                        {tech.icon}
                      </div>
                    </motion.div>
                    <span className="tech-icon-label">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient masks - responsive width */}
            <div 
              className="pointer-events-none absolute inset-y-0 left-0 z-10 tech-gradient-left"
            />
            <div 
              className="pointer-events-none absolute inset-y-0 right-0 z-10 tech-gradient-right"
            />
          </div>
        </motion.div>
      </div>
      <style>{`
      .tech-icons-row {
  display: flex;
  flex-direction: row;
  max-width: 100%;
  flex-wrap: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.tech-icons-row::-webkit-scrollbar {
  display: none;
}
.tech-icon-item {
  min-width: 120px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}
.tech-icon-motion {
  margin-bottom: 12px;
}
.tech-icon-inner {
  transform: scale(1);
  transform-origin: center;
}
.tech-icon-label {
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: var(--text-secondary);
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 110px;
}
.tech-gradient-left {
  width: 16px;
  background: linear-gradient(to right, var(--bg-secondary) 0%, transparent 100%);
}
.tech-gradient-right {
  width: 16px;
  background: linear-gradient(to left, var(--bg-secondary) 0%, transparent 100%);
}
@media (max-width: 767px) {
  .embla-overflow-fix {
    overflow-x: hidden !important;
    overflow-y: visible !important;
  }
  .tech-icons-row {
    max-width: 100%;
    min-width: 0; /* Prevent forced width expansion */
    padding-left: 0; /* Remove any unintended padding */
  }
  .tech-icon-item {
    min-width: 80px;
    padding: 0 8px;
  }
  .tech-icon-motion {
    margin-bottom: 8px;
  }
  .tech-icon-inner {
    transform: scale(0.8);
  }
  .tech-icon-label {
    font-size: 12px;
    max-width: 70px;
  }
  .tech-gradient-left,
  .tech-gradient-right {
    width: 12px;
  }
}
      `}</style>
    </section>
  )
}

export default Technologies