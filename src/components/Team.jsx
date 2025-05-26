import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'
import angelo from '../assets/team/gelo.jpg';
import cuesta from '../assets/team/cuesta.jpg';
import karen from '../assets/team/karen.jpg';
import ryan from '../assets/team/ryan.jpg';
import fi from '../assets/team/fi.jpg';

const Team = () => {
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

  const team = [
    {
      name: 'Karen Cabrera',
      position: 'Founder & CEO',
      image: karen,
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Jan Risty Cuesta',
      position: 'Full-Stack Developer',
      image: cuesta,
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Angelo Almonte',
      position: 'Front-End Developer',
      image: angelo,
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
        {
      name: 'Ryan Ofalsa',
      position: 'Full-Stack Developer',
      image: ryan,
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Fi Sim Allen Oliva',
      position: 'Multimedia/Designer',
      image: fi,
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ]

  return (
    <section id="team" className="section">
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
            OUR TEAM
          </span>
          <h2>Meet Our Experts</h2>
          <p 
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--text-secondary)'
            }}
          >
            Our talented team brings together diverse skills and experience to create exceptional digital solutions.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="team-grid"
          style={{
            display: 'grid',
            gap: '2rem',
            marginTop: '3rem'
          }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="team-card"
              style={{
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                background: 'var(--bg-primary)',
                height: '100%'
              }}
            >
              <div 
                className="image-container"
                style={{ 
                  height: '300px', 
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="team-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
                {/* Dark overlay that appears on hover */}
                <div 
                  className="overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.6)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    paddingBottom: '2rem',
                    gap: '1rem'
                  }}
                >
                  <a 
                    href={member.social.linkedin}
                    className="social-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '50%',
                      background: 'var(--accent-color)',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      transform: 'translateY(20px)',
                      opacity: 0
                    }}
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="social-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '50%',
                      background: 'var(--accent-color)',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      transform: 'translateY(20px)',
                      opacity: 0,
                      transitionDelay: '0.1s'
                    }}
                  >
                    <FiTwitter size={20} />
                  </a>
                  <a 
                    href={member.social.github}
                    className="social-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '50%',
                      background: 'var(--accent-color)',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      transform: 'translateY(20px)',
                      opacity: 0,
                      transitionDelay: '0.2s'
                    }}
                  >
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  {member.name}
                </h3>
                <p style={{ color: 'var(--accent-color)', fontWeight: 500 }}>
                  {member.position}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <style>{`
        .image-container:hover .overlay {
          opacity: 1 !important;
        }

        .image-container:hover .social-link {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .social-link:hover {
          transform: translateY(-5px) scale(1.1) !important;
        }

        .team-grid {
          grid-template-columns: repeat(5, 1fr);
        }

        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .image-container:hover .team-image {
          transform: scale(1.06);
        }

        @media (max-width: 1200px) {
          .team-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Team