// src/pages/Home.jsx

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Droplets,
  Gauge,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ScanSearch,
  ShieldCheck,
  Thermometer,
  Trophy,
  UserCheck,
  Waves,
  FileText,
  Settings,
  CheckCircle2,
  Smile,
  Quote,
} from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton';

const WHATSAPP_NUMBER = '5511999999999';

function openWhatsapp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, '_blank', 'noopener,noreferrer');
}

const services = [
  {
    icon: Droplets,
    title: 'Caça Vazamentos\nen Redes Hidráulicas',
    description:
      'Localizamos vazamentos em tubulações de água fria e quente em casas, apartamentos, empresas e indústrias.',
    link: '/servicos/caca-vazamento-residencial',
  },
  {
    icon: ScanSearch,
    title: 'Caça Vazamentos\nde Redes de Esgoto',
    description:
      'Identificamos vazamentos e problemas em tubulações de esgoto, caixas de gordura e prumadas.',
    link: '/servicos/vazamento-esgoto',
  },
  {
    icon: Waves,
    title: 'Caça Vazamentos\nem Piscinas',
    description:
      'Detectamos vazamentos em piscinas de alvenaria, vinil e fibra, evitando perda de água e danos estruturais.',
    link: '/servicos/vazamento-piscina',
  },
  {
    icon: Thermometer,
    title: 'Termografia\nInfravermelha',
    description:
      'Utilizamos câmeras térmicas para detectar variações de temperatura e localizar vazamentos com precisão.',
    link: '/servicos/termografia',
  },
  {
    icon: FileText,
    title: 'Laudos e Relatórios\nTécnicos',
    description:
      'Emitimos laudos técnicos detalhados com registro fotográfico e orientações para solução do problema.',
    link: '/servicos/laudo-tecnico',
  },
];

const differentials = [
  {
    icon: Settings,
    title: 'Tecnologia Avançada',
    description:
      'Equipamentos modernos que garantem precisão na detecção sem necessidade de quebrar paredes ou pisos.',
  },
  {
    icon: Clock3,
    title: 'Atendimento Rápido',
    description:
      'Equipe pronta para atender com agilidade em residências, condomínios, empresas e indústrias.',
  },
  {
    icon: UserCheck,
    title: 'Profissionais Qualificados',
    description:
      'Técnicos treinados e experientes para oferecer o melhor serviço com segurança e eficiência.',
  },
  {
    icon: Droplets,
    title: 'Soluções Eficientes',
    description:
      'Identificamos a causa do problema e orientamos a melhor solução para evitar novos vazamentos.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantia de Serviço',
    description:
      'Oferecemos garantia em nossos serviços, trazendo mais segurança e confiança para você.',
  },
];

const testimonials = [
  {
    name: 'Mariana S.',
    city: 'São Paulo - SP',
    text:
      'Excelente atendimento! Descobriram o vazamento que ninguém conseguia achar. Serviço rápido, limpo e profissional.',
    rating: 5,
    image: '/images/clientes/mariana.jpg',
  },
  {
    name: 'Carlos A.',
    city: 'Campinas - SP',
    text:
      'Tecnologia de ponta e equipe muito capacitada. Economizei tempo e dinheiro. Recomendo a todos!',
    rating: 5,
    image: '/images/clientes/carlos.jpg',
  },
  {
    name: 'Roberto T.',
    city: 'Sorocaba - SP',
    text:
      'Muito satisfeito com o serviço. Resolveram o problema da minha piscina e o consumo de água voltou ao normal.',
    rating: 5,
    image: '/images/clientes/roberto.jpg',
  },
];

