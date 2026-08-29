import { ArrowRight, MapPin, Quote, ShieldCheck, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton';

const testimonials = [
  {
    name: 'Mariana S.',
    city: 'São Paulo - SP',
    text: 'Excelente atendimento! Descobriram o vazamento que ninguém conseguia achar. Serviço rápido, limpo e profissional.',
    rating: 5,
  },
  {
    name: 'Carlos A.',
    city: 'Campinas - SP',
    text: 'Tecnologia de ponta e equipe muito capacitada. Economizei tempo e dinheiro. Recomendo a todos!',
    rating: 5,
  },
  {
    name: 'Roberto T.',
    city: 'Sorocaba - SP',
    text: 'Muito satisfeito com o serviço. Resolveram o problema da minha piscina e o consumo de água voltou ao normal.',
    rating: 5,
  },
  {
    name: 'Patrícia L.',
    city: 'Guarulhos - SP',
    text: 'Atendimento muito humano e técnico. O diagnóstico foi preciso e a solução veio sem dor de cabeça.',
    rating: 5,
  },
  {
    name: 'Daniel M.',
    city: 'São Bernardo - SP',
    text: 'Equipe pontual, bem preparada e muito cuidadosa. Resolveram a falha do condomínio rapidamente.',
    rating: 5,
  },
  {
    name: 'Aline R.',
    city: 'Osasco - SP',
    text: 'A sensação de segurança foi imediata. Sem quebrar nada e com um laudo bem explicado. Valeu muito!',
    rating: 5,
  },
];

export default function Depoimentos() {
  return (
    <>
      <Helmet>
        <title>Depoimentos | Caça Vazamento</title>
        <meta
          name="description"
          content="Veja depoimentos reais de clientes atendidos em casas, condomínios, empresas e piscinas."
        />
      </Helmet>

      <Header />

      <main className="bg-slate-50 pt-20">
        <section className="relative overflow-hidden bg-[#06152d] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(14,165,233,0.35),transparent_26%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-20">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Depoimentos</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
              O que nossos clientes dizem sobre o atendimento
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Confiança, agilidade e tecnologia em cada diagnóstico. Veja alguns relatos de quem já resolveu o problema com a nossa equipe.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map(({ name, city, text, rating }) => (
              <article key={name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700">
                    <Quote className="h-5 w-5" />
                  </div>

                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: rating }).map((_, index) => (
                      <Star key={`${name}-${index}`} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-lg leading-8 text-slate-700">“{text}”</p>

                <div className="mt-8 border-t border-slate-200 pt-5">
                  <h2 className="text-xl font-bold text-slate-900">{name}</h2>
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="h-4 w-4 text-sky-600" />
                    {city}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <div className="mx-auto inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl">
              Atendimento reconhecido por quem precisa de confiança
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Mais do que localizar vazamentos, entregamos segurança para o seu imóvel, condomínio ou empresa.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-500"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/servicos"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-sky-200 hover:text-sky-700"
              >
                Ver serviços
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}
