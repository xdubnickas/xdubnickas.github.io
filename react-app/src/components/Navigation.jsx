import React from 'react';

function Navigation({ onNavigate }) {
  const handleClick = (e, id) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <nav>
      <div className="container">
        <ul>
          <li><a href="#about" onClick={(e) => handleClick(e, 'about')}>O mne</a></li>
          <li><a href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projekty</a></li>
          <li><a href="#skills" onClick={(e) => handleClick(e, 'skills')}>Znalosti</a></li>
          <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
