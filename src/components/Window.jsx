import React from 'react';
import '../styles.css';

function Window({ title, children, onClose, isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="window-overlay">
      <div className="window-container">
        <div className="window-header">
          <h3>{title}</h3>
          <button className="window-close-btn" onClick={onClose}>×</button>
        </div>
        <div className="window-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Window; 