import React, { memo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { getText } from '../translations';
import '../style/LanguageSwitcher.css';

const LanguageSwitcher = memo(() => {
  const { language, toggleLanguage } = useLanguage();
  
  // Get translated text
  const currentLanguage = getText(language, 'languageSwitcher.current');
  const switchToLanguage = getText(language, 'languageSwitcher.switchTo');
  const ariaLabel = getText(language, 'languageSwitcher.label');
  
  return (
    <div className="floating-language-switcher">
      <motion.button 
        className="language-switcher-button"
        onClick={toggleLanguage}
        aria-label={ariaLabel}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 15
        }}
      >
        <div className="language-switcher-inner">
          <AnimatePresence mode="wait">
            <motion.span 
              key={language}
              className="current-language"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              {currentLanguage}
            </motion.span>
          </AnimatePresence>
          
          <div className="language-arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3V13M8 13L13 8M8 13L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="switch-to-language">
            {switchToLanguage}
          </div>
        </div>
      </motion.button>
    </div>
  );
});

LanguageSwitcher.displayName = 'LanguageSwitcher';

export default LanguageSwitcher;
