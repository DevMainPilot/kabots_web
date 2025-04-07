import { TranslationStructure } from '../types';

const catalan: TranslationStructure = {
  nav: {
    services: 'Serveis',
    about: 'Sobre nosaltres',
    pricing: 'Preus',
    contact: 'Contacte'
  },
  hero: {
    title: 'Impulsa el teu negoci amb tecnologia d\'avantguarda',
    subtitle: 'Transformem el teu negoci amb aplicacions mòbils intel·ligents, xatbots i enginyeria de prompting avançada'
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
    mobile: {
      title: 'Aplicacions Mòbils Personalitzades',
      description: 'Dissenyem i desenvolupem aplicacions mòbils a mida que transformen la manera com el teu negoci es connecta amb els clients. Perfectes per a autònoms i PIMES que volen oferir una experiència digital d\'alta qualitat sense un gran pressupost.',
      benefits: [
        'Solucions a mida 100% adaptades a les necessitats del teu negoci',
        'Disseny intuïtiu i experiència d\'usuari excepcional',
        'Compatible amb tots els dispositius iOS i Android',
        'Temps de desenvolupament ràpid i preus assequibles',
        'Suport tècnic continuat i actualitzacions periòdiques'
      ]
    },
    chatbot: {
      title: 'Xatbots Intel·ligents',
      description: 'Revoluciona l\'atenció al client i automatitza processos amb els nostres xatbots potenciats per IA. Una solució especialment valuosa per a autònoms i PIMES que necessiten optimitzar recursos mentre ofereixen un servei excel·lent.',
      benefits: [
        'Atenció al client 24/7 sense incrementar costos de personal',
        'Personalització total en la comunicació amb cada client',
        'Integració amb plataformes existents (web, WhatsApp, Facebook)',
        'Capacitat d\'aprenentatge automàtic per millorar amb el temps',
        'Escalabilitat per gestionar centenars de converses simultànies'
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
            'Suport tècnic 8h-14h (dies laborables)',
            'Opció de xatbot bàsic: +30€/mes'
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
            'Suport tècnic 8h-18h (dies laborables)',
            'Opció de xatbot estàndard: +25€/mes'
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
            'Suport tècnic 24/5 prioritari',
            'Opció de xatbot avançat: +20€/mes'
          ],
          cta: 'Sol·licitar info'
        }
      }
    }
  },
  pricing: {
    title: 'Preus i Plans',
    subtitle: 'Solucions a mida per a qualsevol mida de negoci',
    chatbot: {
      priceLabel: 'Desenvolupament i implementació',
      plans: {
        basic: {
          title: 'Xatbot Bàsic',
          price: '500 €',
          tagline: 'Ideal per a petits negocis',
          features: [
            'Fins a 30 intents de conversa',
            'Respostes automatitzades pre-definides',
            'Integració amb la teva web',
            'Personalització bàsica de l\'aparença',
            'Suport per correu electrònic'
          ],
          cta: 'Sol·licitar info'
        },
        standard: {
          title: 'Xatbot Estàndard',
          price: '900 €',
          tagline: 'Recomanat per a la majoria d\'empreses',
          popular: true,
          features: [
            'Fins a 100 intents de conversa',
            'Integració amb WhatsApp i Messenger',
            'Anàlisi de sentiment bàsic',
            'Personalització completa',
            'Recollida de dades de contacte',
            'Suport prioritari'
          ],
          cta: 'Sol·licitar info'
        },
        premium: {
          title: 'Xatbot Intel·ligent',
          price: '1.800 €',
          tagline: 'Per a necessitats avançades',
          features: [
            'Intents de conversa il·limitats',
            'IA generativa avançada',
            'Integració amb CRM i altres sistemes',
            'Analítica avançada d\'usuaris',
            'Capacitat d\'aprenentatge continu',
            'Multiidioma automàtic',
            'Suport 24/5 i assessoria especialitzada'
          ],
          cta: 'Sol·licitar info'
        }
      }
    },
    maintenance: {
      priceLabel: 'Pagament mensual'
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
    copyright: '© {year} Kabots. Tots els drets reservats.',
    version: 'Versió'
  },
  cta: {
    contact: 'Sol·licitar consultoria',
    start: 'Comença ara',
    send: 'Enviar missatge',
    subscribe: 'Subscriu-te'
  }
};

export default catalan;