declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: (...args: unknown[]) => void;
    };
    _fbq?: Window["fbq"];
    clarity?: ((...args: unknown[]) => void) & {
      q?: unknown[];
    };
    lintrk?: ((action: string, payload?: { conversion_id: number }) => void) & {
      q?: Array<[string, { conversion_id: number } | undefined]>;
    };
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    ldfdr?: ((...args: unknown[]) => void) & {
      _q?: unknown[];
    };
    _mfq?: unknown[];
    $zoho?: {
      salesiq?: {
        ready?: () => void;
        tracking?: {
          on?: () => void;
        };
      };
    };
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
  }
}

export {};
