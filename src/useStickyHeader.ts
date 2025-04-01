import { useState, useEffect } from 'react';

const useStickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 50); // Muda o estado após rolar 50px
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isSticky;
};

export default useStickyHeader;