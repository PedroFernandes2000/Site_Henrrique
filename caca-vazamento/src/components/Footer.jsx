// src/components/Footer.jsx

import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock3,
  ArrowUpRight,
} from 'lucide-react';

const WHATSAPP_NUMBER = '5511999999999';
const PHONE_NUMBER = '+55 11 99999-9999';
const EMAIL = 'contato@seusite.com.br';

const serviceLinks = [
  {
    name: 'Caça-vazamento residencial',
    to: '/servicos/caca-vazamento-residencial',
  },
  {
    name: 'Vazamento em parede',
    to: '/servicos/vazamento-em-parede',
  },
  {
    name: 'Vazamento em piso',
    to: '/servicos/vazamento-em-piso',
  },
  {
    name: 'Vazamento oculto',
    to: '/servicos/vazamento-oculto',
  },
  {
    name: 'Vazamento em apartamento',
    to: '/servicos/vazamento-em-apartamento',
  },
  {
    name: 'Laudo técnico',
    to: '/servicos/laudo-tecnico',
  },
];

const companyLinks = [
  { name: 'Início', to: '/' },
  { name: 'Sobre nós', to: '/sobre' },
  { name: 'Serviços', to: '/servicos' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contato', to: '/contato' },
];

const atendimentoLinks = [
  {
    name: 'Residências',
    to: '/atendimento/residencial',
  },
  {
    name: 'Apartamentos',
    to: '/atendimento/apartamentos',
  },
  {
    name: 'Condomínios',
    to: '/atendimento/condominios',
  },
  {
    name: 'Comércios',
    to: '/atendimento/comercios',
  },
  {
    name: 'Empresas',
    to: '/atendimento/empresas',
  },
];

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar atendimento para um possível vazamento.'
  )}`;

  return (
    <footer className="bg-slate-950 text-white">
      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-8 rounded-3xl bg-sky-600 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-sky-100">
                Precisa de ajuda?
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Suspeita de vazamento?
                <br />
                Fale conosco.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-sky-100">
                Explique o que está acontecendo e receba orientação sobre o
                atendimento para identificar a origem do problema.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600"
              >
                <MessageCircle size={19} />
                Falar no WhatsApp
              </a>

              <a
                href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-slate-950 transition hover:bg-slate-100"
              >
                <Phone size={19} />
                Ligar agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTEÚDO PRINCIPAL
      ========================================================= */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* EMPRESA */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Caça Vazamento"
                className="h-12 w-auto"
              />

              <div>
                <span className="block text-lg font-extrabold leading-none">
                  Caça Vazamento
                </span>

                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.17em] text-sky-400">
                  Detecção de vazamentos
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Identificação de vazamentos ocultos em imóveis residenciais e
              comerciais, buscando localizar o problema antes de intervenções
              desnecessárias.
            </p>

            {/* CONTATO */}
            <div className="mt-7 space-y-4">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                className="flex items-start gap-3 text-sm text-slate-300 transition hover:text-white"
              >
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-sky-400"
                />

                <span>
                  <strong className="block text-white">Telefone</strong>
                  {PHONE_NUMBER}
                </span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-3 text-sm text-slate-300 transition hover:text-white"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-sky-400"
                />

                <span>
                  <strong className="block text-white">E-mail</strong>
                  {EMAIL}
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-sky-400"
                />

                <span>
                  <strong className="block text-white">Atendimento</strong>
                  São Paulo e região
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <Clock3
                  size={18}
                  className="mt-0.5 shrink-0 text-sky-400"
                />

                <span>
                  <strong className="block text-white">Horário</strong>
                  Atendimento 24 horas
                </span>
              </div>
            </div>
          </div>

          {/* EMPRESA */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Empresa
            </h3>

            <ul className="mt-6 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.name}
                    {link.name === 'Blog' && <ArrowUpRight size={13} />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVIÇOS */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Serviços
            </h3>

            <ul className="mt-6 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm leading-6 text-slate-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ATENDIMENTO */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Atendimento
            </h3>

            <ul className="mt-6 space-y-3">
              {atendimentoLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-bold text-white">
                Precisa de atendimento?
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                Fale diretamente pelo WhatsApp e explique seu problema.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green-400 transition hover:text-green-300"
              >
                <MessageCircle size={17} />
                Solicitar atendimento
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BARRA INFERIOR
      ========================================================= */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="text-xs leading-5 text-slate-500">
            © {new Date().getFullYear()} Caça Vazamento. Todos os direitos
            reservados.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/politica-de-privacidade"
              className="text-xs text-slate-500 transition hover:text-white"
            >
              Política de Privacidade
            </Link>

            <Link
              to="/termos-de-uso"
              className="text-xs text-slate-500 transition hover:text-white"
            >
              Termos de Uso
            </Link>
          </div>

          <p className="text-xs text-slate-600">
            Detecção profissional de vazamentos
          </p>
        </div>
      </div>
    </footer>
  );
}