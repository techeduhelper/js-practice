// Local storage keys
const STORAGE_KEYS = {
  SOLUTIONS: 'js_practice_solutions',
  PROGRESS: 'js_practice_progress',
  SETTINGS: 'js_practice_settings'
};

// Get user's saved solutions
export const getSavedSolutions = () => {
  try {
    const solutions = localStorage.getItem(STORAGE_KEYS.SOLUTIONS);
    return solutions ? JSON.parse(solutions) : {};
  } catch (error) {
    console.error('Error loading saved solutions:', error);
    return {};
  }
};

// Save user's solution for a question
export const saveSolution = (questionId, code) => {
  try {
    const solutions = getSavedSolutions();
    solutions[questionId] = {
      code,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEYS.SOLUTIONS, JSON.stringify(solutions));
  } catch (error) {
    console.error('Error saving solution:', error);
  }
};

const STORAGE_KEY = 'js_practice_progress';

export const loadProgress = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { scores: {}, times: {} };
  } catch (error) {
    console.error('Error loading progress:', error);
    return { scores: {}, times: {} };
  }
};

export const saveProgress = (questionId, score, timeSpent) => {
  try {
    const progress = loadProgress();
    progress.scores[questionId] = score;
    progress.times[questionId] = timeSpent;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

export const getProgress = () => {
  return loadProgress();
};

export const clearProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing progress:', error);
  }
};

// Calculate score based on difficulty and time spent
export const calculateScore = (difficulty, timeSpent, allTestsPassed) => {
  if (!allTestsPassed) return 0;

  const baseScore = {
    'Easy': 100,
    'Medium': 200,
    'Hard': 300
  }[difficulty] || 0;

  // Time bonus: faster solutions get more points
  const timeBonus = Math.max(0, 50 - Math.floor(timeSpent / 1000 / 60)); // Bonus based on minutes
  
  return baseScore + timeBonus;
};

// Get user settings
export const getSettings = () => {
  try {
    const settings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return settings ? JSON.parse(settings) : {
      theme: 'dark',
      fontSize: 14,
      autoSave: true
    };
  } catch (error) {
    console.error('Error loading settings:', error);
    return {
      theme: 'dark',
      fontSize: 14,
      autoSave: true
    };
  }
};

// Save user settings
export const saveSettings = (settings) => {
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving settings:', error);
  }
};
