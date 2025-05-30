import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import hms from '../assets/projects/web/hms cuba.jpg'
import dms from '../assets/projects/web/dms.png'
import azure from '../assets/projects/designs/azure.png'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState('All')
  
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
      title: 'Document Management System',
      category: 'Full-Stack Applications',
      image: dms,
      description: 'This document management system enables community members to conveniently request government services online, ensuring faster, more accessible, and organized public service delivery.',
      link: 'https://github.com/aglcode/DMS'
    },
    {
      title: 'Healthcare Management System',
      category: 'Full-Stack Applications',
      image: hms,
      description: 'This healthcare management system streamlines referral transfers, appointment booking, and patient record management to ensure efficient, coordinated, and patient-centered care.',
      link: 'https://github.com/aglcode/HMS'
    },
    {
      title: 'Azure Brochure',
      category: 'Graphic Designs',
      image: azure,
      description: 'Our brochure for Azure Resort offers a captivating glimpse into its luxurious amenities, serene beachfront views, and unforgettable guest experiences.',
      link: 'https://www.canva.com/design/DAGmeIBlua0/Gv46a9JllE-m-FtpNh3ZEg/edit'
    }
  ]

  const tabs = ['All', 'Full-Stack Applications', 'Graphic Designs']

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <span className="section-subtitle">OUR PORTFOLIO</span>
          <h2>Recent Projects</h2>
          <p className="section-description">
            Explore our latest work showcasing our expertise in design and development across various industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="projects-tabs"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="projects-grid"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="project-card"
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <style>{`
        .section-subtitle {
          display: block;
          fontSize: 1.125rem;
          fontWeight: 500;
          color: var(--accent-color);
          marginBottom: 0.5rem;
        }

        .section-description {
          maxWidth: 600px;
          margin: 0 auto;
          color: var(--text-secondary);
        }

        .projects-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .tab-button {
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.875rem;
          background: var(--bg-secondary);
          color: var(--text-primary);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-button.active {
          background: var(--accent-color);
          color: white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .project-card {
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          background: var(--bg-primary);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-image-container {
          height: 200px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
        }

        .project-image:hover {
          transform: scale(1.1);
        }

        .project-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-category {
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          background: rgba(59, 130, 246, 0.1);
        }

        .project-title {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }

        .project-link {
          font-weight: 600;
          color: var(--accent-color);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }

          .project-title {
            font-size: 1.1rem;
          }

          .project-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects