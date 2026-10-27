// Legal copy for /privacy-policy, /terms-and-conditions and /cookies.
// Extracted verbatim from the original site's server-rendered pages.

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Renders the bullet list with the `legal-list--compact` class. */
  compactBullets?: boolean;
  subheading?: string;
  subBullets?: string[];
  table?: { columns: string[]; rows: string[][] };
};

export type LegalDocument = {
  title: string;
  updated?: string;
  intro?: string;
  sections: LegalSection[];
};

export const PRIVACY_POLICY: LegalDocument = {
  title: "Privacy Policy",
  intro: "Crackwits Creative Agency (\"we,\" \"our,\" or \"us\") is committed to protecting the privacy of visitors to our website and our clients worldwide. This Privacy Policy explains how we collect, use, and protect your personal information.",
  sections: [
    {
      heading: "1. Information We Collect",
      paragraphs: [
        "We may collect the following types of personal information:"
      ],
      bullets: [
        "Name",
        "Email Address",
        "Phone Number",
        "Business Name (if provided)",
        "Project Type"
      ],
      compactBullets: true,
      subheading: "We collect this information through:",
      subBullets: [
        "Contact forms on our website",
        "Online questionnaires submitted by clients"
      ]
    },
    {
      heading: "2. How We Use Your Information",
      paragraphs: [
        "We use the information collected for:"
      ],
      bullets: [
        "Providing services and preparing quotes based on client briefs",
        "Communicating with you regarding your inquiries or projects",
        "Marketing and promotional purposes (e.g., newsletters and special offers)"
      ]
    },
    {
      heading: "3. Third-Party Services",
      paragraphs: [
        "We may use third-party services, such as Google Analytics, to track user behavior and improve our website and services. These services may collect anonymized data about your interactions with our website."
      ]
    },
    {
      heading: "4. Data Retention",
      paragraphs: [
        "We retain personal data indefinitely unless you request its deletion (see Section 5 for more information on your rights)."
      ]
    },
    {
      heading: "5. User Rights",
      paragraphs: [
        "At this time, we do not have specific mechanisms to handle rights such as access, correction, deletion, or portability of data. If you have any concerns, please contact us at hello@crackwits.com."
      ]
    },
    {
      heading: "6. Cookies and Tracking",
      paragraphs: [
        "We may use cookies and similar technologies for:"
      ],
      bullets: [
        "Enhancing user experience",
        "Analytics and tracking user behavior",
        "Marketing purposes"
      ]
    },
    {
      heading: "You can control cookies through your browser settings."
    },
    {
      heading: "7. Compliance with International Regulations",
      paragraphs: [
        "We aim to comply with applicable data protection laws."
      ]
    },
    {
      heading: "8. Children's Data",
      paragraphs: [
        "Our services are intended for individuals 18 years and older. We do not knowingly collect or solicit personal information from children under 18. If we become aware that we have inadvertently collected such data, we will delete it."
      ]
    },
    {
      heading: "9. Security Measures",
      paragraphs: [
        "We are reviewing and planning to implement appropriate security measures to protect your data. At present, we recommend that you refrain from sharing sensitive information over unsecured channels."
      ]
    },
    {
      heading: "10. Update to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. Updates will be posted on this page, and we will notify users whose data we have collected via email."
      ]
    },
    {
      heading: "11. Contact us",
      paragraphs: [
        "If you have any questions or concerns about this Privacy Policy or your data, please contact us at hello@crackwits.com."
      ]
    }
  ]
};

