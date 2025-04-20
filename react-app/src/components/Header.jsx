import React from 'react';

function Header() {
  return (
    <header>
      <div className="container">
        <img src="https://via.placeholder.com/150" alt="Štefan Dubnička" className="profile-image" />
        <h1 className="name">Štefan Dubnička</h1>
        <p className="title">Web Developer | Java Developer | Student</p>
        <a href="CV (1).pdf" className="cv-button" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-file-pdf"></i> Pozrieť CV
        </a>
      </div>
    </header>
  );
}

export default Header;
