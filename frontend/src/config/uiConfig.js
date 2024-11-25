export const UI_CONFIG = {
  colors: {
    primary: {
      main: '#0ea5e9',
      light: '#38bdf8',
      dark: '#0369a1'
    },
    success: {
      main: '#22c55e',
      light: '#4ade80',
      dark: '#16a34a'
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706'
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626'
    }
  },

  scoreThresholds: {
    excellent: 80,
    good: 70,
    average: 60,
    needsImprovement: 0
  },

  animations: {
    scoreReveal: 1000,
    categoryTransition: 300,
    suggestionsFade: 500
  },

  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  },

  features: {
    comparison: true,
    history: true,
    export: true,
    darkMode: true
  }
}; 