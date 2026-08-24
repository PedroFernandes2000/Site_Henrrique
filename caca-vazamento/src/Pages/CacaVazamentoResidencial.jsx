import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import WhatsappButton from '../components/WhatsappButton';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Droplets, Home, ShieldCheck } from 'lucide-react';

const checklist = [
  'Inspeção inicial e análise do sintoma',
  'Uso de equipamentos eletrônicos de alta precisão',
  'Localização do vazamento sem quebra desnecessária',
  'Laudo técnico e orientações para a correção',
];

export default function CacaVazamentoResidencial() {
  return (
    <>
      <Helmet>
        <title>Caça Vazamento Residencial | Caça Vazamento</title>
        <meta name="description" content="Detecção de vazamentos em casas e apartamentos sem quebrar pisos e paredes." />
      </Helmet>

      <Header />

      <main className="pt-20">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <Home className="w-5 h-5" />
              <span>Residencial</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-black">Caça Vazamento Residencial</h1>
            <p className="mt-4 max-w-2xl text-primary-foreground/90">
              A solução para vazamentos em casas, apartamentos e reformas, com diagnóstico preciso e mínimo impacto.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <p className="text-primary font-semibold uppercase tracking-[0.2em] text-xs">Como trabalhamos</p>
              <h2 className="mt-4 text-3xl font-bold text-primary">Localização segura e sem quebra desnecessária</h2>
              <div className="mt-8 space-y-5">
                {checklist.map((item) => (
                  <div key={item} className="flex gap-4 items-start">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gray-50 p-6 border border-gray-100 shadow-sm">
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Vantagens do serviço</h3>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-primary mt-0.5" /> Diagnóstico com alta precisão</li>
                <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-primary mt-0.5" /> Menor invasão no imóvel</li>
                <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-primary mt-0.5" /> Atendimento rápido e laudo técnico</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
              <ContactForm />
            </div>
            <div>
              <p className="text-primary font-semibold uppercase tracking-[0.2em] text-xs">Atendimento</p>
              <h2 className="mt-4 text-3xl font-bold text-primary">Precisa resolver um vazamento sem complicação?</h2>
              <p className="mt-5 text-gray-600">
                Nossa equipe atende com rapidez, identifica a origem do problema e orienta a melhor solução para a sua casa ou apartamento.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}