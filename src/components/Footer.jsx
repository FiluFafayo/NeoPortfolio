import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-content">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="motif">∴</span>
            <span className="footer-title">e/zul/isme</span>
          </div>
          
          <p className="footer-text meta">
            © {currentYear} e/zul/isme. A curated archive of creative explorations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
