import React from 'react'

const TermsAndConditions = () => {
  const containerStyle = {
    padding: '4rem 1rem',
    maxWidth: '800px',
    margin: '2rem auto 0',
    fontSize: '16px'
  }

  const mobileContainerStyle = {
    '@media (max-width: 768px)': {
      padding: '2rem 1rem'
    }
  }

  const headingStyle = {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#333'
  }

  const subHeadingStyle = {
    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
    marginBottom: '0.5rem',
    color: '#333'
  }

  const sectionHeadingStyle = {
    fontSize: 'clamp(1.1rem, 2.8vw, 1.5rem)',
    marginBottom: '1rem',
    color: '#444'
  }

  const paragraphStyle = {
    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
    lineHeight: '1.6',
    marginBottom: '1rem',
    textAlign: 'justify'
  }

  const sectionStyle = {
    marginBottom: '2rem'
  }

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Terms and Conditions</h1>
      
      <div style={sectionStyle}>
        <h2 style={subHeadingStyle}>Terms and Conditions for Cuestera Co.</h2>
        <p style={{ ...paragraphStyle, margin: '0' }}>
          <strong>Effective Date:</strong> January 1, 2025
        </p>
      </div>

      <p style={paragraphStyle}>
        Welcome to Cuestera Co. By accessing or using our information technology services—including but not limited to software development, IT consulting, system integration, and managed services—you agree to be bound by the following Terms and Conditions:
      </p>

      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>1. Use of Services</h3>
        <p style={paragraphStyle}>
          You may only use our services for lawful purposes and in compliance with all applicable laws and regulations. You agree not to attempt unauthorized access to our systems or interfere with the proper operation of our services.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>2. Service Availability</h3>
        <p style={paragraphStyle}>
          We aim to provide reliable, high-quality services but do not guarantee uninterrupted or error-free operation. All services are offered on an "as-is" and "as-available" basis.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>3. Modifications and Termination</h3>
        <p style={paragraphStyle}>
          Cuestera Co. reserves the right to modify, suspend, or discontinue any part of the services at any time, with or without notice.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>4. Limitation of Liability</h3>
        <p style={paragraphStyle}>
          Cuestera Co. shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services, even if we have been advised of the possibility of such damages.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>5. Governing Law</h3>
        <p style={paragraphStyle}>
          These Terms shall be governed by and construed in accordance with the laws of the Republic of the Philippines. Any disputes will be subject to the exclusive jurisdiction of the courts located in Calamba City.
        </p>
      </div>
    </div>
  )
}

export default TermsAndConditions