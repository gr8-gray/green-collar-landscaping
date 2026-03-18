import React, { useState, useEffect } from 'react';
import { Cookie, X, Shield } from 'lucide-react';

const CookieConsent = ({ onOpenPrivacy }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');

    if (!consent) {
      // No choice made yet - show banner after a short delay for better UX
      setTimeout(() => {
        setShowBanner(true);
        setTimeout(() => setIsVisible(true), 100); // Fade in animation
      }, 1000);
    } else if (consent === 'accepted') {
      // User previously accepted - load Google Analytics
      loadGoogleAnalytics();
    }
    // If rejected, do nothing - GA stays blocked
  }, []);

  const loadGoogleAnalytics = () => {
    const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

    if (!GA_ID || GA_ID === 'GA_MEASUREMENT_ID') {
      console.warn('Google Analytics ID not configured');
      return;
    }

    // Check if GA is already loaded
    if (window.gtag) {
      return;
    }

    // Dynamically load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_ID, {
      'page_title': 'Green Collar Landscaping LLC',
      'send_page_view': true
    });
    window.gtag = gtag;

    // Set up event tracking after GA loads
    setupEventTracking();
  };

  const setupEventTracking = () => {
    // Track phone clicks
    document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.gtag) {
          window.gtag('event', 'phone_call', {
            'event_category': 'Contact',
            'event_label': 'Phone Click',
            'value': link.getAttribute('href')
          });
        }
      });
    });

    // Track calculator usage
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.gtag) {
            window.gtag('event', 'calculator_view', {
              'event_category': 'Engagement',
              'event_label': 'Calculator Section Viewed'
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      observer.observe(calculatorSection);
    }
  };

  const handleAccept = () => {
    // Save consent to localStorage
    localStorage.setItem('cookieConsent', 'accepted');

    // Load Google Analytics
    loadGoogleAnalytics();

    // Hide banner with fade out
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const handleReject = () => {
    // Save rejection to localStorage
    localStorage.setItem('cookieConsent', 'rejected');

    // Hide banner with fade out
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const handleClose = () => {
    // Treat close as rejection
    handleReject();
  };

  if (!showBanner) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="bg-white border-t-4 border-forest-green shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Icon and Message */}
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0">
                <Cookie className="w-8 h-8 text-forest-green" />
              </div>

              <div className="flex-1">
                <h3
                  id="cookie-consent-title"
                  className="text-lg font-heading font-bold text-slate-grey mb-1 flex items-center gap-2"
                >
                  <Shield className="w-5 h-5" />
                  We Value Your Privacy
                </h3>
                <p
                  id="cookie-consent-description"
                  className="text-sm text-gray-700 leading-relaxed"
                >
                  We use cookies and analytics to improve your experience and understand how visitors use our site.
                  By clicking "Accept", you consent to our use of cookies for analytics purposes.{' '}
                  <button
                    onClick={onOpenPrivacy}
                    className="text-forest-green hover:underline font-semibold inline"
                  >
                    Read our Privacy Policy
                  </button>
                  {' '}to learn more about how we protect your data.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
              <button
                onClick={handleReject}
                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Reject cookies"
              >
                Reject
              </button>

              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-semibold text-white bg-forest-green hover:bg-forest-green/90 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-forest-green"
                aria-label="Accept cookies"
              >
                Accept Cookies
              </button>

              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Close cookie banner"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
