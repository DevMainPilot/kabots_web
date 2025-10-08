// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://kabots.com'),
  title: 'Kabots - Solucions IA i Aplicacions',
  description: 'Transformem el teu negoci amb enginyeria de prompting avançada i aplicacions mòbils intel·ligents',
  openGraph: {
    title: 'Kabots - Solucions IA i Aplicacions',
    description: 'Transformem el teu negoci amb enginyeria de prompting avançada i aplicacions mòbils intel·ligents',
    images: [
      {
        url: 'https://kabots.com/good_robot.png',
        width: 1200,
        height: 630,
        alt: 'Kabots - Robot',
      },
    ],
    locale: 'ca_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca" className="scroll-smooth">
      <body className={inter.className}>
        {children}

  {/* Server-rendered hidden anchor to ensure MailerLite binds to an ml-onclick-form element on load */}
  <div dangerouslySetInnerHTML={{ __html: '<a id="ml-hidden-link" class="ml-onclick-form" href="javascript:void(0)" onclick="ml(\'show\', \'nuR68M\', true)" style="display:none"></a>' }} />

  {/* MailerLite universal script (loaded before interactive to expose `ml`) */}
        <Script id="mailerlite" strategy="beforeInteractive">
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '1834104');
          `}
        </Script>

  {/* Chatbase embed (unchanged) */}
        <Script
          id="chatbase-embed"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                  window.chatbase=(...arguments)=>{
                    if(!window.chatbase.q){window.chatbase.q=[]}
                    window.chatbase.q.push(arguments)
                  };
                  window.chatbase=new Proxy(window.chatbase,{
                    get(target,prop){
                      if(prop==="q"){return target.q}
                      return(...args)=>target(prop,...args)
                    }
                  })
                }
                const onLoad=function(){
                  const script=document.createElement("script");
                  script.src="https://www.chatbase.co/embed.min.js";
                  script.id="t4ASGIZq_1mzR-XLJ_yf3";
                  script.domain="www.chatbase.co";
                  document.body.appendChild(script)
                };
                if(document.readyState==="complete"){onLoad()}
                else{window.addEventListener("load",onLoad)}
              })();
            `,
          }}
        />
        {/* Auto-show MailerLite popup once per session (only runs on client) */}
        <Script id="mailerlite-autoshow" strategy="afterInteractive">
          {`
            (function(){
              try {
                // only show once per session
                if (typeof window !== 'undefined' && !sessionStorage.getItem('kabots_ml_shown')) {
                  // small delay to allow MailerLite to initialize and bind
                  setTimeout(function(){
                    if (window.ml) {
                      try { ml('show', 'nuR68M', true); sessionStorage.setItem('kabots_ml_shown', '1'); } catch(e) { /* ignore */ }
                    }
                  }, 800);
                }
              } catch(e) { }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
