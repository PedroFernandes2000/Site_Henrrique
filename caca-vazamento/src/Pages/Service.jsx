import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import WhatsappButton from '../components/WhatsappButton';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Building2, Droplets, Home, Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Caça Vazamento Residencial',
    description: 'Localização precisa em casas e apartamentos sem quebrar pisos e paredes.',
    icon: Home,
    to: '/caca-vazamento-residencial',
  },
  {
    title: 'Caça Vazamento Comercial',
    description: 'Atendimento ágil para empresas, shoppings, consultórios e lojas.',
    icon: Building2,
    to: '/contato',
  },
  {
    title: 'Vazamento em Piscina',
    description: 'Diagnóstico de perdas em piscinas com menor impacto e maior precisão.',
    icon: Droplets,
    to: '/contato',
  },
  {
    title: 'Caça Vazamento Industrial',
    description: 'Apoio técnico para plantas industriais e áreas de produção.',
    icon: Warehouse,
    to: '/contato',
  },
];

export default function Service() {
  return (
    <>
      <Helmet>
        <title>Serviços | Caça Vazamento</title>
        <meta name="description" content="Conheça os serviços de detecção de vazamentos com tecnologia de ponta." />
      </Helmet>

      <Header />

      <main className="pt-20">
        <section className="bg-primary py-20 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/80">Serviços</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-black">Soluções para cada tipo de vazamento</h1>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            {services.map(({ title, description, icon: Icon, to }) => (
              <div key={title} className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-3">{title}</h2>
                <p className="text-gray-600 mb-6">{description}</p>
                <Link to={to} className="inline-flex items-center gap-2 text-primary font-semibold">
                  Solicitar diagnóstico <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_0.9fr] gap-8 items-start">
            <div>
              <p className="text-primary font-semibold uppercase tracking-[0.2em] text-xs">Como funciona</p>
              <h2 className="mt-4 text-3xl font-bold text-primary">Diagnóstico técnico em etapas simples</h2>
              <ol className="mt-8 space-y-5">
                <li className="flex gap-4"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">1</span><div><h3 className="font-bold text-primary">Inspeção inicial</h3><p className="text-gray-600">Analisamos o tipo de imóvel, histórico e sintomas do problema.</p></div></li>
                <li className="flex gap-4"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">2</span><div><h3 className="font-bold text-primary">Detecção eletrônica</h3><p className="text-gray-600">Usamos equipamentos de precisão para localizar a origem do vazamento.</p></div></li>
                <li className="flex gap-4"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">3</span><div><h3 className="font-bold text-primary">Laudo e solução</h3><p className="text-gray-600">Você recebe orientação técnica e o melhor caminho para resolver com segurança.</p></div></li>
              </ol>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
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