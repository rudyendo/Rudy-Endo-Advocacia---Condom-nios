import { SITE_CONFIG } from './content';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

let trackingInitialized = false;

export function initTracking(): void {
  if (trackingInitialized || typeof window === 'undefined') return;
  trackingInitialized = true;

  const { GA4_ID, GTM_ID, META_PIXEL_ID } = SITE_CONFIG.TRACKING;

  if (GTM_ID) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
    document.head.appendChild(script);
  }

  if (GA4_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args as unknown as Record<string, unknown>);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`;
    document.head.appendChild(script);
  }

  if (META_PIXEL_ID) {
    if (!window.fbq) {
      const fbqFn = function (...args: unknown[]) {
        (fbqFn as unknown as { queue: unknown[] }).queue.push(args);
      } as unknown as ((...args: unknown[]) => void) & {
        queue: unknown[];
        push: (...args: unknown[]) => void;
        loaded: boolean;
        version: string;
      };
      fbqFn.queue = [];
      fbqFn.push = fbqFn;
      fbqFn.loaded = true;
      fbqFn.version = '2.0';
      window.fbq = fbqFn;
      window._fbq = fbqFn;

      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
    }
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
}

export function trackWhatsAppClick(position: string): void {
  if (typeof window === 'undefined') return;
  if (window.gtag) {
    window.gtag('event', 'click_whatsapp', { position });
  }
  if (window.dataLayer) {
    window.dataLayer.push({ event: 'click_whatsapp', position });
  }
  if (window.fbq) {
    window.fbq('track', 'Contact', { content_name: position });
  }
}

export function trackGenerateLead(): void {
  if (typeof window === 'undefined') return;
  if (window.gtag) {
    window.gtag('event', 'generate_lead', { form_origin: 'contato' });
  }
  if (window.dataLayer) {
    window.dataLayer.push({ event: 'generate_lead', form_origin: 'contato' });
  }
  if (window.fbq) {
    window.fbq('track', 'Lead', { content_name: 'contato' });
  }
}

export function trackEbookDownload(): void {
  if (typeof window === 'undefined') return;
  if (window.gtag) {
    window.gtag('event', 'ebook_download', { form_origin: 'ebook' });
  }
  if (window.dataLayer) {
    window.dataLayer.push({ event: 'ebook_download', form_origin: 'ebook' });
  }
  if (window.fbq) {
    window.fbq('track', 'Lead', { content_name: 'ebook' });
  }
}

export interface UtmParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
}

const UTM_STORAGE_KEY = 'rudy_endo_utms';

export function getUtmParams(): UtmParams {
  if (typeof window === 'undefined') {
    return { utm_source: '', utm_medium: '', utm_campaign: '' };
  }

  const params = new URLSearchParams(window.location.search);
  const fromUrl: UtmParams = {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
  };

  if (fromUrl.utm_source || fromUrl.utm_medium || fromUrl.utm_campaign) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
    } catch {
      // ignore storage errors
    }
    return fromUrl;
  }

  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as UtmParams;
    }
  } catch {
    // ignore storage errors
  }

  return { utm_source: '', utm_medium: '', utm_campaign: '' };
}

export function formatWhatsAppMask(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function isValidWhatsApp(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 11;
}

export async function submitLeadForm(
  payload: Record<string, string | boolean>
): Promise<void> {
  const endpoint = SITE_CONFIG.FORM_ENDPOINT.trim();
  if (!endpoint) {
    throw new Error('ENDPOINT_NOT_CONFIGURED');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`HTTP_${response.status}`);
  }
}
