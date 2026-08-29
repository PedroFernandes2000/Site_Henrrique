import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import WhatsappButton from '../components/WhatsappButton';

export default function AtendimentoLayout({ page }) {
  const Icon = page.icon;

  return (
    <>
      <Helmet>
        <title>{page.title} | Caça Vazamento</title>
        <meta name="description" content={page.description} />
      </Helmet>

      <Header />

      <main className="bg-white pt-20 mt-2">
        <section className="relative overflow-hidden bg-[#06152d] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(14,165,233,0.4),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Atendimento</p>
              <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{page.title}</h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">{page.description}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-400"
                >
                  Falar com a equipe
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/atendimento"
                  className="inline-flex items-center justify-center rounded-md border border-white/50 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-slate-900"
                >
                  Voltar para atendimento
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-6 inline-flex rounded-2xl bg-sky-500/20 p-4 text-sky-300">
                <Icon className="h-8 w-8" />
              </div>

              <h2 className="text-2xl font-bold text-white">{page.label}</h2>

              <ul className="mt-6 space-y-4 text-sm text-slate-200">
                {page.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-sky-600">Como atendemos</p>
              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Estrutura, agilidade e atenção para cada tipo de cliente</h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {page.tasks.map((task, index) => (
                <div key={task} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 font-black text-sky-700">
                    {index + 1}
                  </span>
                  <p className="mt-5 text-lg font-bold text-slate-900">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Vantagens do atendimento</h3>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-600" /> Respostas rápidas e orientação técnica clara.</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-600" /> Atendimento compatível com o seu tipo de imóvel ou operação.</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-600" /> Soluções pensadas para reduzir riscos e prejuízos.</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-sky-600">Fale conosco</p>
              <h2 className="mt-3 text-3xl font-black text-slate-900">Tem uma demanda específica?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Descreva seu caso e nossa equipe vai orientar a melhor solução para sua realidade, com agilidade e atenção profissional.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="tel:+5511994820656" className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800">
                  <Phone size={16} className="text-sky-600" />
                  (11) 99482-0656
                </a>
                <a href="https://wa.me/5511994820656?text=Ol%C3%A1%2C%20quero%20solicitar%20atendimento%20para%20o%20meu%20caso." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-3 text-sm font-semibold text-white">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4">
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}
