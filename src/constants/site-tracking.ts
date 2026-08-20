/** Site-wide tracking IDs / script URLs — mirrored from Gatsby gatsby-ssr.js + gatsby-browser.js */

export const SITE_URL = "https://www.virtualbuildingstudio.com";

export const GTM_ID = "GTM-TVXWKDW";
export const GOOGLE_ADS_ID = "AW-363031593";
export const GOOGLE_SITE_VERIFICATION = "tbtO49lCNlH_wfyv7mpW8_IWheVY1wj5JbCJjbLAET8";

export const CLARITY_PROJECT_ID = "iqssc5h6gf";

export const LINKEDIN_INSIGHT_PARTNER_ID = "706315";
export const LINKEDIN_INSIGHT_SCRIPT_SRC =
  "https://snap.licdn.com/li.lms-analytics/insight.min.js";
/** LinkedIn Insight conversion used on gated PDF / webinar CTAs (Gatsby landing pages). */
export const LINKEDIN_CONVERSION_ID = 24698708;

export const CANONICAL_HOST = "www.virtualbuildingstudio.com";

export const FACEBOOK_PIXEL_ID = "769456236059684";

export const LEADFEEDER_TRACKER_ID = "kn9Eq4R2PZb4RlvP";

export const MOUSEFLOW_PROJECT_ID = "07bc918b-4ec7-4843-805f-040c6ce6545f";

export const PAGESENSE_SCRIPT_SRC =
  "https://cdn.pagesense.io/js/virtualbuildingstudio917/dbbf2610a6154bf7b1c1bae1d88d70c2.js";

export const AHREFS_ANALYTICS_KEY = "rjT+4Ed0ylg5UQGVil16Kw";
export const AHREFS_ANALYTICS_SRC = "https://analytics.ahrefs.com/analytics.js";

export const ZOHO_SALESIQ_WIDGET_SRC =
  "https://salesiq.zohopublic.com/widget?wc=siq9904083ab8b91ef99df83f1634b2748ee6a0acc971d290f0cb1f2ebd3479d71634326a45d9244f39267072511021baa1";

export const GTM_HEAD_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

export const GOOGLE_ADS_GTAG_INLINE = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`;

export const ZOHO_SALESIQ_BOOTSTRAP = `window.$zoho=window.$zoho||{};
$zoho.salesiq=$zoho.salesiq||{ready:function(){}};
$zoho.salesiq.ready=function(){
  try{
    if($zoho.salesiq&&$zoho.salesiq.tracking&&typeof $zoho.salesiq.tracking.on==='function'){
      $zoho.salesiq.tracking.on();
    }
  }catch(e){}
};`;

export const MOUSEFLOW_SCRIPT = `window._mfq = window._mfq || [];
(function() {
  var mf = document.createElement("script");
  mf.type = "text/javascript"; mf.defer = true;
  mf.src = "//cdn.mouseflow.com/projects/${MOUSEFLOW_PROJECT_ID}.js";
  document.getElementsByTagName("head")[0].appendChild(mf);
})();`;

export const LEADFEEDER_SCRIPT = `(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('${LEADFEEDER_TRACKER_ID}');`;

export const FACEBOOK_PIXEL_SCRIPT = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FACEBOOK_PIXEL_ID}');
fbq('track', 'PageView');`;

export const CLARITY_SCRIPT = `window.clarity=window.clarity||function(){(window.clarity.q=window.clarity.q||[]).push(arguments);};
window.clarity("consentv2",{ad_storage:"granted",analytics_storage:"granted"});
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`;

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "virtualbuildingstudio",
  image: `${SITE_URL}/image/vbs-banner.gif`,
  "@id": `${SITE_URL}/`,
  url: `${SITE_URL}/`,
  telephone: "+1(409)800-6601",
  address: {
    "@type": "PostalAddress",
    streetAddress: "712 Wilcrest Drive 1097 Houston, TX 77042 United States",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77042",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.7561619,
    longitude: -95.576312,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "10:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "10:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "10:00", closes: "23:00" },
  ],
} as const;

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Virtual Building Studio",
  description:
    "Virtual Building Studio: Leading Texas-based BIM company. Hire top 1% architects and engineers in the USA within 3 days of onboarding time. Flexible staffing service with a 30-days money-back guarantee.",
  url: SITE_URL,
  sameAs: [
    "https://www.facebook.com",
    "https://twitter.com",
    "https://www.linkedin.com",
    "https://in.pinterest.com",
    "https://www.instagram.com",
    "https://www.youtube.com",
  ],
} as const;
