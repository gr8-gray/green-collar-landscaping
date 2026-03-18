import React from 'react';
import { Shield, Lock, Eye, FileText, Mail, Cookie, X } from 'lucide-react';

const PrivacyPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto" onClick={onClose}>
      <div
        className="min-h-screen px-4 py-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            aria-label="Close privacy policy"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          <section className="py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="w-16 h-16 text-forest-green" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-grey mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: December 12, 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            At Green Collar Landscaping LLC, we are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
            visit our website <strong>gcl-wa.com</strong> and use our contact form services.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            By using our website, you agree to the collection and use of information in accordance with this policy.
            If you do not agree with our policies and practices, please do not use our website.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-forest-green mr-3" />
            <h2 className="text-2xl font-heading font-bold text-slate-grey">
              1. Information We Collect
            </h2>
          </div>

          <div className="ml-9">
            <h3 className="text-xl font-semibold text-slate-grey mb-3">Personal Information You Provide</h3>
            <p className="text-gray-700 mb-3">
              When you use our contact form, we collect the following personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Name:</strong> To address you properly in our responses</li>
              <li><strong>Email Address:</strong> To send you service quotes and respond to inquiries</li>
              <li><strong>Phone Number:</strong> To contact you regarding your landscaping project</li>
              <li><strong>Service Type:</strong> To understand your project needs</li>
              <li><strong>Message:</strong> To provide context about your landscaping requirements</li>
            </ul>
            <p className="text-gray-700 text-sm italic">
              All information submitted through our contact form is processed through Web3Forms,
              a third-party email service provider. For more information, see their{' '}
              <a
                href="https://web3forms.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-green hover:underline"
              >
                Privacy Policy
              </a>.
            </p>
          </div>
        </div>

        {/* Google Analytics Section */}
        <div className="mb-10 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <div className="flex items-center mb-4">
            <Eye className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-heading font-bold text-slate-grey">
              2. Google Analytics & Cookies
            </h2>
          </div>

          <div className="ml-9">
            <h3 className="text-xl font-semibold text-slate-grey mb-3">Automated Data Collection</h3>
            <p className="text-gray-700 mb-4">
              We use <strong>Google Analytics 4</strong>, a web analytics service provided by Google LLC,
              to help us understand how visitors use our website. Google Analytics uses cookies and similar
              technologies to collect and analyze information about your use of our website.
            </p>

            <h3 className="text-xl font-semibold text-slate-grey mb-3">What Google Analytics Collects</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, navigation paths</li>
              <li><strong>Device Information:</strong> Browser type, operating system, device type (mobile/desktop)</li>
              <li><strong>Location Data:</strong> Approximate geographic location (city/region level) based on IP address</li>
              <li><strong>Interaction Data:</strong> Button clicks, form interactions, scroll depth, outbound link clicks</li>
              <li><strong>Traffic Source:</strong> How you found our website (search engines, direct visits, referrals)</li>
              <li><strong>IP Address:</strong> Anonymized IP addresses for geographic and security analysis</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-grey mb-3">Custom Events We Track</h3>
            <p className="text-gray-700 mb-2">Our website specifically tracks these interactions:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Phone Number Clicks:</strong> When you click our phone number to call us</li>
              <li><strong>Calculator Views:</strong> When you view our pricing calculator tool</li>
              <li><strong>Contact Form Submissions:</strong> When you submit the contact form (not the content, just that it was submitted)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-grey mb-3">Cookies Used by Google Analytics</h3>
            <p className="text-gray-700 mb-3">
              Google Analytics sets the following cookies on your device:
            </p>
            <div className="bg-white rounded p-4 mb-4">
              <table className="w-full text-sm text-gray-700">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4">Cookie Name</th>
                    <th className="text-left py-2 pr-4">Purpose</th>
                    <th className="text-left py-2">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 pr-4 font-mono">_ga</td>
                    <td className="py-2 pr-4">Distinguishes unique users</td>
                    <td className="py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono">_ga_&lt;container-id&gt;</td>
                    <td className="py-2 pr-4">Persists session state</td>
                    <td className="py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono">_gid</td>
                    <td className="py-2 pr-4">Distinguishes users</td>
                    <td className="py-2">24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-slate-grey mb-3">Google's Use of Data</h3>
            <p className="text-gray-700 mb-4">
              Google Analytics collects and processes data on our behalf to provide us with reports about
              website traffic and usage patterns. Google may also use this data in accordance with their own
              privacy policy. For more information about how Google uses data from sites that use their services,
              visit:{' '}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-green hover:underline break-all"
              >
                https://policies.google.com/technologies/partner-sites
              </a>
            </p>

            <h3 className="text-xl font-semibold text-slate-grey mb-3">How to Opt-Out of Google Analytics</h3>
            <p className="text-gray-700 mb-2">You can opt-out of Google Analytics tracking in several ways:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Browser Add-on:</strong> Install the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-green hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </li>
              <li><strong>Browser Settings:</strong> Disable cookies in your browser settings</li>
              <li><strong>Do Not Track:</strong> Enable "Do Not Track" signals in your browser (we respect these signals)</li>
              <li><strong>Private Browsing:</strong> Use incognito/private browsing mode</li>
            </ul>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <Mail className="w-6 h-6 text-forest-green mr-3" />
            <h2 className="text-2xl font-heading font-bold text-slate-grey">
              3. How We Use Your Information
            </h2>
          </div>

          <div className="ml-9">
            <p className="text-gray-700 mb-3">We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Service Delivery:</strong> To respond to your inquiries and provide landscaping quotes</li>
              <li><strong>Communication:</strong> To contact you about your project and schedule consultations</li>
              <li><strong>Website Analytics:</strong> To understand how visitors use our site and improve user experience</li>
              <li><strong>Marketing:</strong> To measure the effectiveness of our marketing efforts</li>
              <li><strong>Business Operations:</strong> To maintain records of customer inquiries and project requests</li>
            </ul>
          </div>
        </div>

        {/* Data Sharing */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <Lock className="w-6 h-6 text-forest-green mr-3" />
            <h2 className="text-2xl font-heading font-bold text-slate-grey">
              4. How We Share Your Information
            </h2>
          </div>

          <div className="ml-9">
            <p className="text-gray-700 mb-3">
              We do not sell, rent, or trade your personal information to third parties. We may share your
              information only in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Service Providers:</strong> With Web3Forms (email delivery) and Google Analytics (website analytics)
                to help us operate our business
              </li>
              <li>
                <strong>Legal Compliance:</strong> When required by law, court order, or government regulation
              </li>
              <li>
                <strong>Business Protection:</strong> To protect our rights, property, or safety, or that of our customers
              </li>
            </ul>
          </div>
        </div>

        {/* Data Security */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-forest-green mr-3" />
            <h2 className="text-2xl font-heading font-bold text-slate-grey">
              5. Data Security
            </h2>
          </div>

          <div className="ml-9">
            <p className="text-gray-700 mb-3">
              We implement reasonable security measures to protect your personal information from unauthorized
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet
              or electronic storage is 100% secure. While we strive to protect your personal information, we cannot
              guarantee its absolute security.
            </p>
            <p className="text-gray-700">
              Our website uses HTTPS encryption to secure data transmitted between your browser and our servers.
            </p>
          </div>
        </div>

        {/* Data Retention */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <Cookie className="w-6 h-6 text-forest-green mr-3" />
            <h2 className="text-2xl font-heading font-bold text-slate-grey">
              6. Data Retention
            </h2>
          </div>

          <div className="ml-9">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Contact Form Data:</strong> We retain your contact information for up to 2 years or until
                you request deletion
              </li>
              <li>
                <strong>Google Analytics Data:</strong> Automatically deleted after 14 months (as per our Google Analytics settings)
              </li>
              <li>
                <strong>Cookies:</strong> Analytics cookies expire after 24 hours to 2 years (see table above)
              </li>
            </ul>
          </div>
        </div>

        {/* Your Rights */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-forest-green mr-3" />
            <h2 className="text-2xl font-heading font-bold text-slate-grey">
              7. Your Privacy Rights
            </h2>
          </div>

          <div className="ml-9">
            <p className="text-gray-700 mb-3">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Opt-out of marketing communications or analytics tracking</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
            </ul>
            <p className="text-gray-700">
              To exercise any of these rights, please contact us at{' '}
              <a href="tel:+12532126752" className="text-forest-green hover:underline">
                (253) 212-6752
              </a>{' '}
              or via our contact form.
            </p>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-forest-green mr-3" />
            <h2 className="text-2xl font-heading font-bold text-slate-grey">
              8. Children's Privacy
            </h2>
          </div>

          <div className="ml-9">
            <p className="text-gray-700">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal
              information from children under 13. If we become aware that we have collected personal information
              from a child under 13, we will take steps to delete that information promptly.
            </p>
          </div>
        </div>

        {/* Third-Party Links */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <Eye className="w-6 h-6 text-forest-green mr-3" />
            <h2 className="text-2xl font-heading font-bold text-slate-grey">
              9. Third-Party Links
            </h2>
          </div>

          <div className="ml-9">
            <p className="text-gray-700">
              Our website may contain links to third-party websites (such as Instagram). We are not responsible
              for the privacy practices of these external sites. We encourage you to review the privacy policies
              of any third-party sites you visit.
            </p>
          </div>
        </div>

        {/* Changes to Privacy Policy */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-forest-green mr-3" />
            <h2 className="text-2xl font-heading font-bold text-slate-grey">
              10. Changes to This Privacy Policy
            </h2>
          </div>

          <div className="ml-9">
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with
              an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-10 bg-forest-green/5 border-l-4 border-forest-green p-6 rounded-r-lg">
          <div className="flex items-center mb-4">
            <Mail className="w-6 h-6 text-forest-green mr-3" />
            <h2 className="text-2xl font-heading font-bold text-slate-grey">
              11. Contact Us
            </h2>
          </div>

          <div className="ml-9">
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us:
            </p>
            <div className="text-gray-700">
              <p className="font-semibold text-slate-grey">Green Collar Landscaping LLC</p>
              <p>Tacoma, Washington</p>
              <p className="mt-2">
                Phone:{' '}
                <a href="tel:+12532126752" className="text-forest-green hover:underline font-semibold">
                  (253) 212-6752
                </a>
              </p>
              <p className="mt-1">
                Instagram:{' '}
                <a
                  href="https://www.instagram.com/greencollarlandscaping_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-green hover:underline"
                >
                  @greencollarlandscaping_
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Consent */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-gray-700">
            By using our website and submitting information through our contact form, you acknowledge that you have
            read and understood this Privacy Policy and consent to the collection, use, and disclosure of your
            information as described herein.
          </p>
        </div>
      </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
