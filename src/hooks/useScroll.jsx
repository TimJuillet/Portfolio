import { useState, useEffect } from 'react';

// Hook pour détecter si un élément est visible dans le viewport
export const useInView = (ref, options = {}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
};

// Hook pour la position de scroll
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

// Hook pour détecter la direction du scroll
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const toggleScrollDirection = () => {
      const scrollY = window.scrollY;
      
      if (scrollY === 0) {
        setScrollDirection('up');
      } else if (scrollY > prevOffset) {
        setScrollDirection('down');
      } else if (scrollY < prevOffset) {
        setScrollDirection('up');
      }

      setPrevOffset(scrollY);
    };

    window.addEventListener('scroll', toggleScrollDirection);

    return () => {
      window.removeEventListener('scroll', toggleScrollDirection);
    };
  }, [prevOffset]);

  return scrollDirection;
};

// Hook pour l'état de la fenêtre
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

// Hook pour détecter si on est sur mobile
export const useIsMobile = (breakpoint = 768) => {
  const { width } = useWindowSize();
  return width < breakpoint;
};

// Hook pour la position de la souris
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};
