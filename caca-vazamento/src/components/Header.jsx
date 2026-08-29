// src/components/Header.jsx

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  MessageCircle,
  Clock3,
  ShieldCheck,
  DollarSign,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '5511994820656';
const PHONE_NUMBER = '+55 11 99482-0656';



const serviceMenuColumns = [
  {
    title: 'CONTRATOS E FERRAMENTAS',
    items: [
      { name: 'Manutenção Preventiva', to: '/servicos/manutencao-preventiva' },
      { name: 'Licitações e Órgãos Públicos', to: '/servicos/licitacoes-e-orgaos-publicos' },
    ],
    footerLink: { name: 'Ver todos os serviços →', to: '/servicos' },
  },
  
  {
    title: 'LIMPEZA E SUCÇÃO',
    items: [
      { name: 'Hidrojateamento', to: '/servicos/hidrojateamento' },
      { name: 'Limpeza de Caixa de Gordura', to: '/servicos/limpeza-de-caixa-de-gordura' },
      { name: 'Limpeza de Fossa', to: '/servicos/limpeza-de-fossa' },
      { name: 'Sucção de Lodo e Resíduos', to: '/servicos/succao-de-lodo-e-residuos' },
      {name: 'Limpeza de Galerias', to: '/servicos/limpeza-de-galerias'},
    ],
  },
  {

    title: 'DESENTUPIMENTO',
    items: [
      { name: 'Desentupimento de Canos', to: '/servicos/desentupimento-de-canos' },
      { name: 'Desentupimento de Colunas', to: '/servicos/desentupimento-de-colunas' },
      { name: 'Desentupimento de Esgoto', to: '/servicos/desentupimento-de-esgoto' },
      { name: 'Desentupimento de Pia', to: '/servicos/desentupimento-de-pia' },
      { name: 'Desentupimento de Ralos', to: '/servicos/desentupimento-de-ralos' },
      { name: 'Redes de Águas Pluviais', to: '/servicos/redes-de-aguas-pluviais' },
      { name: 'Desentupimento de Tanque', to: '/servicos/desentupimento-de-tanque' },
      { name: 'Vasos Sanitários', to: '/servicos/vasos-sanitarios' },
    ],
  },
  

];

const atendimentoMenuColumns = [
  {
    title: 'RESIDENCIAL E COMERCIAL',
    items: [
      { name: 'Residenciais', to: '/atendimento/residencial' },
      { name: 'Condomínios', to: '/atendimento/condominios' },
      { name: 'Empresas', to: '/atendimento/empresas' },
    ],
  },
  {
    title: 'COMÉRCIO E SERVIÇOS',
    items: [
      { name: 'Indústrias', to: '/atendimento/industrias' },
      { name: 'Restaurantes', to: '/atendimento/restaurantes' },
      { name: 'Cozinhas Industriais', to: '/atendimento/cozinhas-industriais' },
    ],
  },
  {
    title: 'INSTITUIÇÕES',
    items: [
      { name: 'Órgãos Públicos', to: '/atendimento/orgaos-publicos' },
      { name: 'Clínicas', to: '/atendimento/clinicas' },
      { name: 'Hospitais', to: '/atendimento/hospitais' },
      { name: 'Laboratórios', to: '/atendimento/laboratorios' },
      { name: 'Escolas e Creches', to: '/atendimento/escolas-e-creches' },
    ],
  },
];