export const TERMS_AND_CONDITIONS: LegalDocument = {
  title: "Terms & Conditions",
  intro: "Welcome to Crackwits Creative Agency! By accessing or using our website (\"Site\") or services, you agree to comply with and be bound by these Terms of Service (\"Terms\"). Please read them carefully. If you do not agree to these Terms, please do not use our Site or services.",
  sections: [
    {
      heading: "1. Definitions",
      paragraphs: [
        "We may collect the following types of personal information:"
      ],
      bullets: [
        "\"We,\" \"Our,\" or \"Us\": Refers to Crackwits Creative Agency.",
        "\"You\" or \"Client\": Refers to the individual or entity accessing our Site or using our services.",
        "\"Services\": Refers to the creative services, consultation, and related offerings provided by us."
      ]
    },
    {
      heading: "2. Scope of Services",
      bullets: [
        "We provide creative services, including but not limited to branding, design, content creation, marketing strategy, and project consulting.",
        "The details and deliverables of each project will be outlined in a separate agreement or proposal provided to you."
      ]
    },
    {
      heading: "3. Use of the Website",
      bullets: [
        "You agree to use the Site only for lawful purposes and in a manner that does not infringe on the rights of, restrict, or inhibit the use and enjoyment of the Site by others.",
        "You may not use the Site to:",
        "Upload or transmit harmful, defamatory, or offensive content.",
        "Engage in unauthorized access, data mining, or similar activities."
      ]
    },
    {
      heading: "4. User Responsibilities",
      bullets: [
        "You are responsible for ensuring that the information you provide is accurate, complete, and up-to-date.",
        "You must not use our Site or services for illegal or unauthorized purposes."
      ]
    },
    {
      heading: "5. Intellectual Property",
      bullets: [
        "All content on the Site, including text, graphics, logos, and images, is the property of Crackwits Creative Agency or its licensors and is protected by copyright, trademark, and other intellectual property laws.",
        "Deliverables created for clients will transfer ownership as per the terms agreed upon in the project proposal or contract."
      ]
    },
    {
      heading: "6. Payment Terms",
      bullets: [
        "Payment terms will be outlined in individual agreements or invoices provided for each project.",
        "Late payments may incur additional fees or result in project delays."
      ]
    },
    {
      heading: "7. Limitation of Liability",
      bullets: [
        "To the fullest extent permitted by law, we are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our Site or services.",
        "Our maximum liability to you for any claim arising from our services will be limited to the amount paid for those services."
      ]
    },
    {
      heading: "8. Confidentiality",
      bullets: [
        "Both parties agree to maintain the confidentiality of all proprietary information shared during the course of a project.",
        "This does not apply to information that is already public or independently developed."
      ]
    },
    {
      heading: "9. Termination",
      bullets: [
        "We reserve the right to terminate your access to the Site or services if you breach these Terms.",
        "Termination of services will be governed by the terms of your project agreement."
      ]
    },
    {
      heading: "10. Governing Law",
      bullets: [
        "These Terms are governed by the laws of the State of Kuwait, without regard to its conflict of laws principles.",
        "Any disputes arising under these Terms will be resolved exclusively in the courts of Kuwait."
      ]
    },
    {
      heading: "11. Modifications of the Terms",
      paragraphs: [
        "We may update these Terms from time to time. The latest version will be available on this page, and continued use of the Site or services signifies your acceptance of the updated Terms."
      ]
    },
    {
      heading: "12. Force Majeure",
      paragraphs: [
        "We shall not be held liable or responsible for any failure or delay in the performance of our obligations under these Terms or any project agreement due to events beyond our reasonable control, including but not limited to:"
      ],
      bullets: [
        "Natural disasters (e.g., earthquakes, floods, hurricanes)",
        "Acts of war, terrorism, or civil unrest",
        "Governmental actions or orders",
        "Labor strikes or shortages",
        "Pandemic or epidemic-related disruptions",
        "Power outages, internet failures, or other technical difficulties",
        "Any other events deemed to be \"acts of God\"",
        "In such cases, we will:",
        "Notify you as soon as reasonably possible of the nature and expected duration of the event.",
        "Make reasonable efforts to minimize the impact and resume normal operations promptly once the force majeure event is resolved.",
        "If a force majeure event persists for an extended period (e.g., more than 30 days), either party may terminate the affected project or agreement without further liability, except for the payment of services already rendered."
      ]
    },
    {
      heading: "13. Contact us",
      paragraphs: [
        "If you have any questions or concerns about these Terms, please contact us at hello@crackwits.com."
      ]
    }
  ]
};

