import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 426);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 426);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

  return isMobile;
};

export default useIsMobile;