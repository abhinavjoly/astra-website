import { useState, useEffect, useRef } from 'react';

/**
 * useActiveSection
 * Tracks which section ID is currently in the viewport.
 * Uses a more robust "center-point" detection logic.
 * @param {string[]} sectionIds - Array of section IDs to observe.
 */
const useActiveSection = (sectionIds) => {
  const [activeId, setActiveId] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Special case: Check if we are at the very bottom of the page
      const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;
      
      if (isAtBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Find the section that currently contains the middle of the viewport
      let currentSection = '';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;
          
          if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
            currentSection = id;
            break;
          }
        }
      }

      if (currentSection && currentSection !== activeId) {
        setActiveId(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, activeId]);

  return activeId;
};

export default useActiveSection;
