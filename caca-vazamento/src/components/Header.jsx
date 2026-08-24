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
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '5511945697129';
const PHONE_NUMBER = '+55 11 94569-7129';

const navItems = [
  { name: 'Início', to: '/' },
  { name: 'Serviços', to: '/servicos' },
  { name: 'Sobre', to: '/sobre' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contato', to: '/contato' },
];

const serviceItems = [
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

const atendimentoItems = [
  { name: 'Residências e apartamentos', to: '/atendimento/residencial' },
  { name: 'Condomínios', to: '/atendimento/condominios' },
  { name: 'Comércios', to: '/atendimento/comercios' },
  { name: 'Empresas', to: '/atendimento/empresas' },
];

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
    'Olá! Gostaria de solicitar atendimento para um possível vazamento.'
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
              Profissionais preparados
            </span>

            <span className="hidden lg:flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Solicite seu orçamento
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
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
              className="h-11 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center lg:flex">
            <div className="flex items-center gap-7">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-sky-600'
                      : 'text-slate-600 hover:text-sky-600'
                  }`
                }
              >
                Início
              </NavLink>

              {/* SERVIÇOS */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setServicesOpen((value) => !value);
                    setAtendimentoOpen(false);
                  }}
                  className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    servicesOpen
                      ? 'text-sky-600'
                      : 'text-slate-600 hover:text-sky-600'
                  }`}
                >
                  Serviços
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full mt-5 w-80 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl"
                    >
                      <div className="mb-2 border-b border-slate-100 px-3 pb-3">
                        <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
                          Serviços
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Encontre o serviço adequado para o seu problema.
                        </p>
                      </div>

                      {serviceItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setServicesOpen(false)}
                          className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
                        >
                          {item.name}
                        </Link>
                      ))}

                      <Link
                        to="/servicos"
                        onClick={() => setServicesOpen(false)}
                        className="mt-2 block rounded-xl bg-slate-950 px-3 py-3 text-center text-sm font-bold text-white transition hover:bg-slate-800"
                      >
                        Ver todos os serviços →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-sky-600'
                      : 'text-slate-600 hover:text-sky-600'
                  }`
                }
              >
                Sobre
              </NavLink>

              {/* ATENDIMENTO */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setAtendimentoOpen((value) => !value);
                    setServicesOpen(false);
                  }}
                  className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    atendimentoOpen
                      ? 'text-sky-600'
                      : 'text-slate-600 hover:text-sky-600'
                  }`}
                >
                  Atendimento
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      atendimentoOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {atendimentoOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full mt-5 w-72 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl"
                    >
                      <div className="mb-2 border-b border-slate-100 px-3 pb-3">
                        <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
                          Para quem atendemos
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Soluções para diferentes tipos de imóveis.
                        </p>
                      </div>

                      {atendimentoItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setAtendimentoOpen(false)}
                          className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-sky-600'
                      : 'text-slate-600 hover:text-sky-600'
                  }`
                }
              >
                Blog
              </NavLink>

              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-sky-600'
                      : 'text-slate-600 hover:text-sky-600'
                  }`
                }
              >
                Contato
              </NavLink>
            </div>

            {/* CTA */}
            <div className="ml-8 flex items-center gap-3">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-sky-200 hover:text-sky-600"
              >
                <Phone size={16} />
                Ligar
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-green-600 hover:shadow-md"
              >
                <MessageCircle size={17} />
                WhatsApp
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
              <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-base font-semibold transition ${
                          isActive
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
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-semibold text-slate-700"
                    >
                      <span>Serviços</span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          servicesOpen ? 'rotate-180' : ''
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
                          <div className="border-t border-slate-100 px-3 py-2">
                            {serviceItems.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={closeMobileMenu}
                                className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-sky-50 hover:text-sky-600"
                              >
                                {item.name}
                              </Link>
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
                      onClick={() =>
                        setAtendimentoOpen((value) => !value)
                      }
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-semibold text-slate-700"
                    >
                      <span>Atendimento</span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          atendimentoOpen ? 'rotate-180' : ''
                        }`}
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
                          <div className="border-t border-slate-100 px-3 py-2">
                            {atendimentoItems.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={closeMobileMenu}
                                className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-sky-50 hover:text-sky-600"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* MOBILE CTA */}
                <div className="mt-5 grid grid-cols-2 gap-3">
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
                    className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 font-bold text-white"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
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