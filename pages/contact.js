import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container" style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ color: '#4a4a4a' }}>Contact Us</h1>
      <p style={{ color: '#333', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
        We would love to hear from you! Whether you have questions, feedback, or just want to share your spiritual journey,
        please feel free to reach out to us.
      </p>
      
      <form style={{ maxWidth: '400px', margin: '20px auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <input 
            type="text" 
            placeholder="Your Name" 
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
            required 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input 
            type="email" 
            placeholder="Your Email" 
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
            required 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <textarea 
            placeholder="Your Message" 
            rows="5" 
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
            required 
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#ff6f61', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
        >
          Send Message
        </button>
      </form>

      <p style={{ color: '#333', fontSize: '16px', marginTop: '20px' }}>
        Alternatively, you can reach us at: 
        <br />
        <strong>Email:</strong> contact@spiritualhome.com
      </p>
    </div>
  );
};

export default Contact;
