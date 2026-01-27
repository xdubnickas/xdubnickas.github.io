import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getText } from '../translations';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function Header() {
  const canvasRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to match parent
    const resizeCanvas = () => {
      const header = canvas.parentElement;
      canvas.width = header.offsetWidth;
      canvas.height = header.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle configuration
    const particlesArray = [];
    const numberOfParticles = 50; // Reduced number of particles
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5; // Slower movement
        this.speedY = Math.random() * 1 - 0.5; // Slower movement
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }
    
    // Create particles
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    init();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        
        // Connect particles with lines
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) { // Increased connection distance
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - distance/150)})`; // Subtler connections
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <header className="animated-header">
      <div className="gradient-background"></div>
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      <div className="container" data-aos="fade-down">        
        <motion.h1 
          className="name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Bc. Štefan Dubnička
        </motion.h1>
        
        <motion.p 
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {getText(language, 'header.title')}
        </motion.p>
        
        <motion.div 
          className="header-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a 
            href="CV.pdf" 
            className="cv-button" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fas fa-file-pdf"></i> {getText(language, 'header.downloadCV')}
          </a>
          
          <a 
            href="https://github.com/xdubnickas" 
            className="github-button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> {getText(language, 'header.github')}
          </a>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
