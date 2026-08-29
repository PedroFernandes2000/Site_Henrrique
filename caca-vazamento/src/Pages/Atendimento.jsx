import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton';
import AtendimentoLayout from '../layouts/AtendimentoLayout';
import { atendimentoPages } from '../data/atendimentoPages';

export default function Atendimento() {
  const { slug } = useParams();
  const page = atendimentoPages.find((item) => item.slug === slug);

  if (page) {
    return <AtendimentoLayout page={page} />;
  }

  return (
    <>
      <Helmet>
        <title>Atendimento | Caça Vazamento</title>
        <meta name="description" content="Conheça os tipos de atendimento oferecidos para residências, empresas e instituições." />
      </Helmet>

      <Header />

      <main className="bg-slate-50 pt-20">
        <section className="relative overflow-hidden bg-[#06152d] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(14,165,233,0.3),transparent_25%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-20">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Atendimento</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">Atendimento pensado para cada tipo de cliente</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Soluções rápidas e técnicas para residências, condomínios, empresas e instituições com atendimento profissional e seguro.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {atendimentoPages.map(({ slug: atendimentoSlug, title, description, icon: Icon, label }) => (
              <div key={atendimentoSlug} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-5 inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-600">{label}</p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900">{title}</h2>
                <p className="mt-4 text-slate-600">{description}</p>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-sky-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <Link to={`/atendimento/${atendimentoSlug}`} className="inline-flex items-center gap-2">
                    Ver detalhes
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}
