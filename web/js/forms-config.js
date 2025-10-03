/**
 * Form API Configuration
 * Google Apps Script web app URLs for form submission
 */

const FORM_ENDPOINTS = {
  // Contact form endpoint - Cytognosis Contact Form Handler
  contact: 'https://script.google.com/macros/s/AKfycbwbI7_neM-tWLM0_DSsTjKOJ9S8y3N3O6Ic4pOaJd_ATGZvDWRIUavBW0sJEvsMvl2FRQ/exec',
  
  // Partnership form endpoint - Cytognosis Partnership Form Handler (v2 - Public Access)
  partnership: 'https://script.google.com/macros/s/AKfycbxkyh0nYXA1bsntg4WmLtZpOf2nEBrxkvEwLgksROmqRUd0DVE7YxNztL0jSDGMfsdcuQ/exec',
  
  // Stories form endpoint - to be implemented in Phase 2
  stories: 'REPLACE_WITH_STORIES_FORM_WEB_APP_URL',
};

// Development mode - set to false for production
const DEV_MODE = false;

// Show console logs in development
function logDev(...args) {
  if (DEV_MODE) {
    console.log('[Forms]', ...args);
  }
}
