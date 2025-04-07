export type Lang = 'ca' | 'en';


// Sistema de traduccions millorat amb tipat segur
export type TranslationStructure = {
    [key: string]: any;
    nav: {
      services: string;
      about: string;
      pricing: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
    };
    summary: {
      custom: {
        title: string;
        description: string;
      };
      innovation: {
        title: string;
        description: string;
      };
      roi: {
        title: string;
        description: string;
      };
    };
    services: {
      title: string;
      subtitle: string;
      prompting: {
        title: string;
        description: string;
        benefits: string[];
      };
      mobile: {
        title: string;
        description: string;
        benefits: string[];
      };
      chatbot: {
        title: string;
        description: string;
        benefits: string[];
      };
      
      apps: {
        title: string;
        subtitle: string;
        priceLabel: string;
        plans: {
          [key: string]: {
            title: string;
            price: string;
            features: string[];
            cta: string;
          };
        };
      };
      maintenance: {
        title: string;
        description: string;
        popular: string;
        plans: {
          [key: string]: {
            title: string;
            price: string;
            tagline: string;
            popular?: boolean;
            features: string[];
            cta: string;
          };
        };
      };
    };
    pricing: {
      title: string;
      subtitle: string;
      chatbot: {
        priceLabel: string;
        plans: {
          [key: string]: {
            title: string;
            price: string;
            tagline: string;
            popular?: boolean;
            features: string[];
            cta: string;
          };
        };
      };
      maintenance: {
        priceLabel: string;
      };
    }    
    ourStory: {
      title: string;
      subtitle: string;
      mission: {
        title: string;
        description: string;
      };
      founders: {
        title: string;
        description: string;
      };
    };
    contact: {
      title: string;
      subtitle: string;
      name: string;
      email: string;
      company: string;
      message: string;
      placeholders: {
        name: string;
        email: string;
        company: string;
        message: string;
      };
      successMessage: string;
      errorMessage: string;
      sectionTitle: string;
      successMessageTitle: string;
      errorMessageTitle: string;
      sendingMessage: string;
      validation: {
        shortName: string;
        invalidEmail: string;
        shortMessage: string;
        suspiciousContent: string;
      };
      info: {
        title: string;
        description: string;
        phone: {
          label: string;
          value: string;
        };
        email: {
          label: string;
          value: string;
        };
        location: {
          label: string;
          address: string;
        };
      };
    };
    footer: {
      description: string;
      sections: {
        company: {
          title: string;
          links: {
            about: string;
            services: string;
            maintenance: string;
            blog: string;
          };
        };
        legal: {
          title: string;
          links: {
            privacy: string;
            cookies: string;
            terms: string;
          };
        };
        social: {
          title: string;
          newsletter: {
            title: string;
            placeholder: string;
          };
        };
      };
      copyright: string;
      version: string;
    };
    cta: {
      contact: string;
      start: string;
      send: string;
      subscribe: string;
    };
  };