declare global {
  interface Window {
    grecaptcha?: unknown;
    zfutm_zfLead?: {
      zfutm_ini?: () => void;
      zfutm_iframeSprt?: () => void;
      zfutm_DHtmlSprt?: () => void;
    };
  }
}

export {};
