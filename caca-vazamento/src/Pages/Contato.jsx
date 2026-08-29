import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import WhatsappButton from '../components/WhatsappButton';
import { Clock3, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const contactCards = [
  {
    icon: Phone,
    title: 'Telefone',
    value: '(11) 99482-0656',
    href: 'tel:+5511994820656',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Atendimento 24h',
    href: 'https://wa.me/5511994820656?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico.',
  },
  {
    icon: MapPin,
    title: 'Atendimento',
    value: 'São Paulo e região metropolitana',
    href: '#',
  },
  {
    icon: Clock3,
    title: 'Disponibilidade',
    value: 'Resposta rápida e agendamento imediato',
    href: '#',
  },
];

export default function Contato() {
  return (
    <>
      <Helmet>
        <title>Contato | Caça Vazamento</title>
        <meta
          name="description"
          content="Entre em contato com a equipe de caça vazamento para solicitar diagnóstico, orçamento e atendimento rápido."
        />
      </Helmet>

      <Header />

      <main className="bg-slate-50 pt-20">
        <section className="relative overflow-hidden bg-[#06152d] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(14,165,233,0.35),transparent_26%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-20">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Contato</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Fale com nossa equipe e resolva seu problema com rapidez
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Atendemos residências, condomínios, empresas e instituições com diagnósticos precisos e suporte técnico de confiança.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map(({ icon: Icon, title, value, href }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-600">{title}</p>
                <p className="mt-4 text-lg font-bold text-slate-900">{value}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h2 className="text-2xl font-black text-slate-900">Por que nos escolher</h2>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-xs font-bold">✓</span> Diagnóstico técnico com precisão e segurança.</li>
                <li className="flex gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-xs font-bold">✓</span> Atendimento rápido para casas, condomínios, empresas e indústrias.</li>
                <li className="flex gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-xs font-bold">✓</span> Orientação clara para a próxima etapa da correção.</li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}