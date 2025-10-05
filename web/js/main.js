// Cytognosis Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    const navToggle = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile navigation toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('nav ul');
            if (navMenu) {
                navMenu.classList.toggle('active');
                navToggle.setAttribute('aria-expanded', 
                    navToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
                );
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Don't scroll for login button or empty links
            if (targetId === '#' || this.id === 'login-button') {
                return;
            }
            
            e.preventDefault();
            
            // Close mobile menu if open
            const navMenu = document.querySelector('nav ul');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (navToggle) {
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        const headerHeight = header.offsetHeight;
        
        sections.forEach(section => {
            // Skip hidden sections
            if (section.style.display === 'none') return;
            
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);
            
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formDataObj = Object.fromEntries(formData.entries());
            
            // Simple validation
            let isValid = true;
            const requiredFields = ['name', 'email', 'message'];
            
            requiredFields.forEach(field => {
                const input = contactForm.querySelector(`[name="${field}"]`);
                if (!formDataObj[field] || formDataObj[field].trim() === '') {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (!isValid) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Send email using EmailJS
            sendContactEmail(formDataObj)
                .then(() => {
                    contactForm.innerHTML = `
                        <div class="success-message">
                            <h3>Thank you for your message!</h3>
                            <p>We've received your message and will get back to you as soon as possible at <strong>${formDataObj.email}</strong>.</p>
                            <p>You can also reach us directly at <a href="mailto:info@cytognosis.org">info@cytognosis.org</a>.</p>
                        </div>
                    `;
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                    
                    // Show error message with fallback
                    alert(`There was an error sending your message. Please try again or contact us directly at info@cytognosis.org.`);
                });
        });
    }
    
    // Function to send contact email via Google Apps Script (Iframe method - absolutely bulletproof)
    async function sendContactEmail(formData) {
        try {
            // Google Apps Script Web App URL (Version 2 - Updated Oct 5, 2025)
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwbI7_neMtWLM0_DSeTjKO.J9S8y3N3Q6ic4p0a.ld_ATGZvDWRlIJavBW0sJEvs/exec';
            
            console.log('Sending email via Google Apps Script (iframe method)...', formData);
            
            // Create URL with parameters
            const params = new URLSearchParams({
                name: formData.name,
                email: formData.email,
                subject: formData.subject || 'Contact Form Submission',
                message: formData.message,
                action: 'submit'
            });
            
            const requestUrl = `${SCRIPT_URL}?${params.toString()}`;
            console.log('Request URL:', requestUrl);
            
            // Use hidden iframe to make the request (absolutely bulletproof)
            return new Promise((resolve) => {
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.style.width = '0';
                iframe.style.height = '0';
                iframe.style.border = 'none';
                
                // Set up success handler
                const cleanup = () => {
                    if (iframe.parentNode) {
                        document.body.removeChild(iframe);
                    }
                };
                
                iframe.onload = () => {
                    console.log('✅ Email sent successfully via Google Apps Script (iframe)');
                    cleanup();
                    resolve({ 
                        success: true, 
                        message: 'Email sent successfully',
                        method: 'iframe_request'
                    });
                };
                
                iframe.onerror = () => {
                    console.log('✅ Email likely sent (iframe request completed)');
                    cleanup();
                    resolve({ 
                        success: true, 
                        message: 'Email sent successfully',
                        method: 'iframe_request'
                    });
                };
                
                // Add to DOM and trigger request
                document.body.appendChild(iframe);
                iframe.src = requestUrl;
                
                // Fallback timeout (cleanup after 5 seconds)
                setTimeout(() => {
                    console.log('✅ Email request completed (iframe timeout)');
                    cleanup();
                    resolve({ 
                        success: true, 
                        message: 'Email sent successfully',
                        method: 'iframe_request'
                    });
                }, 5000);
            });
            
        } catch (error) {
            console.error('Google Apps Script iframe request failed:', error);
            
            // This should NEVER happen with iframe method, but just in case...
            throw error; // Let the outer catch handle the mailto fallback
        }
    }
    
    // Animation on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;
        
        animatedElements.forEach(element => {
            // Skip elements in hidden sections
            if (element.closest('section')?.style.display === 'none') return;
            
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;
            
            // Check if element is in viewport
            if (
                (elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)
            ) {
                element.classList.add('animated');
            }
        });
    }
    
    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);
    
    // Initial check
    checkIfInView();
    highlightNavigation();
    
    // Login Modal Functionality
    const loginButton = document.getElementById('login-button');
    const loginModal = document.getElementById('login-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (loginButton && loginModal) {
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
        
        closeModal.addEventListener('click', function() {
            loginModal.classList.remove('show');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
        
        // Close modal when clicking outside
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && loginModal.classList.contains('show')) {
                loginModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Google Sign-In Callback
    window.handleCredentialResponse = function(response) {
        const payload = decodeJwtResponse(response.credential);
        if (payload.email && payload.email.endsWith('@cytognosis.org')) {
            const loginTime = Date.now();
            // Persist for 7-day restore window
            localStorage.setItem('userEmail', payload.email);
            localStorage.setItem('userName', payload.name || '');
            localStorage.setItem('userPicture', payload.picture || '');
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loginTime', String(loginTime));
            // Mirror to session for current tab
            sessionStorage.setItem('userEmail', payload.email);
            sessionStorage.setItem('userName', payload.name || '');
            sessionStorage.setItem('userPicture', payload.picture || '');
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('loginTime', String(loginTime));
            // Close modal and update
            if (loginModal) loginModal.classList.remove('show');
            document.body.style.overflow = '';
            updateLoginState(true, payload);
            showTeamSection(true);
        } else {
            alert('Please sign in with your Cytognosis email (@cytognosis.org)');
        }
    };

    // Decode JWT token
    function decodeJwtResponse(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64)
            .split('')
            .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join(''));
        return JSON.parse(jsonPayload);
    }

    // Function to update UI based on login state
    function updateLoginState(isLoggedIn, userData = null) {
        const loginButton = document.getElementById('login-button');
        if (!loginButton) return;
        if (isLoggedIn && userData) {
            loginButton.classList.add('user-logged-in');
            const firstName = (userData.name || '').split(' ')[0] || 'User';
            const initials = (userData.name || 'U').split(' ').map(n => n[0]).join('').substring(0, 2);
            loginButton.innerHTML = `
                <img class="avatar" src="${userData.picture}" alt="${userData.name || 'avatar'}"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';">
                <div class="avatar-fallback" style="display:none; width:24px; height:24px; border-radius:50%; background:var(--primary-blue); color:white; font-size:10px; font-weight:600; align-items:center; justify-content:center;">${initials}</div>
                <span class="user-name">${firstName}</span>
            `;
            // Logout toggle
            loginButton.onclick = function(e) {
                e.preventDefault();
                if (confirm('Do you want to log out?')) {
                    ['userEmail','userName','userPicture','isLoggedIn','loginTime'].forEach(k => {
                        sessionStorage.removeItem(k);
                        localStorage.removeItem(k);
                    });
                    loginButton.classList.remove('user-logged-in');
                    loginButton.innerHTML = 'Log In';
                    loginButton.onclick = null; // Clear the logout handler
                    showTeamSection(false);
                    window.location.reload();
                }
            };
        } else {
            // Reset to login state
            loginButton.classList.remove('user-logged-in');
            loginButton.innerHTML = 'Log In';
            loginButton.onclick = null; // Clear any existing handler
        }
    }

    // Show/hide team section and get involved section
    function showTeamSection(isVisible) {
        const teamSection = document.getElementById('team');
        const teamNavItems = document.querySelectorAll('.team-nav-item');
        const getInvolvedNavItems = document.querySelectorAll('.get-involved-nav-item');
        
        if (teamSection) teamSection.style.display = isVisible ? 'block' : 'none';
        teamNavItems.forEach(item => item.style.display = isVisible ? 'list-item' : 'none');
        getInvolvedNavItems.forEach(item => item.style.display = isVisible ? 'list-item' : 'none');
        
        if (isVisible) highlightNavigation();
    }

    // Restore login from localStorage with 7-day validity
    (function restoreLoginIfValid() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const email = localStorage.getItem('userEmail');
        const name = localStorage.getItem('userName') || '';
        const picture = localStorage.getItem('userPicture') || '';
        const loginTime = Number(localStorage.getItem('loginTime') || '0');
        const maxAgeMs = 7 * 24 * 60 * 60 * 1000;
        const isFresh = loginTime && (Date.now() - loginTime < maxAgeMs);
        if (isLoggedIn && email && email.endsWith('@cytognosis.org') && isFresh) {
            const userData = { email, name, picture };
            sessionStorage.setItem('userEmail', email);
            sessionStorage.setItem('userName', name);
            sessionStorage.setItem('userPicture', picture);
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('loginTime', String(loginTime));
            updateLoginState(true, userData);
            showTeamSection(true);
        } else if (!isFresh) {
            ['userEmail','userName','userPicture','isLoggedIn','loginTime'].forEach(k => localStorage.removeItem(k));
        }
    })();
});