const atendimentoItems = atendimentoMenuColumns.flatMap((column) => column.items);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [atendimentoOpen, setAtendimentoOpen] = useState(false);

  const closeMobileMenu = () => {
    setOpen(false);
    setServicesOpen(false);
    setAtendimentoOpen(false);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar atendimento e um orçamento.'
  )}`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      {/* =========================================================
          BARRA SUPERIOR
      ========================================================= */}
      <div className="hidden bg-slate-950 text-white md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-6 text-xs font-medium text-slate-300">
            <span className="flex items-center gap-2">
              <Clock3 size={14} className="text-sky-400" />
              Atendimento rápido
            </span>

            <span className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-sky-400" />
              Profissionais qualificados e identificados
            </span>

            <span className="flex items-center gap-2">
              <DollarSign size={14} className="text-sky-400" />
              Sem taxa de visita
            </span>

            <span className="hidden items-center gap-2 lg:flex">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Atendimento 24 horas
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={whatsappUrl}
              className="flex items-center gap-2 text-xs font-bold text-white transition hover:text-sky-400"
            >
              <Phone size={14} />
              {PHONE_NUMBER}
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-green-400 transition hover:text-green-300"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          HEADER PRINCIPAL
      ========================================================= */}
      <div className="border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >
            
             <img
              src="/logo.png"
              alt="Caça Vazamento"
              className=" h-19 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center lg:flex">
            <div className="flex items-center gap-6 xl:gap-7">
              
              {/* =================================================
                  SERVIÇOS / MEGA MENU
              ================================================== */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setServicesOpen(true);
                  setAtendimentoOpen(false);
                }}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onFocus={() => {
                    setServicesOpen(true);
                    setAtendimentoOpen(false);
                  }}
                  onBlur={() => setServicesOpen(false)}
                  aria-expanded={servicesOpen}
                  className={`flex cursor-pointer items-center gap-1.5 text-sm font-semibold transition-colors ${servicesOpen
                      ? 'text-sky-600'
                      : 'text-slate-600 hover:text-sky-600'
                    }`}
                >
                  Serviços
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''
                      }`}
                  />
                </div>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="fixed left-1/2 top-[78px] w-[min(1030px,calc(100vw-32px))] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
                    >
                      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 xl:grid-cols-3">
                        {serviceMenuColumns.map((column) => (
                          <div
                            key={column.title}
                            className="min-h-[280px] border-b border-slate-200 px-6 py-6 xl:border-b-0 xl:border-r xl:last:border-r-0"
                          >
                            <div className="border-b border-slate-200 pb-3">
                              <p className="text-xs font-extrabold tracking-wider text-sky-600">
                                {column.title}
                              </p>
                            </div>

                            <div className="pt-2">
                              {column.items.map((item) => (
                                <Link
                                  key={item.to}
                                  to={item.to}
                                  onClick={() => setServicesOpen(false)}
                                  className="block rounded-lg py-2.5 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>

                            {column.footerLink && (
                              <Link
                                to={column.footerLink.to}
                                onClick={() => setServicesOpen(false)}
                                className="mt-2 inline-block pt-1 text-sm font-semibold text-slate-800 transition hover:text-sky-600"
                              >
                                {column.footerLink.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="relative"
                onMouseEnter={() => {
                  setAtendimentoOpen(true);
                  setServicesOpen(false);
                }}
                onMouseLeave={() => setAtendimentoOpen(false)}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onFocus={() => {
                    setAtendimentoOpen(true);
                    setServicesOpen(false);
                  }}
                  onBlur={() => setAtendimentoOpen(false)}
                  aria-expanded={atendimentoOpen}
                  className={`flex cursor-pointer items-center gap-1.5 text-sm font-semibold transition-colors ${atendimentoOpen
                      ? 'text-sky-600'
                      : 'text-slate-600 hover:text-sky-600'
                    }`}
                >
                  Para Quem Atendemos
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${atendimentoOpen ? 'rotate-180' : ''}`}
                  />
                </div>

                <AnimatePresence>
                  {atendimentoOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="fixed left-1/2 top-[78px] w-[min(920px,calc(100vw-32px))] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
                    >
                      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 xl:grid-cols-3">
                        {atendimentoMenuColumns.map((column) => (
                          <div
                            key={column.title}
                            className="min-h-[220px] border-b border-slate-200 px-6 py-6 xl:border-b-0 xl:border-r xl:last:border-r-0"
                          >
                            <div className="border-b border-slate-200 pb-3">
                              <p className="text-xs font-extrabold tracking-wider text-sky-600">
                                {column.title}
                              </p>
                            </div>

                            <div className="pt-2">
                              {column.items.map((item) => (
                                <Link
                                  key={item.to}
                                  to={item.to}
                                  onClick={() => setAtendimentoOpen(false)}
                                  className="block rounded-lg py-2.5 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/depoimentos"
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${isActive
                    ? 'text-sky-600'
                    : 'text-slate-600 hover:text-sky-600'
                  }`
                }
              >
                Depoimentos
              </NavLink>

              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${isActive
                    ? 'text-sky-600'
                    : 'text-slate-600 hover:text-sky-600'
                  }`
                }
              >
                Contato
              </NavLink>
            </div>

            {/* CTA */}
            <div className="ml-7 xl:ml-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-sky-700 hover:shadow-md"
              >
                <CalendarDaysIcon />
                Solicitar Orçamento
              </a>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* =========================================================
            MOBILE MENU
        ========================================================= */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
            >
              <div className="mx-auto max-h-[calc(100vh-116px)] max-w-7xl overflow-y-auto px-4 py-5 sm:px-6">
                <div className="space-y-1">
                  {[
                    { name: 'Início', to: '/' },
                    { name: 'Sobre Nós', to: '/sobre' },
                    { name: 'Tecnologia', to: '/tecnologia' },
                    { name: 'Diferenciais', to: '/diferenciais' },
                    { name: 'Depoimentos', to: '/depoimentos' },
                    { name: 'Contato', to: '/contato' },
                  ].map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-base font-semibold transition ${isActive
                          ? 'bg-sky-50 text-sky-600'
                          : 'text-slate-700 hover:bg-slate-50'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}

                  {/* MOBILE SERVIÇOS */}
                  <div className="rounded-xl border border-slate-100">
                    <button
                      type="button"
                      onClick={() => setServicesOpen((value) => !value)}
                      aria-expanded={servicesOpen}
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-semibold text-slate-700"
                    >
                      <span>Serviços</span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform ${servicesOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-100 px-3 py-3">
                            {serviceMenuColumns.map((column) => (
                              <div
                                key={column.title}
                                className="border-b border-slate-100 py-3 last:border-b-0"
                              >
                                <p className="px-1 text-xs font-extrabold tracking-wider text-sky-600">
                                  {column.title}
                                </p>

                                <div className="mt-1">
                                  {column.items.map((item) => (
                                    <Link
                                      key={item.to}
                                      to={item.to}
                                      onClick={closeMobileMenu}
                                      className="block rounded-lg px-2 py-2.5 text-sm text-slate-600 transition hover:bg-sky-50 hover:text-sky-600"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>

                                {column.footerLink && (
                                  <Link
                                    to={column.footerLink.to}
                                    onClick={closeMobileMenu}
                                    className="mt-1 block rounded-lg px-2 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-sky-50 hover:text-sky-600"
                                  >
                                    {column.footerLink.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* MOBILE ATENDIMENTO */}
                  <div className="rounded-xl border border-slate-100">
                    <button
                      type="button"
                      onClick={() => setAtendimentoOpen((value) => !value)}
                      aria-expanded={atendimentoOpen}
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-semibold text-slate-700"
                    >
                      <span>Para Quem Atendemos</span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform ${atendimentoOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {atendimentoOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-100 px-3 py-3">
                            {atendimentoMenuColumns.map((column) => (
                              <div
                                key={column.title}
                                className="border-b border-slate-100 py-3 last:border-b-0"
                              >
                                <p className="px-1 text-xs font-extrabold tracking-wider text-sky-600">
                                  {column.title}
                                </p>

                                <div className="mt-1">
                                  {column.items.map((item) => (
                                    <Link
                                      key={item.to}
                                      to={item.to}
                                      onClick={closeMobileMenu}
                                      className="block rounded-lg px-2 py-2.5 text-sm text-slate-600 transition hover:bg-sky-50 hover:text-sky-600"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* MOBILE CTA */}
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 font-bold text-slate-700"
                  >
                    <Phone size={18} />
                    Ligar
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-3 font-bold text-white"
                  >
                    <MessageCircle size={18} />
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function CalendarDaysIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 3V6M17 3V6M4 9H20M5 5H19C19.5523 5 20 5.44772 20 6V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V6C4 5.44772 4.44772 5 5 5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 13H10M14 13H16M8 16H10M14 16H16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
