/**
 * Form API Configuration
 * Update these URLs after deploying Google Apps Scripts
 */

const FORM_ENDPOINTS = {
  // Contact form endpoint - update after deploying contact-form.gs
  contact: 'REPLACE_WITH_CONTACT_FORM_WEB_APP_URL',
  
  // Partnership form endpoint - update after deploying partner-form.gs
  partnership: 'REPLACE_WITH_PARTNERSHIP_FORM_WEB_APP_URL',
  
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
