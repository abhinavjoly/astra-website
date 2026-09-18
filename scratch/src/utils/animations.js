/**
 * Animation Utilities Module
 * Centralized configuration and utilities for scroll-based animations
 */

/**
 * Animation timing constants (in seconds)
 */
export const DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8
};

/**
 * Easing functions for smooth animations
 */
export const EASE = {
  smooth: [0.25, 0.1, 0.25, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  snappy: [0.6, 0.01, 0.05, 0.9],
  easeOut: [0.0, 0.0, 0.2, 1],
  easeIn: [0.4, 0.0, 1, 1],
  easeInOut: [0.4, 0.0, 0.2, 1]
};

/**
 * Viewport thresholds for scroll triggers
 */
export const THRESHOLD = {
  conservative: 0.3,
  normal: 0.2,
  aggressive: 0.1
};

/**
 * Stagger delay configurations (in seconds)
 */
export const STAGGER = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15
};

/**
 * Parallax speed configurations
 */
export const PARALLAX = {
  subtle: 0.1,
  normal: 0.3,
  dramatic: 0.5
};

/**
 * Animation variants for Framer Motion
 * Each variant has hidden and visible states
 */
export const VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: DURATION.normal, ease: EASE.easeOut }
    }
  },
  
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: DURATION.normal, ease: EASE.easeOut }
    }
  },
  
  slideDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: DURATION.normal, ease: EASE.easeOut }
    }
  },
  
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: DURATION.normal, ease: EASE.easeOut }
    }
  },
  
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: DURATION.normal, ease: EASE.easeOut }
    }
  },
  
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: DURATION.fast, ease: EASE.easeOut }
    }
  },

  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: STAGGER.normal,
        delayChildren: 0.1
      }
    }
  }
};

/**
 * Page transition variants for route changes
 */
export const PAGE_TRANSITIONS = {
  initial: { opacity: 0, scale: 1.1, filter: 'blur(10px)' },
  animate: { 
    opacity: 1, 
    scale: 1,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1], // expoOut
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    filter: 'blur(5px)',
    transition: { duration: 0.5, ease: [0.32, 0, 0.67, 0] } // expoIn
  }
};

/**
 * Check if user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get animation variant with custom duration and delay
 * @param {string} variantName - Name of the variant (fadeIn, slideUp, etc.)
 * @param {Object} options - Custom options
 * @param {number} options.delay - Animation delay in seconds
 * @param {number} options.duration - Animation duration in seconds
 * @returns {Object} Animation variant with custom timing
 */
export const getVariant = (variantName, options = {}) => {
  const { delay = 0, duration = DURATION.normal } = options;
  const variant = VARIANTS[variantName];
  
  if (!variant) return VARIANTS.fadeIn;
  
  return {
    hidden: variant.hidden,
    visible: {
      ...variant.visible,
      transition: {
        ...variant.visible.transition,
        duration,
        delay
      }
    }
  };
};

/**
 * Create stagger animation for child elements
 * @param {number} staggerDelay - Delay between each child animation
 * @param {number} delayChildren - Initial delay before children start animating
 * @returns {Object} Stagger container variant
 */
export const createStagger = (staggerDelay = STAGGER.normal, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren
    }
  }
});

/**
 * Get hidden state for a variant
 * @param {string} variant - Variant name
 * @returns {Object} Hidden state object
 */
export const getHiddenState = (variant) => {
  const states = {
    fadeIn: { opacity: 0 },
    slideUp: { opacity: 0, y: 40 },
    slideDown: { opacity: 0, y: -40 },
    slideLeft: { opacity: 0, x: 40 },
    slideRight: { opacity: 0, x: -40 },
    scaleIn: { opacity: 0, scale: 0.95 }
  };
  return states[variant] || states.slideUp;
};

/**
 * Get visible state for a variant
 * @param {string} variant - Variant name
 * @returns {Object} Visible state object
 */
export const getVisibleState = (variant) => {
  const states = {
    fadeIn: { opacity: 1 },
    slideUp: { opacity: 1, y: 0 },
    slideDown: { opacity: 1, y: 0 },
    slideLeft: { opacity: 1, x: 0 },
    slideRight: { opacity: 1, x: 0 },
    scaleIn: { opacity: 1, scale: 1 }
  };
  return states[variant] || states.slideUp;
};
