import React, { useState } from 'react';
import { BookOpen, CheckCircle, Download, Lock, AlertCircle, ArrowRight } from 'lucide-react';
import { EBOOK_CONTENT, SITE_CONFIG, getWhatsAppUrl } from '../src/content';
import {
  formatWhatsAppMask,
  getUtmParams,
  isValidWhatsApp,
  submitLeadForm,
  trackEbookDownload,
  trackWhatsAppClick,
} from '../src/tracking';

interface LeadMagnetProps {
  onOpenPrivacy: () => void;
}

export const LeadMagnet: React.FC<LeadMagnetProps> = ({ onOpenPrivacy }) => {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [perfil, setPerfil] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isConverted, setIsConverted] = useState(false);

  const utms = getUtmParams();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    if (honeypot) {
      return;
    }

    if (!nome.trim() || !whatsapp.trim() || !email.trim() || !perfil) {
      setErrorMsg('Preencha todos os campos obrigatórios.');
      return;
    }

    if (!isValidWhatsApp(whatsapp)) {
      setErrorMsg('Informe um número de WhatsApp válido com DDD.');
      return;
    }

    if (!consent) {
      setErrorMsg('É necessário concordar com a Política de Privacidade para receber o guia.');
      return;
    }

    setLoading(true);
    try {
      await submitLeadForm({
        origem: 'ebook',
        nome: nome.trim(),
        whatsapp: whatsapp.trim(),
        email: email.trim(),
        perfil,
        lgpd_consent: true,
        utm_source: utms.utm_source,
        utm_medium: utms.utm_medium,
        utm_campaign: utms.utm_campaign,
      });
      trackEbookDownload();
      setIsConverted(true);
    } catch (err) {
      if (err instanceof Error && err.message === 'ENDPOINT_NOT_CONFIGURED') {
        setErrorMsg(
          'O envio automático do formulário ainda está em configuração. Enquanto isso, solicite o guia diretamente pelo WhatsApp.'
        );
      } else {
        setErrorMsg(
          'Não foi possível concluir o envio agora. Tente novamente em instantes ou fale conosco pelo WhatsApp.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ebook" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-1/2 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#e06c65] mb-5">
                <BookOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{EBOOK_CONTENT.badge}</span>
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight text-balance">
                {EBOOK_CONTENT.title}
              </h2>

              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                {EBOOK_CONTENT.description}
              </p>

              <p className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">
                {EBOOK_CONTENT.listTitle}
              </p>

              <ul className="space-y-3.5">
                {EBOOK_CONTENT.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-200 text-[15px]">
                    <CheckCircle
                      className="w-5 h-5 text-[#d9534f] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 bg-slate-800/60 p-8 sm:p-12 lg:p-14 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">
              {!isConverted ? (
                <div className="max-w-md mx-auto w-full">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {EBOOK_CONTENT.formTitle}
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <input
                      type="text"
                      name="_gotcha"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />
                    <input type="hidden" name="origem" value="ebook" />
                    <input type="hidden" name="utm_source" value={utms.utm_source} />
                    <input type="hidden" name="utm_medium" value={utms.utm_medium} />
                    <input type="hidden" name="utm_campaign" value={utms.utm_campaign} />

                    <div>
                      <label
                        htmlFor="ebook-nome"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
                      >
                        Nome *
                      </label>
                      <input
                        id="ebook-nome"
                        name="nome"
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-900 border border-slate-700 rounded-xl text-white placeholder:text-slate-400 focus:border-[#912018] focus:outline-none text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="ebook-whatsapp"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
                      >
                        WhatsApp *
                      </label>
                      <input
                        id="ebook-whatsapp"
                        name="whatsapp"
                        type="tel"
                        inputMode="numeric"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(formatWhatsAppMask(e.target.value))}
                        placeholder="(84) 90000-0000"
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-900 border border-slate-700 rounded-xl text-white placeholder:text-slate-400 focus:border-[#912018] focus:outline-none text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="ebook-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
                      >
                        E-mail *
                      </label>
                      <input
                        id="ebook-email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-900 border border-slate-700 rounded-xl text-white placeholder:text-slate-400 focus:border-[#912018] focus:outline-none text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="ebook-perfil"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
                      >
                        Você é *
                      </label>
                      <select
                        id="ebook-perfil"
                        name="perfil"
                        required
                        value={perfil}
                        onChange={(e) => setPerfil(e.target.value)}
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-900 border border-slate-700 rounded-xl text-white focus:border-[#912018] focus:outline-none text-sm sm:text-base"
                      >
                        <option value="" disabled>
                          Selecione uma opção
                        </option>
                        {EBOOK_CONTENT.profileOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-start gap-3 pt-1">
                      <input
                        id="ebook-consent"
                        name="lgpd_consent"
                        type="checkbox"
                        required
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900 text-[#912018] focus:ring-[#912018] shrink-0"
                      />
                      <label
                        htmlFor="ebook-consent"
                        className="text-xs sm:text-sm text-slate-300 leading-relaxed"
                      >
                        {EBOOK_CONTENT.consentText}{' '}
                        <button
                          type="button"
                          onClick={onOpenPrivacy}
                          className="underline text-white hover:text-slate-200 font-medium"
                        >
                          {EBOOK_CONTENT.consentLinkLabel}
                        </button>
                        . *
                      </label>
                    </div>

                    {errorMsg && (
                      <div
                        role="alert"
                        className="p-3.5 rounded-xl bg-red-950/70 border border-red-400/40 text-red-100 text-xs sm:text-sm flex items-start gap-2.5"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <p>{errorMsg}</p>
                          <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackWhatsAppClick('ebook_erro')}
                            className="inline-block mt-1.5 font-semibold underline text-white"
                          >
                            Falar no WhatsApp
                          </a>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 min-h-[48px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors flex items-center justify-center gap-2.5 shadow-lg disabled:opacity-70 text-sm sm:text-base"
                    >
                      {loading ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <span>{EBOOK_CONTENT.submitLabel}</span>
                          <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                      <Lock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{EBOOK_CONTENT.microtext}</span>
                    </p>
                  </form>
                </div>
              ) : (
                <div className="max-w-md mx-auto w-full text-center py-6">
                  <div className="w-16 h-16 bg-[#912018]/20 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-9 h-9 text-[#d9534f]" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {EBOOK_CONTENT.thankYou.title}
                  </h3>
                  <p className="text-slate-300 mb-8 leading-relaxed">
                    {EBOOK_CONTENT.thankYou.text}
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={SITE_CONFIG.PDF_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 min-h-[48px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors text-sm sm:text-base"
                    >
                      <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{EBOOK_CONTENT.thankYou.downloadLabel}</span>
                    </a>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('ebook_obrigado')}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 min-h-[48px] bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/15 transition-colors text-sm sm:text-base"
                    >
                      <span>{EBOOK_CONTENT.thankYou.whatsappLabel}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
