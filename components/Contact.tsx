import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { CONTACT_CONTENT, SITE_CONFIG, getWhatsAppUrl } from '../src/content';
import {
  formatWhatsAppMask,
  getUtmParams,
  isValidWhatsApp,
  submitLeadForm,
  trackGenerateLead,
  trackWhatsAppClick,
} from '../src/tracking';

interface ContactProps {
  onOpenPrivacy: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenPrivacy }) => {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [condominio, setCondominio] = useState('');
  const [cidadeUf, setCidadeUf] = useState('');
  const [unidades, setUnidades] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const utms = getUtmParams();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    if (honeypot) {
      return;
    }

    if (
      !nome.trim() ||
      !whatsapp.trim() ||
      !condominio.trim() ||
      !cidadeUf.trim() ||
      !assunto
    ) {
      setErrorMsg('Preencha todos os campos obrigatórios marcados com *.');
      return;
    }

    if (!isValidWhatsApp(whatsapp)) {
      setErrorMsg('Informe um número de WhatsApp válido com DDD.');
      return;
    }

    if (!consent) {
      setErrorMsg('É necessário concordar com a Política de Privacidade.');
      return;
    }

    setLoading(true);
    try {
      await submitLeadForm({
        origem: 'contato',
        nome: nome.trim(),
        whatsapp: whatsapp.trim(),
        email: email.trim(),
        condominio: condominio.trim(),
        cidade_uf: cidadeUf.trim(),
        unidades,
        assunto,
        mensagem: mensagem.trim(),
        lgpd_consent: true,
        utm_source: utms.utm_source,
        utm_medium: utms.utm_medium,
        utm_campaign: utms.utm_campaign,
      });
      trackGenerateLead();
      setSubmitted(true);
    } catch (err) {
      if (err instanceof Error && err.message === 'ENDPOINT_NOT_CONFIGURED') {
        setErrorMsg(
          'O envio automático do formulário ainda está em configuração. Por favor, fale diretamente pelo WhatsApp.'
        );
      } else {
        setErrorMsg(
          'Não foi possível enviar sua mensagem agora. Tente novamente ou chame no WhatsApp.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 lg:py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-5/12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-balance">
              {CONTACT_CONTENT.title}
            </h2>
            <p className="text-slate-300 mb-10 text-base sm:text-lg leading-relaxed">
              {CONTACT_CONTENT.description}
            </p>

            <div className="space-y-6">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('contato_canal')}
                className="flex items-start gap-4 group rounded-2xl p-4 bg-white/5 border border-white/10 hover:border-[#912018]/60 transition-colors"
              >
                <div className="w-11 h-11 bg-[#912018]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#e06c65]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-white group-hover:underline">
                    {SITE_CONFIG.CONTACT_INFO.whatsappDisplay}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.CONTACT_INFO.email}`}
                className="flex items-start gap-4 group rounded-2xl p-4 bg-white/5 border border-white/10 hover:border-[#912018]/60 transition-colors"
              >
                <div className="w-11 h-11 bg-[#912018]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#e06c65]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                    E-mail
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-white group-hover:underline break-all">
                    {SITE_CONFIG.CONTACT_INFO.email}
                  </p>
                </div>
              </a>

              <a
                href={SITE_CONFIG.CONTACT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group rounded-2xl p-4 bg-white/5 border border-white/10 hover:border-[#912018]/60 transition-colors"
              >
                <div className="w-11 h-11 bg-[#912018]/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#e06c65]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                    Endereço
                  </p>
                  <p className="text-sm sm:text-base font-medium text-white group-hover:underline leading-relaxed">
                    {SITE_CONFIG.CONTACT_INFO.address}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl p-4 bg-white/5 border border-white/10">
                <div className="w-11 h-11 bg-[#912018]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#e06c65]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                    Horário de atendimento
                  </p>
                  <p className="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">
                    {SITE_CONFIG.CONTACT_INFO.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl text-slate-900">
              {submitted ? (
                <div className="text-center py-12 px-4">
                  <div className="w-16 h-16 bg-[#912018]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-9 h-9 text-[#912018]" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    {CONTACT_CONTENT.thankYou.title}
                  </h3>
                  <p className="text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
                    {CONTACT_CONTENT.thankYou.text}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('contato_obrigado')}
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-4 min-h-[48px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors w-full sm:w-auto"
                    >
                      <span>{CONTACT_CONTENT.thankYou.whatsappLabel}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-semibold text-slate-600 hover:text-slate-900 underline py-2"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </div>
              ) : (
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
                  <input type="hidden" name="origem" value="contato" />
                  <input type="hidden" name="utm_source" value={utms.utm_source} />
                  <input type="hidden" name="utm_medium" value={utms.utm_medium} />
                  <input type="hidden" name="utm_campaign" value={utms.utm_campaign} />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contato-nome"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        Nome *
                      </label>
                      <input
                        id="contato-nome"
                        name="nome"
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contato-whatsapp"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        WhatsApp *
                      </label>
                      <input
                        id="contato-whatsapp"
                        name="whatsapp"
                        type="tel"
                        inputMode="numeric"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(formatWhatsAppMask(e.target.value))}
                        placeholder="(84) 90000-0000"
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contato-email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        E-mail
                      </label>
                      <input
                        id="contato-email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contato-condominio"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        Nome ou bairro do condomínio *
                      </label>
                      <input
                        id="contato-condominio"
                        name="condominio"
                        type="text"
                        required
                        value={condominio}
                        onChange={(e) => setCondominio(e.target.value)}
                        placeholder="Ex: Condomínio Solar / Petrópolis"
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contato-cidade"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        Cidade/UF *
                      </label>
                      <input
                        id="contato-cidade"
                        name="cidade_uf"
                        type="text"
                        required
                        value={cidadeUf}
                        onChange={(e) => setCidadeUf(e.target.value)}
                        placeholder="Ex: Natal/RN"
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contato-unidades"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        Nº de unidades
                      </label>
                      <select
                        id="contato-unidades"
                        name="unidades"
                        value={unidades}
                        onChange={(e) => setUnidades(e.target.value)}
                        className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-sm sm:text-base"
                      >
                        <option value="">Selecione</option>
                        {CONTACT_CONTENT.unitOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contato-assunto"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                    >
                      Assunto principal *
                    </label>
                    <select
                      id="contato-assunto"
                      name="assunto"
                      required
                      value={assunto}
                      onChange={(e) => setAssunto(e.target.value)}
                      className="w-full px-4 py-3.5 min-h-[46px] bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-sm sm:text-base"
                    >
                      <option value="" disabled>
                        Selecione o assunto
                      </option>
                      {CONTACT_CONTENT.subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contato-mensagem"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="contato-mensagem"
                      name="mensagem"
                      rows={3}
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      placeholder="Conte brevemente a situação do condomínio"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl focus:border-[#912018] focus:outline-none text-slate-900 text-sm sm:text-base"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      id="contato-consent"
                      name="lgpd_consent"
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-400 text-[#912018] focus:ring-[#912018] shrink-0"
                    />
                    <label
                      htmlFor="contato-consent"
                      className="text-xs sm:text-sm text-slate-700 leading-relaxed"
                    >
                      Li e concordo com a{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="underline text-[#912018] hover:text-[#451F19] font-semibold"
                      >
                        Política de Privacidade
                      </button>{' '}
                      *
                    </label>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs sm:text-sm flex items-start gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 text-[#912018] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p>{errorMsg}</p>
                        <a
                          href={getWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackWhatsAppClick('contato_erro')}
                          className="inline-block mt-1 font-semibold underline text-[#912018]"
                        >
                          Falar no WhatsApp agora
                        </a>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 min-h-[48px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors flex items-center justify-center gap-2.5 shadow-md disabled:opacity-70 text-sm sm:text-base"
                  >
                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>{CONTACT_CONTENT.submitLabel}</span>
                        <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <p className="text-xs sm:text-sm text-slate-600 text-center pt-1">
                    Ou, se preferir,{' '}
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('contato_microtexto')}
                      className="font-semibold text-[#912018] underline hover:text-[#451F19]"
                    >
                      fale agora pelo WhatsApp
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
