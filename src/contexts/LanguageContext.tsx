import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi' | 'gu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cart': 'Cart',
    'hero.title': 'Authentic Indian Flavors, Delivered Pure.',
    'hero.subtitle': 'Experience the true taste of India with our premium, hand-selected spices and ingredients.',
    'hero.cta': 'Shop the Collection',
    'common.addToOrder': 'Add to Order',
    'common.search': 'Search products...',
  },
  hi: {
    'nav.home': 'होम',
    'nav.shop': 'दुकान',
    'nav.about': 'हमारे बारे में',
    'nav.contact': 'संपर्क करें',
    'nav.cart': 'कार्ट',
    'hero.title': 'प्रामाणिक भारतीय स्वाद, शुद्धता के साथ।',
    'hero.subtitle': 'हमारे प्रीमियम, हाथ से चुने गए मसालों और सामग्री के साथ भारत के असली स्वाद का अनुभव करें।',
    'hero.cta': 'संग्रह खरीदें',
    'common.addToOrder': 'ऑर्डर में जोड़ें',
    'common.search': 'उत्पाद खोजें...',
  },
  gu: {
    'nav.home': 'ઘર',
    'nav.shop': 'દુકાન',
    'nav.about': 'અમારા વિશે',
    'nav.contact': 'સંપર્ક કરો',
    'nav.cart': 'કાર્ટ',
    'hero.title': 'અસલ ભારતીય સ્વાદ, શુદ્ધતા સાથે.',
    'hero.subtitle': 'અમારા પ્રીમિયમ, હાથથી પસંદ કરેલા મસાલા અને ઘટકો સાથે ભારતનો સાચો સ્વાદ અનુભવો.',
    'hero.cta': 'સંગ્રહ ખરીદો',
    'common.addToOrder': 'ઓર્ડરમાં ઉમેરો',
    'common.search': 'ઉત્પાદનો શોધો...',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('alz_lang');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('alz_lang', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
