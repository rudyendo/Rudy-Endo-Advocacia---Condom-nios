import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { PRIVACY_POLICY_CONTENT } from '../src/content';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white text-slate-900 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-5">
          <h2
            id="privacy-modal-title"
            className="text-2xl font-bold text-slate-900"
          >
            {PRIVACY_POLICY_CONTENT.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar Política de Privacidade"
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
          {PRIVACY_POLICY_CONTENT.text}
        </p>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 min-h-[42px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors text-sm"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
