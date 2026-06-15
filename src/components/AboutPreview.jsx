import './AboutPreview.css';

const skills = [
  'Brand Identity',
  'Logo Design',
  'Illustration',
  'Visual Design',
  'Storytelling',
  'Creative Direction'
];

const AboutPreview = () => {
  return (
    <section className="about-preview" id="about">
      <div className="container-content">
        <div className="about-grid">
          <div className="about-image-wrapper fade-up">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop" 
              alt="Portrait"
              className="about-image"
            />
          </div>
          
          <div className="about-content fade-up" style={{ animationDelay: '200ms' }}>
            <div className="about-header">
              <span className="motif">∴</span>
              <h2 className="heading">About</h2>
            </div>
            
            <p className="body-large about-intro">
              I'm a designer and visual storyteller passionate about creating meaningful 
              visual experiences. This archive represents my journey through design, 
              illustration, and creative exploration.
            </p>
            
            <div className="skills-section">
              <h3 className="subheading">Skills</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
            
            <a href="/about" className="btn btn-outline">More About Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
