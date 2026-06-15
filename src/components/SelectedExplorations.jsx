import { useState } from 'react';
import './SelectedExplorations.css';

const explorations = [
  {
    id: 1,
    title: 'Identity',
    description: 'Brand identity and visual systems',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?w=800&h=600&fit=crop',
    category: 'identity'
  },
  {
    id: 2,
    title: 'Illustration',
    description: 'Visual storytelling through illustration',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&h=600&fit=crop',
    category: 'illustration'
  },
  {
    id: 3,
    title: 'Experiments',
    description: 'Creative explorations and visual notes',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
    category: 'experiments'
  }
];

const SelectedExplorations = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="selected-explorations" id="about">
      <div className="container-content">
        <div className="section-header">
          <span className="motif">∴</span>
          <h2 className="heading">Selected Explorations</h2>
        </div>

        <div className="explorations-grid">
          {explorations.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.category}`}
              className="exploration-card card"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="exploration-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={`exploration-image ${hoveredId === item.id ? 'zoomed' : ''}`}
                />
                <div className="exploration-overlay" />
              </div>
              <div className="exploration-content">
                <h3 className="subheading exploration-title">{item.title}</h3>
                <p className="body exploration-description">{item.description}</p>
                <span className="motif exploration-motif">∴</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedExplorations;