function SectionTitle({ eyebrow, title, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className="text-sm font-extrabold uppercase tracking-wider text-blue-600">
        {eyebrow}
      </span>

      <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Caça Vazamentos | Detecção de Vazamentos com Tecnologia
        </title>

        <meta
          name="description"
          content="Localizamos vazamentos ocultos com equipamentos de alta tecnologia, sem quebrar paredes ou pisos. Caça vazamentos, termografia e laudos técnicos."
        />

        <link rel="canonical" href="https://seusite.com.br/" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Caça Vazamentos',
            image: 'https://seusite.com.br/logo.svg',
            telephone: '+5511999999999',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'São Paulo',
              addressRegion: 'SP',
              addressCountry: 'BR',
            },
            openingHours: 'Mo-Su 00:00-23:59',
            priceRange: '$$',
          })}
        </script>
      </Helmet>

      <Header />

      <main className="bg-white mt-10">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#06152d] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_45%,rgba(24,130,255,0.25),transparent_25%)]" />

          <div className="relative mx-auto grid min-h-[620px] max-w-[1440px] lg:grid-cols-[0.82fr_1.18fr]">
            {/* TEXTO */}
            <div className="relative z-10 flex items-center px-6 py-20 sm:px-10 lg:px-10 xl:px-12">
              <div className="max-w-[560px]">
                <h1 className="text-5xl font-black uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-[64px]">
                  Caça 
                  <span className="text-blue-500">
                    Vazamentos
                  </span>
                </h1>

                <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
                  Precisão que evita prejuízos.
                  <br />
                  Tecnologia que economiza água.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                  Localizamos vazamentos ocultos com equipamentos de alta
                  tecnologia, sem quebrar paredes ou pisos, evitando desperdício
                  de água e gastos desnecessários.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() =>
                      openWhatsapp(
                        'Olá! Gostaria de solicitar um orçamento para caça vazamento.'
                      )
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 px-6 py-4 text-sm font-extrabold text-white shadow-lg transition hover:bg-blue-600"
                  >
                    <CalendarDays size={18} />
                    Solicitar Orçamento
                  </button>

                  <Link
                    to="/servicos"
                    className="inline-flex items-center justify-center gap-3 rounded-md border border-white/60 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-white hover:text-slate-950"
                  >
                    Nossos Serviços
                    <ArrowRight size={18} />
                  </Link>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <Clock3
                      size={18}
                      className="shrink-0 text-blue-400"
                    />
                    Atendimento Rápido
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <ScanSearch
                      size={18}
                      className="shrink-0 text-blue-400"
                    />
                    Equipamentos Modernos
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <Settings
                      size={18}
                      className="shrink-0 text-blue-400"
                    />
                    Sem Quebra-Quebra
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <FileText
                      size={18}
                      className="shrink-0 text-blue-400"
                    />
                    Relatório Técnico
                  </div>
                </div>
              </div>
            </div>

            {/* IMAGEM */}
            <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
              <img
                src="/image_home/image.png"
                alt="Profissional realizando detecção de vazamento"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#06152d] via-[#06152d]/55 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06152d]/70 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVIÇOS EM DESTAQUE
        ====================================================== */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid lg:grid-cols-5">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    to={service.link}
                    className={`group px-6 py-8 transition hover:bg-slate-50 lg:px-7 ${
                      index !== services.length - 1
                        ? 'border-b border-slate-200 lg:border-b-0 lg:border-r'
                        : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-blue-600">
                        <Icon size={42} strokeWidth={1.6} />
                      </div>

                      <div>
                        <h3 className="whitespace-pre-line text-sm font-extrabold leading-5 text-slate-950">
                          {service.title}
                        </h3>

                        <p className="mt-5 text-xs leading-5 text-slate-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            SOBRE NÓS
        ====================================================== */}
        <section className="bg-[#f3f8ff] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <SectionTitle
                eyebrow="Sobre nós"
                title="Experiência, tecnologia e compromisso."
              />

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-700">
                Somos especialistas em detecção de vazamentos ocultos, com anos
                de experiência e equipamentos de última geração. Nosso
                compromisso é oferecer um serviço rápido, preciso e
                transparente, garantindo tranquilidade e economia para nossos
                clientes.
              </p>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-6">
                <div className="text-center sm:text-left">
                  <Trophy
                    size={38}
                    strokeWidth={1.7}
                    className="mx-auto text-blue-600 sm:mx-0"
                  />

                  <p className="mt-3 text-2xl font-black text-blue-600">
                    +10
                  </p>

                  <p className="text-xs font-medium text-slate-600">
                    Anos de
                    <br />
                    Experiência
                  </p>
                </div>

                <div className="text-center sm:text-left">
                  <CheckCircle2
                    size={38}
                    strokeWidth={1.7}
                    className="mx-auto text-blue-600 sm:mx-0"
                  />

                  <p className="mt-3 text-2xl font-black text-blue-600">
                    +5.000
                  </p>

                  <p className="text-xs font-medium text-slate-600">
                    Serviços
                    <br />
                    Realizados
                  </p>
                </div>

                <div className="text-center sm:text-left">
                  <Smile
                    size={38}
                    strokeWidth={1.7}
                    className="mx-auto text-blue-600 sm:mx-0"
                  />

                  <p className="mt-3 text-2xl font-black text-blue-600">
                    100%
                  </p>

                  <p className="text-xs font-medium text-slate-600">
                    Clientes
                    <br />
                    Satisfeitos
                  </p>
                </div>
              </div>

              <Link
                to="/sobre"
                className="mt-9 inline-flex items-center gap-2 text-sm font-extrabold text-blue-600 transition hover:text-blue-700"
              >
                Conheça nossa empresa
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/image_home/tecnico_com_geofone.png"
                alt="Profissional realizando detecção de vazamento em residência"
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            DIFERENCIAIS
        ====================================================== */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <SectionTitle
              eyebrow="Nossos diferenciais"
              title="Por que escolher a Caça Vazamentos?"
              centered
            />

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5">
              {differentials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`px-6 py-4 text-center ${
                      index !== differentials.length - 1
                        ? 'border-b border-slate-200 lg:border-b-0 lg:border-r'
                        : ''
                    }`}
                  >
                    <Icon
                      size={42}
                      strokeWidth={1.6}
                      className="mx-auto text-blue-600"
                    />

                    <h3 className="mt-5 text-sm font-extrabold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-xs leading-5 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            DEPOIMENTOS
        ====================================================== */}
        <section className="bg-[#f3f8ff] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <SectionTitle
              eyebrow="Depoimentos"
              title="O que nossos clientes dizem"
              centered
            />

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <Quote
                      size={37}
                      fill="currentColor"
                      className="text-blue-500"
                    />

                    <div className="flex gap-0.5">
                      {Array.from({
                        length: testimonial.rating,
                      }).map((_, index) => (
                        <span
                          key={index}
                          className="text-lg text-amber-400"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-700">
                    {testimonial.text}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-11 w-11 overflow-hidden rounded-full bg-slate-200">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold text-slate-950">
                        {testimonial.name}
                      </p>

                      <p className="text-xs text-slate-500">
                        {testimonial.city}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA FINAL
        ====================================================== */}
        <section className="bg-[#06152d] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-blue-400">
              Vazamento não espera
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Descubra o problema antes que ele cause mais prejuízos.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Entre em contato com nossa equipe e solicite uma avaliação para
              localizar o vazamento com precisão.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  openWhatsapp(
                    'Olá! Gostaria de solicitar um orçamento para caça vazamento.'
                  )
                }
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 px-7 py-4 text-sm font-extrabold transition hover:bg-blue-600"
              >
                <MessageCircle size={18} />
                Solicitar Orçamento
              </button>

              <a
                href="tel:+5511999999999"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-7 py-4 text-sm font-extrabold transition hover:bg-white hover:text-slate-950"
              >
                <Phone size={18} />
                (11) 99999-9999
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <WhatsappButton />
    </>
  );
}