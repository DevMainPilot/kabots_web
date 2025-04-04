import { Lang, TranslationStructure } from '../types';

export const translations: Record<Lang, TranslationStructure> = {
    ca: {
      nav: {
        services: 'Serveis',
        about: 'Sobre nosaltres',
        maintenance: 'Manteniment',
        contact: 'Contacte'
      },
      hero: {
        title: 'Solucions IA i aplicacions mòbils personalitzades',
        subtitle: 'Transformem el teu negoci amb enginyeria de prompting avançada i aplicacions mòbils intel·ligents'
      },
      summary: {
        custom: {
          title: '100% Personalitzat',
          description: 'Solucions dissenyades específicament per a les necessitats úniques del teu negoci'
        },
        innovation: {
          title: 'Innovació Tecnològica',
          description: 'Desenvolupem aplicacions i models d\'IA d\'última generació'
        },
        roi: {
          title: 'ROI Garantit',
          description: 'El nostre enfocament assegura un retorn d\'inversió mesurable i ràpid'
        }
      },
      services: {
        title: 'Els nostres serveis',
        subtitle: 'Potència el teu negoci amb IA',
        prompting: {
          title: 'Enginyeria de Prompting Avançada',
          description: 'Optimitzem els vostres models d\'IA mitjançant una enginyeria de prompts especialitzada que millora el rendiment, redueix costos i ofereix resultats més precisos. Serveis exclusius per a empreses que ja utilitzen models d\'IA i volen maximitzar el seu rendiment.',
          benefits: [
            'Millora de la precisió en les respostes del model fins a un 40%',
            'Reducció significativa de costos operatius en computació i tokens',
            'Personalització completa al context específic del vostre sector',
            'Escalabilitat per adaptar-se al creixement del vostre negoci'
          ]
        },
        apps: {
          title: 'Aplicacions Mòbils Intel·ligents',
          subtitle: 'Aplicacions mòbils personalitzades per a autònoms i empreses de tots els sectors, amb la possibilitat d\'integrar xatbots intel·ligents',
          priceLabel: 'Desenvolupament complet',
          plans: {
            basic: {
              title: 'Bàsic',
              price: '1000 €',
              features: [
                'Fins a 2 funcionalitats principals',
                'Disseny personalitzat bàsic',
                'Compatible amb iOS o Android',
                'Integració amb 1 sistema existent',
                'Implementació en 2 setmanes'
              ],
              cta: 'Sol·licitar info'
            },
            professional: {
              title: 'Professional',
              price: '1500 €',
              features: [
                'Fins a 5 funcionalitats principals',
                'Disseny personalitzat avançat',
                'Compatible amb iOS i Android',
                'Integració amb 3 sistemes existents',
                'Xatbot bàsic inclòs',
                'Implementació en 4 setmanes'
              ],
              cta: 'Sol·licitar info'
            },
            enterprise: {
              title: 'Enterprise',
              price: 'Des de 2000 €',
              features: [
                'Funcionalitats il·limitades',
                'Disseny premium exclusiu',
                'Compatible amb totes les plataformes',
                'Integracions personalitzades',
                'Xatbot avançat amb IA personalitzada',
                'Implementació prioritària',
                'Formació a l\'equip inclosa'
              ],
              cta: 'Sol·licitar info'
            }
          }
        },
        maintenance: {
          title: 'Plans de Manteniment',
          description: 'Mantenim les teves aplicacions actualitzades, segures i funcionant de manera òptima amb els nostres plans de manteniment mensual',
          popular: 'Més popular',
          plans: {
            basic: {
              title: 'Manteniment Bàsic',
              price: '80€/mes',
              tagline: 'Essencial per a qualsevol aplicació',
              features: [
                'Actualitzacions de seguretat',
                'Compatibilitat amb noves versions d\'iOS/Android',
                'Suport tècnic 8h-14h (dies laborables)'
              ],
              cta: 'Sol·licitar info'
            },
            standard: {
              title: 'Manteniment Estàndard',
              price: '100€/mes',
              tagline: 'Ideal per a la majoria d\'aplicacions',
              popular: true,
              features: [
                'Tot el del pla Bàsic',
                'Actualitzacions de funcionalitats menors',
                'Monitorització del rendiment',
                'Suport tècnic 8h-18h (dies laborables)'
              ],
              cta: 'Sol·licitar info'
            },
            premium: {
              title: 'Manteniment Premium',
              price: '150€/mes',
              tagline: 'Per a aplicacions d\'alt valor',
              features: [
                'Tot el del pla Estàndard',
                'Actualitzacions prioritàries',
                'Millores contínues basades en feedback d\'usuaris',
                'Analítica avançada',
                'Suport tècnic 24/5 prioritari'
              ],
              cta: 'Sol·licitar info'
            }
          }
        }
      },
      testimonials: {
        title: 'Testimonis',
        subtitle: 'El que diuen els nostres clients',
        items: {
          first: {
            name: 'Joan Martí',
            role: 'Director de Tecnologia',
            company: 'TechCat',
            text: 'L\'enginyeria de prompting de Kabots ha millorat la precisió dels nostres models d\'IA en un 35% i ha reduït els costos operatius en més d\'un 40%. La seva experiència ha estat clau per optimitzar els nostres processos d\'IA.'
          },
          second: {
            name: 'Anna Riera',
            role: 'CEO',
            company: 'Innovació Digital SL',
            text: 'La nostra aplicació mòbil desenvolupada per Kabots ha revolucionat la manera en què interactuem amb els nostres clients. El xatbot integrat ha reduït les consultes rutinàries en un 70%, permetent al nostre equip centrar-se en tasques d\'alt valor afegit.'
          }
        }
      },
      ourStory: {
        title: 'La nostra Història',
        subtitle: 'Som més que una empresa de tecnologia',
        mission: {
          title: 'La nostra Missió',
          description: 'A Kabots, creiem en el poder dels petits. La tecnologia no hauria de ser un privilegi exclusiu de les grans corporacions. El nostre objectiu és anivellar el camp de joc, oferint a autònoms i petites empreses eines d\'intel·ligència artificial que els permetin competir en igualtat de condicions. Volem trencar el monopoli tecnològic i democratitzar l\'accés a solucions d\'avantguarda, perquè la innovació no té per què estar reservada només a qui té més recursos.'
        },
        founders: {
          title: 'Els Nostres Orígens',
          description: 'Som tres enginyers units per la passió per la tecnologia i el ferm compromís de donar poder als petits. Després de coincidir en diversos projectes, vam veure de primera mà com les grans corporacions acaparaven les millors eines tecnològiques. Kabots va néixer amb la missió de capgirar aquesta tendència: creiem que la innovació, la creativitat i el talent no depenen de la mida de l\'empresa, sinó de la passió i la determinació.'
        }
      },
      contact: {
        title: 'Contacta amb nosaltres',
        subtitle: 'Parlem del teu projecte',
        name: 'Nom',
        email: 'Email',
        company: 'Empresa',
        message: 'Missatge',
        placeholders: {
          name: 'Joan Puig',
          email: 'joan@empresa.cat',
          company: 'La Teva Empresa, S.L.',
          message: 'Explica\'ns el teu projecte o consulta...'
        },
        successMessage: 'El teu missatge s\'ha enviat correctament.',
        errorMessage: 'Hi ha hagut un error. Intenta-ho de nou més tard.',
        sectionTitle: 'Contacte',
        successMessageTitle: 'Gràcies! ',
        errorMessageTitle: 'Error: ',
        sendingMessage: 'Enviant...',
        validation: {
          shortName: 'El nom és massa curt',
          invalidEmail: 'Correu electrònic no vàlid',
          shortMessage: 'El missatge és massa curt',
          suspiciousContent: 'S\'han detectat continguts sospitosos'
        },
        info: {
          title: 'Parlem del teu projecte',
          description: 'Estem aquí per ajudar-te a transformar el teu negoci amb solucions d\'IA a mida i aplicacions mòbils innovadores. Contacta amb nosaltres i començarem a treballar junts.',
          phone: {
            label: 'Telèfon',
            value: '+34 93 643 96 04 - +34 676 62 53 82'
          },
          email: {
            label: 'Email',
            value: 'contacte@kabots.com'
          },
          location: {
            label: 'Ubicació',
            address: 'Carrer Francesc Layret, 15<br/>08750 Molins de Rei'
          }
        }
      },
      footer: {
        description: 'Solucions d\'intel·ligència artificial i aplicacions mòbils personalitzades per al teu negoci.',
        sections: {
          company: {
            title: 'Empresa',
            links: {
              about: 'Sobre nosaltres',
              services: 'Serveis',
              maintenance: 'Manteniment',
              blog: 'Blog'
            }
          },
          legal: {
            title: 'Legal',
            links: {
              privacy: 'Privacitat',
              cookies: 'Cookies',
              terms: 'Termes de servei'
            }
          },
          social: {
            title: 'Segueix-nos',
            newsletter: {
              title: 'Newsletter',
              placeholder: 'El teu email'
            }
          }
        },
        copyright: '© {year} Kabots. Tots els drets reservats.'
      },
      cta: {
        contact: 'Sol·licitar consultoria',
        start: 'Comença ara',
        send: 'Enviar missatge',
        subscribe: 'Subscriu-te'
      }
    },
    en: {
      nav: {
        services: 'Services',
        about: 'About us',
        maintenance: 'Maintenance',
        contact: 'Contact'
      },
      hero: {
        title: 'Custom AI Solutions & Mobile Applications',
        subtitle: 'Transform your business with advanced prompt engineering and intelligent mobile applications'
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
        apps: {
          title: 'Intelligent Mobile Applications',
          subtitle: 'Custom mobile applications for freelancers and businesses of all sectors, with the possibility of integrating intelligent chatbots',
          priceLabel: 'Complete development',
          plans: {
            basic: {
              title: 'Basic',
              price: '€1,000',
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
              price: '€1,500',
              features: [
                'Up to 5 main features',
                'Advanced custom design',
                'Compatible with iOS and Android',
                'Integration with 3 existing systems',
                'Basic chatbot included',
                'Implementation in 4 weeks'
              ],
              cta: 'Request info'
            },
            enterprise: {
              title: 'Enterprise',
              price: 'From €2,000',
              features: [
                'Unlimited features',
                'Exclusive premium design',
                'Compatible with all platforms',
                'Unlimited custom integrations',
                'Advanced chatbot with custom AI',
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
              price: '€80/month',
              tagline: 'Essential for any application',
              features: [
                'Security updates',
                'Compatibility with new iOS/Android versions',
                'Technical support 8am-2pm (business days)'
              ],
              cta: 'Request info'
            },
            standard: {
              title: 'Standard Maintenance',
              price: '€100/month',
              tagline: 'Ideal for most applications',
              popular: true,
              features: [
                'Everything in Basic plan',
                'Minor feature updates',
                'Performance monitoring',
                'Technical support 8am-6pm (business days)'
              ],
              cta: 'Request info'
            },
            premium: {
              title: 'Premium Maintenance',
              price: '€150/month',
              tagline: 'For high-value applications',
              features: [
                'Everything in Standard plan',
                'Priority updates',
                'Continuous improvements based on user feedback',
                'Advanced analytics',
                'Priority 24/5 technical support'
              ],
              cta: 'Request info'
            }
          }
        }
      },
      testimonials: {
        title: 'Testimonials',
        subtitle: 'What our clients say',
        items: {
          first: {
            name: 'Joan Martí',
            role: 'CTO',
            company: 'TechCat',
            text: 'Kabots\' prompt engineering has improved the accuracy of our AI models by 35% and reduced operational costs by more than 40%. Their expertise has been key to optimizing our AI processes.'
          },
          second: {
            name: 'Anna Riera',
            role: 'CEO',
            company: 'Innovació Digital SL',
            text: 'Our mobile application developed by Kabots has revolutionized the way we interact with our customers. The integrated chatbot has reduced routine inquiries by 70%, allowing our team to focus on high-value tasks.'
          }
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
        copyright: '© {year} Kabots. All rights reserved.'
      },
      cta: {
        contact: 'Request consultation',
        start: 'Get started',
        send: 'Send message',
        subscribe: 'Subscribe'
      }
    }
  };