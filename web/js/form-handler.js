/**
 * Cytognosis Foundation - Form Handler
 * Client-side JavaScript for handling form submissions
 * 
 * Handles:
 * - Contact form (/contact.html)
 * - Partnership form (/partner.html)
 * - Future: Stories form (/stories.html)
 */

(function() {
  'use strict';
  
  /**
   * Initialize form handlers when DOM is ready
   */
  document.addEventListener('DOMContentLoaded', function() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      initializeContactForm(contactForm);
    }
    
    // Partnership form
    const partnershipForm = document.getElementById('partnershipForm');
    if (partnershipForm) {
      initializePartnershipForm(partnershipForm);
    }
  });
  
  /**
   * Initialize contact form
   */
  function initializeContactForm(form) {
    logDev('Initializing contact form');
    
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: form.querySelector('#contact-name').value,
        email: form.querySelector('#contact-email').value,
        subject: form.querySelector('#contact-subject').value,
        message: form.querySelector('#contact-message').value,
        newsletter: form.querySelector('input[name="newsletter"]')?.checked || false,
        website: form.querySelector('#website')?.value || '', // Honeypot
      };
      
      // Validate
      const validation = validateContactForm(formData);
      if (!validation.valid) {
        showFormMessage(form, 'error', validation.error);
        return;
      }
      
      // Submit
      await submitForm(form, FORM_ENDPOINTS.contact, formData, 'contact');
    });
  }
  
  /**
   * Initialize partnership form
   */
  function initializePartnershipForm(form) {
    logDev('Initializing partnership form');
    
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        contactName: form.querySelector('#partner-name').value,
        contactEmail: form.querySelector('#partner-email').value,
        contactPhone: form.querySelector('#partner-phone')?.value || '',
        organizationName: form.querySelector('#partner-organization').value,
        organizationType: form.querySelector('#partner-org-type').value,
        partnershipType: form.querySelector('#partner-type').value,
        message: form.querySelector('#partner-message').value,
        website: form.querySelector('#website')?.value || '', // Honeypot
      };
      
      // Validate
      const validation = validatePartnershipForm(formData);
      if (!validation.valid) {
        showFormMessage(form, 'error', validation.error);
        return;
      }
      
      // Submit
      await submitForm(form, FORM_ENDPOINTS.partnership, formData, 'partnership');
    });
  }
  
  /**
   * Validate contact form
   */
  function validateContactForm(data) {
    if (!data.name || data.name.trim().length < 2) {
      return { valid: false, error: 'Please enter your name' };
    }
    
    if (!isValidEmail(data.email)) {
      return { valid: false, error: 'Please enter a valid email address' };
    }
    
    if (!data.subject) {
      return { valid: false, error: 'Please select a subject' };
    }
    
    if (!data.message || data.message.trim().length < 10) {
      return { valid: false, error: 'Please enter a message (at least 10 characters)' };
    }
    
    return { valid: true };
  }
  
  /**
   * Validate partnership form
   */
  function validatePartnershipForm(data) {
    if (!data.contactName || data.contactName.trim().length < 2) {
      return { valid: false, error: 'Please enter your name' };
    }
    
    if (!isValidEmail(data.contactEmail)) {
      return { valid: false, error: 'Please enter a valid email address' };
    }
    
    if (!data.organizationName || data.organizationName.trim().length < 2) {
      return { valid: false, error: 'Please enter your organization name' };
    }
    
    if (!data.organizationType) {
      return { valid: false, error: 'Please select your organization type' };
    }
    
    if (!data.partnershipType) {
      return { valid: false, error: 'Please select a partnership type' };
    }
    
    if (!data.message || data.message.trim().length < 20) {
      return { valid: false, error: 'Please describe your partnership interest (at least 20 characters)' };
    }
    
    return { valid: true };
  }
  
  /**
   * Submit form to backend
   */
  async function submitForm(form, endpoint, data, formType) {
    // Check if endpoint is configured
    if (!endpoint || endpoint.includes('REPLACE_WITH')) {
      showFormMessage(form, 'error', 'Form submission is not yet configured. Please email us directly.');
      logDev('Form endpoint not configured:', endpoint);
      return;
    }
    
    // Disable submit button
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Clear previous messages
    clearFormMessage(form);
    
    try {
      logDev(`Submitting ${formType} form to:`, endpoint);
      logDev('Data:', data);
      
      // Add metadata
      const submissionData = {
        ...data,
        clientIP: await getClientIP(),
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      };
      
      // POST to Apps Script endpoint
      const response = await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors', // Apps Script requires no-cors
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });
      
      // Note: no-cors mode doesn't allow reading response
      // Apps Script will send emails regardless
      // We'll assume success if no exception thrown
      
      logDev(`${formType} form submitted successfully`);
      
      // Show success message
      showFormMessage(form, 'success', 
        formType === 'contact' 
          ? 'Thank you for contacting us! We\'ll respond within 24-48 hours.'
          : 'Thank you for your partnership inquiry! Our team will review and respond within 3-5 business days.'
      );
      
      // Reset form
      form.reset();
      
      // Track submission (if analytics enabled)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submission', {
          form_type: formType,
        });
      }
      
    } catch (error) {
      logDev('Form submission error:', error);
      showFormMessage(form, 'error', 
        'An error occurred while submitting the form. Please try again or email us directly.'
      );
    } finally {
      // Re-enable submit button
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    }
  }
  
  /**
   * Show form message
   */
  function showFormMessage(form, type, message) {
    // Remove existing messages
    clearFormMessage(form);
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.innerHTML = `
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
      <span>${message}</span>
    `;
    
    // Insert after form or before submit button
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.parentNode.insertBefore(messageDiv, submitButton);
    } else {
      form.appendChild(messageDiv);
    }
    
    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Auto-hide success messages after 10 seconds
    if (type === 'success') {
      setTimeout(() => {
        clearFormMessage(form);
      }, 10000);
    }
  }
  
  /**
   * Clear form messages
   */
  function clearFormMessage(form) {
    const existingMessages = form.querySelectorAll('.form-message');
    existingMessages.forEach(msg => msg.remove());
  }
  
  /**
   * Validate email format
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  /**
   * Get client IP address (best effort)
   */
  async function getClientIP() {
    try {
      // Try ipify API
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      logDev('Could not get client IP:', error);
      return 'unknown';
    }
  }
  
})();
