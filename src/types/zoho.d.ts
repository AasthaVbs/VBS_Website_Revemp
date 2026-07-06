declare global {
  interface Window {
    grecaptcha?: unknown;
    Bookings?: {
      linkModal: (options: { url: string }) => (event?: unknown) => void;
    };
    zfutm_zfLead?: {
      zfutm_ini?: () => void;
      zfutm_iframeSprt?: () => void;
      zfutm_DHtmlSprt?: () => void;
    };
  }
}

export {};
