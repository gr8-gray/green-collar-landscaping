import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Send, Instagram } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    botcheck: '' // Honeypot field - should remain empty
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Throttling: prevent multiple submissions within 60 seconds
  const THROTTLE_DELAY = 60000 // 60 seconds in milliseconds

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone) => {
    if (!phone) return true // Phone is optional
    const phoneRegex = /^[\d\s\-\(\)\+\.]+$/
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
  }

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Project details are required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters describing your project'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(null)

    // HONEYPOT CHECK: If botcheck field is filled, it's a bot
    if (formData.botcheck) {
      console.warn('Bot detected - honeypot field was filled');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // THROTTLING CHECK: Prevent rapid submissions
    const lastSubmitTime = localStorage.getItem('lastFormSubmit');
    const currentTime = Date.now();

    if (lastSubmitTime) {
      const timeSinceLastSubmit = currentTime - parseInt(lastSubmitTime);
      if (timeSinceLastSubmit < THROTTLE_DELAY) {
        const remainingSeconds = Math.ceil((THROTTLE_DELAY - timeSinceLastSubmit) / 1000);
        setErrors({
          throttle: `Please wait ${remainingSeconds} seconds before submitting again.`
        });
        return;
      }
    }

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Submit to Web3Forms using environment variable
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service || 'General Inquiry',
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: 'Green Collar Landscaping Website',
          botcheck: formData.botcheck, // Send honeypot to Web3Forms for additional verification
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')

        // Record submission time for throttling
        localStorage.setItem('lastFormSubmit', currentTime.toString());

        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          botcheck: ''
        })
        setErrors({})

        // Track form submission in Google Analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submission', {
            event_category: 'Contact',
            event_label: 'Contact Form Submitted',
          })
        }
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-heading font-bold text-slate-grey mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your outdoor space? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-forest-green to-slate-grey rounded-2xl p-8 text-white h-full">
              <h3 className="text-3xl font-heading font-bold mb-6">
                Contact Information
              </h3>
              <p className="text-gray-200 mb-8">
                We're here to answer your questions and discuss your landscaping needs.
                Reach out to us through any of the following methods.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-safety-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call or Text</h4>
                    <a
                      href="tel:253-212-6752"
                      className="text-gray-200 hover:text-white transition-colors"
                    >
                      (253) 212-6752
                    </a>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-safety-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Service Area</h4>
                    <p className="text-gray-200">
                      Tacoma, WA & surrounding areas
                    </p>
                    <p className="text-sm text-gray-300 mt-1">
                      30-mile radius from Tacoma
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-6 w-6 text-safety-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Follow Us</h4>
                    <a
                      href="https://www.instagram.com/greencollarlandscaping_?igsh=emtmZmg4OXdjcnJx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-white transition-colors"
                    >
                      @greencollarlandscaping_
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-3">Business Hours</h4>
                <div className="space-y-2 text-gray-200">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-heading font-bold text-slate-grey mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-grey mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-forest-green'
                    }`}
                    placeholder="John Doe"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-grey mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-forest-green'
                    }`}
                    placeholder="john@example.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-grey mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-forest-green'
                    }`}
                    placeholder="(253) 555-0123"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Service Interest */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-grey mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="paving">Paving & Patios</option>
                    <option value="fencing">Fencing Solutions</option>
                    <option value="walls">Retaining Walls</option>
                    <option value="turf">Synthetic Turf</option>
                    <option value="lawn-care">Lawn Care</option>
                    <option value="land-leveling">Land Leveling</option>
                    <option value="sod">Sod Replacement</option>
                    <option value="design">Outdoor Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-grey mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors resize-none ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-forest-green'
                    }`}
                    placeholder="Tell us about your project..."
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Honeypot Field - Hidden from humans, visible to bots */}
                <div
                  className="absolute left-0 top-0 overflow-hidden"
                  style={{
                    position: 'absolute',
                    left: '-5000px',
                    height: '0',
                    width: '0',
                    opacity: 0,
                    pointerEvents: 'none',
                    tabIndex: -1
                  }}
                  aria-hidden="true"
                >
                  <label htmlFor="botcheck">
                    Please leave this field blank
                  </label>
                  <input
                    type="text"
                    id="botcheck"
                    name="botcheck"
                    value={formData.botcheck}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                {/* Throttle Error Message */}
                {errors.throttle && (
                  <div
                    className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg"
                    role="alert"
                    aria-live="assertive"
                  >
                    ⏱️ {errors.throttle}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-safety-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div
                    className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg"
                    role="status"
                    aria-live="polite"
                  >
                    ✓ Thank you! We'll get back to you within 24 hours.
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                    role="alert"
                    aria-live="assertive"
                  >
                    ✗ Something went wrong. Please call us at (253) 212-6752 instead.
                  </div>
                )}
              </form>

              <p className="text-xs text-gray-500 mt-4">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
