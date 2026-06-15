import './ContactPreview.css';

const ContactPreview = () => {
  return (
    <section className="contact-preview" id="contact">
      <div className="container-content">
        <div className="contact-grid">
          <div className="contact-statement fade-up">
            <h2 className="display-large">
              Open for conversations,<br />
              collaborations,<br />
              and curious ideas.
            </h2>
          </div>
          
          <div className="contact-links fade-up" style={{ animationDelay: '200ms' }}>
            <a href="mailto:hello@ezulisme.com" className="contact-link">
              <span className="meta">Email</span>
              <span className="body-large">hello@ezulisme.com</span>
            </a>
            
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="meta">Instagram</span>
              <span className="body-large">@e/zul/isme</span>
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="meta">LinkedIn</span>
              <span className="body-large">Zul</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
