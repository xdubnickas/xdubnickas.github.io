import React, { createContext, useState, useContext, useCallback, useMemo, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Initialize with stored language preference or Slovak as default
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'sk';
  });

  // Store language preference when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Memoized toggle function to prevent unnecessary rerenders
  const toggleLanguage = useCallback(() => {
    setLanguage(prevLang => prevLang === 'sk' ? 'en' : 'sk');
  }, []);

  // Memoized context value
  const contextValue = useMemo(() => ({
    language,
    toggleLanguage,
    isEnglish: language === 'en',
    isSlovak: language === 'sk'
  }), [language, toggleLanguage]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
