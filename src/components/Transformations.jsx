import React from 'react';

const transformations = [
  [
    { before: '/assets/before2.jpg', after: '/assets/after2.jpg' },
  ],
  [
    { before: '/assets/before3.jpg', after: '/assets/after3.jpg' },
  ],
  [
    { before: '/assets/before4.jpg', after: '/assets/after4.jpg' },
  ],
];

const Transformations = () => (
  <section className="transformation-section">
    <h2>
      This Is The New And Improved Version Of The Blueprint That Transformed <span className="bold-blue">Over 5000+ Of My Students</span>...
    </h2>
    <div className="transformations">
      {transformations.map((pair, idx) => (
        <div className="transformation-pair" key={idx}>
          <div style={{position: 'relative'}}>
            <img className="transformation-img" src={pair[0].before} alt="before" />
            <span className="transformation-label">before</span>
          </div>
          <div style={{position: 'relative', border: '2px solid #2fbfd7', borderRadius: '1rem', boxShadow: '0 0 12px #2fbfd788'}}>
            <img className="transformation-img" src={pair[0].after} alt="after" />
            <span className="transformation-label" style={{background:'#2fbfd7'}}>AFTER</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Transformations;
