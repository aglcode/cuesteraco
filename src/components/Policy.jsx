import React from 'react'

const Policy = () => {
  const containerStyle = {
    padding: '4rem 1rem',
    maxWidth: '800px',
    margin: '2rem auto 0',
    fontSize: '16px'
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

  const listStyle = {
    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
    lineHeight: '1.6',
    marginBottom: '1rem',
    paddingLeft: '1.5rem'
  }

  const sectionStyle = {
    marginBottom: '2rem'
  }

  const contactStyle = {
    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
    lineHeight: '1.6',
    marginBottom: '1rem',
    textAlign: 'left'
  }

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Privacy Policy</h1>
      
      <div style={sectionStyle}>
        <h2 style={subHeadingStyle}>Privacy Policy for Cuestera Co.</h2>
        <p style={{ ...paragraphStyle, margin: '0' }}>
          <strong>Effective Date:</strong> January 1, 2025
        </p>
      </div>

      <p style={paragraphStyle}>
        Cuestera Co. is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and protect your information.
      </p>

      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>1. Information We Collect</h3>
        <p style={paragraphStyle}>We may collect:</p>
        <ul style={listStyle}>
          <li>Personal details: name, email, phone number, and company information.</li>
          <li>Technical data: IP addresses, browser types, and usage analytics.</li>
          <li>Cookies and similar technologies for analytics and user experience improvement.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>2. How We Use Your Information</h3>
        <p style={paragraphStyle}>Collected information is used to:</p>
        <ul style={listStyle}>
          <li>Provide and improve our services</li>
          <li>Communicate with clients</li>
          <li>Ensure system security and prevent fraud</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>3. Information Sharing</h3>
        <p style={paragraphStyle}>
          We do not sell or rent personal data. We may share data only with trusted partners under binding agreements or where required by law.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>4. Data Protection</h3>
        <p style={paragraphStyle}>
          We implement industry-standard security measures, including encryption, secure servers, and access controls, to protect your information.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>5. Your Rights</h3>
        <p style={paragraphStyle}>You may:</p>
        <ul style={listStyle}>
          <li>Access or correct your personal data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>6. Data Retention</h3>
        <p style={paragraphStyle}>
          We retain your data only as long as necessary to fulfill the purposes described or as required by law.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>7. Updates to This Policy</h3>
        <p style={paragraphStyle}>
          We may update this Privacy Policy. Any changes will be posted on our website with the updated effective date.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>8. Contact Us</h3>
        <p style={contactStyle}>
          For any privacy concerns or requests, contact us at:<br />
          <strong>privacy@cuesteraco.com</strong>
        </p>
      </div>

      <p style={paragraphStyle}>
        By using our services, you consent to the practices outlined in this Privacy Policy.
      </p>
    </div>
  )
}

export default Policy