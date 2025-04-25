import React, { memo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getText } from '../translations';

// This component only re-renders when language changes or props change
const TranslatedText = memo(({ path, fallback = '', ...props }) => {
  const { language } = useLanguage();
  const translatedText = getText(language, path) || fallback;
  
  return <Component {...props}>{translatedText}</Component>;
});

TranslatedText.displayName = 'TranslatedText';

export default TranslatedText;
