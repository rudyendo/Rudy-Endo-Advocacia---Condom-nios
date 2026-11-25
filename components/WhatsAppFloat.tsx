import React from 'react';
import { FLOATING_WHATSAPP_CONTENT, getWhatsAppUrl } from '../src/content';
import { trackWhatsAppClick } from '../src/tracking';

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={FLOATING_WHATSAPP_CONTENT.ariaLabel}
      onClick={() => trackWhatsAppClick('flutuante')}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-[#1A1A1A] text-white pl-3 pr-3 md:pr-5 py-2.5 shadow-2xl border border-white/15 hover:bg-[#912018] transition-colors"
    >
      <span className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 32 32"
          className="w-5 h-5 fill-[#052e16]"
          aria-hidden="true"
        >
          <path d="M16.01 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.47 1.71 6.41L3.1 28.9l6.66-1.75a12.74 12.74 0 0 0 6.25 1.63h.01c7.06 0 12.8-5.73 12.8-12.8 0-3.42-1.33-6.64-3.75-9.05A12.71 12.71 0 0 0 16.01 3.2zm7.45 18.18c-.31.88-1.82 1.68-2.52 1.78-.65.1-1.47.14-2.37-.15-.55-.18-1.26-.41-2.16-.8-3.8-1.64-6.28-5.47-6.47-5.72-.19-.26-1.55-2.06-1.55-3.93 0-1.87.98-2.79 1.33-3.17.35-.38.76-.48 1.01-.48.25 0 .51 0 .73.01.23.01.55-.09.86.66.31.76 1.07 2.62 1.16 2.81.1.19.16.41.03.67-.13.26-.19.41-.38.63-.19.22-.4.5-.57.67-.19.19-.39.4-.17.78.22.38.98 1.62 2.11 2.62 1.45 1.29 2.68 1.69 3.06 1.88.38.19.6.16.82-.1.22-.26.95-1.11 1.2-1.49.25-.38.51-.32.85-.19.35.13 2.21 1.04 2.59 1.23.38.19.63.28.72.44.1.16.1.92-.21 1.8z" />
        </svg>
      </span>
      <span className="hidden md:inline text-sm font-semibold whitespace-nowrap">
        {FLOATING_WHATSAPP_CONTENT.label}
      </span>
    </a>
  );
};