export const COOKIES_POLICY: LegalDocument = {
  title: "Cookies",
  updated: "Last Updated: September 19, 2025",
  intro: "This Cookies Policy explains how Crackwits Creative Agency (\"we,\" \"our,\" or \"us\") uses cookies and similar technologies on our website (crackwits.com).",
  sections: [
    {
      heading: "What Are Cookies?",
      paragraphs: [
        "Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, making your next visit easier and more useful."
      ]
    },
    {
      heading: "How We Use Cookies",
      paragraphs: [
        "We use cookies to:"
      ],
      bullets: [
        "Ensure our website functions properly",
        "Analyze how visitors use our website",
        "Improve your browsing experience",
        "Remember your preferences"
      ]
    },
    {
      heading: "Types of Cookies We Use",
      paragraphs: [
        "1. Strictly Necessary Cookies",
        "These cookies are essential for our website to function properly. They cannot be disabled."
      ],
      table: {
        columns: [
          "Cookie Name",
          "Purpose",
          "Duration",
          "Provider"
        ],
        rows: [
          [
            "Session cookies",
            "Maintain your session and form submissions",
            "Session only",
            "Crackwits"
          ],
          [
            "Security cookies",
            "Prevent cross-site request forgery",
            "Session only",
            "Crackwits"
          ],
          [
            "Load balancer cookies",
            "Ensure proper website performance",
            "Session only",
            "[Hosting Provider]"
          ]
        ]
      }
    },
    {
      heading: "2. Analytics Cookies",
      paragraphs: [
        "These cookies help us understand how visitors interact with our website."
      ],
      table: {
        columns: [
          "Cookie Name",
          "Purpose",
          "Duration",
          "Provider"
        ],
        rows: [
          [
            "_ga",
            "Distinguishes unique users",
            "2 years",
            "Google Analytics"
          ],
          [
            "ga[ID]",
            "Stores session information",
            "2 years",
            "Google Analytics"
          ],
          [
            "_gid",
            "Distinguishes unique users",
            "24 hours",
            "Google Analytics"
          ],
          [
            "gat_gtag[ID]",
            "Throttles request rate",
            "1 minute",
            "Google Analytics"
          ]
        ]
      }
    },
    {
      heading: "What data is collected:",
      paragraphs: [
        "Important: All Google Analytics data is anonymized - we cannot identify individual users."
      ],
      bullets: [
        "Pages you visit",
        "Time spent on pages",
        "How you arrived at our website",
        "General location (country/city level)",
        "Device and browser information"
      ]
    },
    {
      heading: "3. Functional Cookies",
      paragraphs: [
        "These cookies enhance your experience by remembering your preferences."
      ],
      table: {
        columns: [
          "Cookie Name",
          "Purpose",
          "Duration",
          "Provider"
        ],
        rows: [
          [
            "Cookie preferences",
            "Remembers your cookie consent choices",
            "1 year",
            "Crackwits"
          ],
          [
            "Language preference",
            "Remembers your language selection",
            "30 days",
            "Crackwits"
          ],
          [
            "Form progress",
            "Saves progress on multi-step forms",
            "7 days",
            "Crackwits"
          ]
        ]
      }
    },
    {
      heading: "4. Marketing Cookies (Only with Your Consent)",
      paragraphs: [
        "We currently do not use marketing or advertising cookies. If we implement them in the future, we will:"
      ],
      bullets: [
        "Ask for your explicit consent",
        "Update this policy",
        "Provide clear opt-out options"
      ]
    },
    {
      heading: "Third-Party Cookies",
      paragraphs: [
        "Google Analytics",
        "We use Google Analytics to understand website usage. Google may use this data in accordance with their privacy policy. Learn more about Google Analytics privacy practices.",
        "Data Processing:",
        "Data is processed in the United States",
        "Google is certified under EU-US Data Privacy Framework",
        "Data retention is set to 26 months (Google Analytics default)"
      ]
    },
    {
      heading: "Managing Your Cookie Preferences",
      paragraphs: [
        "Browser Settings",
        "You can control cookies through your browser settings:",
        "Chrome:",
        "1. Click menu (three dots) → Settings",
        "2. Advanced → Privacy and security → Cookies and other site data",
        "3. Choose your preference",
        "Firefox:",
        "1. Click menu → Options → Privacy & Security",
        "2. Under Cookies and Site Data",
        "Safari:",
        "1. Safari menu → Preferences → Privacy",
        "2. Choose your cookie preferences",
        "Edge:",
        "1. Menu → Settings → Cookies and site permissions",
        "2. Manage and delete cookies and site data"
      ]
    },
    {
      heading: "Our Cookie Consent Tool",
      paragraphs: [
        "When you first visit our website, you'll see a cookie notice allowing you to:",
        "Accept all cookies",
        "Accept only necessary cookies",
        "Customize your preferences",
        "You can change your preferences anytime by:",
        "Clicking the \"Cookie Settings\" link in our website footer",
        "Clearing your browser cookies (will reset to default settings)"
      ]
    },
    {
      heading: "Impact of Disabling Cookies",
      paragraphs: [
        "If you disable necessary cookies:",
        "Website may not function properly",
        "Forms may not work correctly",
        "Security features may be compromised",
        "If you disable analytics cookies:",
        "No impact on website functionality",
        "We cannot improve user experience based on usage data",
        "Website performance insights are reduced",
        "If you disable functional cookies:",
        "Preferences won't be remembered",
        "Multi-step forms may reset",
        "Language settings won't persist"
      ]
    },
    {
      heading: "Cookie Consent for EU Visitors",
      paragraphs: [
        "In compliance with GDPR and EU Cookie Directive:",
        "You can withdraw consent at any time through your browser settings or our cookie preference center."
      ],
      bullets: [
        "Necessary cookies are used automatically (legitimate interest)",
        "Analytics cookies require your consent",
        "Functional cookies require your consent",
        "Marketing cookies are not currently used"
      ]
    },
    {
      heading: "Updates to This Policy",
      paragraphs: [
        "We may update this Cookies Policy periodically to reflect:",
        "Changes in our use of cookies",
        "New regulations or legal requirements",
        "Updates to third-party services",
        "When we make significant changes, we will:",
        "Update the \"Last Updated\" date",
        "Notify users through our website",
        "Request new consent if required by law"
      ]
    },
    {
      heading: "Data Retention",
      table: {
        columns: [
          "Cookie Type",
          "Retention Period",
          "Reason"
        ],
        rows: [
          [
            "Necessary cookies",
            "Session or as needed",
            "Technical functionality"
          ],
          [
            "Analytics cookies",
            "26 months",
            "Google Analytics default"
          ],
          [
            "Functional cookies",
            "30 days to 1 year",
            "User convenience"
          ],
          [
            "Consent records",
            "3 years",
            "Legal compliance requirement"
          ]
        ]
      }
    },
    {
      heading: "International Data Transfers",
      paragraphs: [
        "Some cookies involve data transfers outside the EU:",
        "Google Analytics: Data transferred to the US under adequate safeguards",
        "Hosting cookies: [Location depends on your hosting provider]",
        "All transfers comply with GDPR requirements and include appropriate safeguards."
      ]
    },
    {
      heading: "Your Rights",
      paragraphs: [
        "Under GDPR, you have the right to:"
      ],
      bullets: [
        "Access information about cookies we use",
        "Object to certain types of cookies",
        "Withdraw consent for non-necessary cookies",
        "Complain to your local data protection authority"
      ]
    },
    {
      heading: "Contact Us",
      paragraphs: [
        "For questions about our use of cookies:",
        "Email: hello@crackwits.com",
        "Subject line: \"Cookie Policy Inquiry\"",
        "For technical questions about managing cookies, please include your browser type and version."
      ]
    },
    {
      heading: "Related Policies",
      paragraphs: [
        "This Cookies Policy should be read alongside our:",
        "Privacy Policy",
        "Terms of Service",
        "This Cookies Policy is part of our comprehensive privacy framework designed to protect your personal data and comply with international privacy laws."
      ]
    }
  ]
};

