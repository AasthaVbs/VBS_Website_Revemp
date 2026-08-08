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
    /** Zoho WebForm analytics (capacity calculator MOFU form). */
    _wfa_track?: {
      wfa_submit?: (event: Event | unknown) => void;
    };
    /** LinkedIn Insight Tag */
    lintrk?: ((action: string, payload?: { conversion_id: number }) => void) & {
      q?: Array<[string, { conversion_id: number } | undefined]>;
    };
  }
}

export {};
