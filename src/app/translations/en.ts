import { TranslationStructure } from '../types';

const english: TranslationStructure = {
  nav: {
    services: 'Services',
    about: 'About us',
    pricing: 'Prices',
    contact: 'Contact'
  },
  hero: {
    title: 'Boost your business with cutting-edge technology',
    subtitle: 'Transform your business with intelligent mobile applications, chatbots and advanced prompt engineering'
  },
  summary: {
    custom: {
      title: '100% Customized',
      description: 'Solutions specifically designed for your unique business needs'
    },
    innovation: {
      title: 'Technological Innovation',
      description: 'We develop cutting-edge applications and AI models'
    },
    roi: {
      title: 'Guaranteed ROI',
      description: 'Our approach ensures a measurable and quick return on investment'
    }
  },
  services: {
    title: 'Our Services',
    subtitle: 'Power your business with AI',
    automation: {
      title: "Automation",
      description: "Optimize your business processes with our intelligent automation solutions. We eliminate repetitive tasks, reduce errors, and improve operational efficiency with advanced AI and workflow technologies.",
      benefits: [
        "Time savings and operational cost reduction",
        "Integration with your existing applications and systems",
        "Automation of complex business processes",
        "Real-time analysis and performance reporting",
        "Scalability to grow with your business"
      ]
    },
    prompting: {
      title: 'Advanced Prompt Engineering',
      description: 'We optimize your AI models through specialized prompt engineering that improves performance, reduces costs, and delivers more accurate results. Exclusive services for companies already using AI models who want to maximize their performance.',
      benefits: [
        'Improves model response accuracy by up to 40%',
        'Significant reduction in operational costs for computing and tokens',
        'Complete customization to your industry\'s specific context',
        'Scalability to adapt to your business growth'
      ]
    },
    mobile: {
      title: 'Custom Mobile Applications',
      description: 'We design and develop custom mobile applications that transform how your business connects with customers. Perfect for freelancers and SMEs who want to offer a high-quality digital experience without a large budget.',
      benefits: [
        'Custom solutions 100% adapted to your business needs',
        'Intuitive design and exceptional user experience',
        'Compatible with all iOS and Android devices',
        'Fast development time and affordable pricing',
        'Ongoing technical support and regular updates'
      ]
    },
    chatbot: {
      title: 'Intelligent Chatbots',
      description: 'Revolutionize customer service and automate processes with our AI-powered chatbots. An especially valuable solution for freelancers and SMEs who need to optimize resources while offering excellent service.',
      benefits: [
        '24/7 customer service without increasing personnel costs',
        'Total personalization in communication with each customer',
        'Integration with existing platforms (web, WhatsApp, Facebook)',
        'Machine learning capability to improve over time',
        'Scalability to handle hundreds of simultaneous conversations'
      ]
    },
    apps: {
      title: 'Intelligent Mobile Applications',
      subtitle: 'Custom mobile applications for freelancers and businesses of all sectors, with the possibility of integrating intelligent chatbots',
      priceLabel: 'Complete development',
      plans: {
        basic: {
          title: 'Basic',
          price: 'Contact us!',
          features: [
            'Up to 2 main features',
            'Basic custom design',
            'Compatible with iOS or Android',
            'Integration with 1 existing system',
            'Implementation in 2 weeks'
          ],
          cta: 'Request info'
        },
        professional: {
          title: 'Professional',
          price: 'Contact us!',
          features: [
            'Up to 5 main features',
            'Advanced custom design',
            'Compatible with iOS and Android',
            'Integration with 3 existing systems',
            'Implementation in 4 weeks'
          ],
          cta: 'Request info'
        },
        enterprise: {
          title: 'Enterprise',
          price: 'Contact us!',
          features: [
            'Unlimited features',
            'Exclusive premium design',
            'Compatible with all platforms',
            'Unlimited custom integrations',
            'Priority implementation',
            'Team training included'
          ],
          cta: 'Request info'
        }
      }
    },
    maintenance: {
      title: 'Maintenance Plans',
      description: 'We keep your applications updated, secure, and running optimally with our monthly maintenance plans',
      popular: 'Most popular',
      plans: {
        basic: {
          title: 'Basic Maintenance',
          price: 'Contact us!',
          tagline: 'Essential for any application',
          features: [
            'Security updates',
            'Compatibility with new iOS/Android versions',
            'Technical support 8am-2pm (business days)',
            'Basic chatbot option: +€30/month'
          ],
          cta: 'Request info'
        },
        standard: {
          title: 'Standard Maintenance',
          price: 'Contact us!',
          tagline: 'Ideal for most applications',
          popular: true,
          features: [
            'Everything in Basic plan',
            'Minor feature updates',
            'Performance monitoring',
            'Technical support 8am-6pm (business days)',
            'Standard chatbot option: +€25/month'
          ],
          cta: 'Request info'
        },
        premium: {
          title: 'Premium Maintenance',
          price: 'Contact us!',
          tagline: 'For high-value applications',
          features: [
            'Everything in Standard plan',
            'Priority updates',
            'Continuous improvements based on user feedback',
            'Advanced analytics',
            'Priority 24/5 technical support',
            'Advanced chatbot option: +€20/month'
          ],
          cta: 'Request info'
        }
      }
    }
  },
  pricing: {
    title: 'Pricing & Plans',
    subtitle: 'Tailored solutions for businesses of all sizes',
    chatbot: {
      priceLabel: 'Development and implementation',
      plans: {
        basic: {
          title: 'Basic Chatbot',
          price: 'Contact us!',
          tagline: 'Perfect for small businesses',
          features: [
            'Up to 30 conversation intents',
            'Pre-defined automated responses',
            'Website integration',
            'Basic appearance customization',
            'Email support'
          ],
          cta: 'Request info'
        },
        standard: {
          title: 'Standard Chatbot',
          price: 'Contact us!',
          tagline: 'Recommended for most businesses',
          popular: true,
          features: [
            'Up to 100 conversation intents',
            'WhatsApp and Messenger integration',
            'Basic sentiment analysis',
            'Complete customization',
            'Contact information gathering',
            'Priority support'
          ],
          cta: 'Request info'
        },
        premium: {
          title: 'Intelligent Chatbot',
          price: 'Contact us!',
          tagline: 'For advanced requirements',
          features: [
            'Unlimited conversation intents',
            'Advanced generative AI',
            'CRM and other systems integration',
            'Advanced user analytics',
            'Continuous learning capability',
            'Automatic multilingual support',
            '24/5 support and specialized consultancy'
          ],
          cta: 'Request info'
        }
      }
    },
    maintenance: {
      priceLabel: 'Monthly payment'
    }
  },
  ourStory: {
    title: 'Our Story',
    subtitle: 'We are more than a technology company',
    mission: {
      title: 'Our Mission',
      description: 'At Kabots, we believe in the power of the small. Technology should not be an exclusive privilege of large corporations. Our goal is to level the playing field, offering freelancers and small businesses artificial intelligence tools that allow them to compete on equal terms. We want to break the technological monopoly and democratize access to cutting-edge solutions, because innovation doesn\'t have to be reserved only for those with the most resources.'
    },
    founders: {
      title: 'Our Origins',
      description: 'We are three engineers united by our passion for technology and a firm commitment to empowering the small. After coinciding on various projects, we saw firsthand how large corporations monopolized the best technological tools. Kabots was born with the mission of turning this trend around: we believe that innovation, creativity, and talent do not depend on the size of the company, but on passion and determination.'
    }
  },
  contact: {
    title: 'Contact us',
    subtitle: 'Let\'s talk about your project',
    name: 'Name',
    email: 'Email',
    company: 'Company',
    message: 'Message',
    placeholders: {
      name: 'John Smith',
      email: 'john@company.com',
      company: 'Your Company, Ltd.',
      message: 'Tell us about your project or inquiry...'
    },
    successMessage: 'Your message was sent successfully.',
    errorMessage: 'There was an error. Try again later.',
    sectionTitle: 'Contact',
    successMessageTitle: 'Thanks!  ',
    errorMessageTitle: 'Error: ',
    sendingMessage: 'Sending...',
    validation: {
      shortName: 'Name is too short',
      invalidEmail: 'Invalid email address',
      shortMessage: 'Message is too short',
      suspiciousContent: 'Suspicious content detected'
    },
    info: {
      title: 'Let\'s talk about your project',
      description: 'We\'re here to help you transform your business with custom AI solutions and innovative mobile applications. Contact us and we\'ll start working together.',
      phone: {
        label: 'Phone',
        value: '+34 93 643 96 04 - +34 676 62 53 82'
      },
      email: {
        label: 'Email',
        value: 'contacte@kabots.com'
      },
      location: {
        label: 'Location',
        address: 'Carrer Francesc Layret, 15<br/>08750 Molins de Rei'
      }
    }
  },
  footer: {
    description: 'Artificial intelligence solutions and custom mobile applications for your business.',
    sections: {
      company: {
        title: 'Company',
        links: {
          about: 'About us',
          services: 'Services',
          maintenance: 'Maintenance',
          blog: 'Blog'
        }
      },
      legal: {
        title: 'Legal',
        links: {
          privacy: 'Privacy',
          cookies: 'Cookies',
          terms: 'Terms of Service'
        }
      },
      social: {
        title: 'Follow us',
        newsletter: {
          title: 'Newsletter',
          placeholder: 'Your email'
        }
      }
    },
    copyright: '© {year} Kabots. All rights reserved.',
    version: 'Version'
  },
  cta: {
    contact: 'Request consultation',
    start: 'Get started',
    send: 'Send message',
    subscribe: 'Subscribe'
  }
};

export default english;