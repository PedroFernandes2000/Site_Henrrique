// src/pages/Home.jsx

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const whatsappNumber = '5511945697129';

  const openWhatsapp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const nome = formData.get('nome');
    const telefone = formData.get('telefone');
    const cidade = formData.get('cidade');
    const servico = formData.get('servico');
    const problema = formData.get('problema');

    const mensagem = `
Olá! Gostaria de solicitar um orçamento para caça-vazamento.

Nome: ${nome}
Telefone: ${telefone}
Cidade/Bairro: ${cidade}
Serviço: ${servico}
Problema: ${problema}
    `.trim();

    openWhatsapp(mensagem);
  };

  const servicos = [
    {
      icon: '🔎',
      title: 'Caça-vazamento residencial',
      description:
        'Localizamos vazamentos em casas, apartamentos e imóveis residenciais utilizando técnicas e equipamentos adequados para cada situação.',
    },
    {
      icon: '💧',
      title: 'Vazamento em tubulações',
      description:
        'Investigação de vazamentos em tubulações de água, registros, conexões e redes hidráulicas.',
    },
    {
      icon: '🏢',
      title: 'Vazamento em condomínios',
      description:
        'Atendimento para apartamentos, áreas comuns, prumadas e redes hidráulicas de condomínios.',
    },
    {
      icon: '🧱',
      title: 'Vazamento oculto',
      description:
        'Identificação de vazamentos que não estão visíveis, reduzindo a necessidade de quebrar pisos e paredes.',
    },
    {
      icon: '📉',
      title: 'Aumento inesperado na conta',
      description:
        'Ajudamos a investigar possíveis vazamentos quando o consumo de água aumenta sem uma causa aparente.',
    },
    {
      icon: '📄',
      title: 'Laudo técnico',
      description:
        'Após a avaliação, podemos fornecer informações técnicas sobre a origem e localização do problema.',
    },
  ];

  const vantagens = [
    {
      title: 'Sem quebra desnecessária',
      description:
        'Primeiro localizamos o problema. A intervenção física somente é realizada quando realmente necessária.',
    },
    {
      title: 'Equipamentos adequados',
      description:
        'Utilizamos métodos de detecção compatíveis com o tipo de vazamento e a estrutura do imóvel.',
    },
    {
      title: 'Orçamento antes do serviço',
      description:
        'Você recebe as informações sobre o serviço antes da execução para decidir como deseja prosseguir.',
    },
    {
      title: 'Atendimento rápido',
      description:
        'Entre em contato pelo WhatsApp para explicar o problema e verificar a disponibilidade de atendimento.',
    },
  ];

  const faqs = [
    {
      question: 'Como saber se existe um vazamento oculto?',
      answer:
        'Alguns sinais são aumento inesperado na conta de água, manchas de umidade, mofo, pintura descascando, piso úmido ou consumo de água mesmo com os pontos de utilização fechados.',
    },
    {
      question: 'É preciso quebrar a parede para encontrar o vazamento?',
      answer:
        'Nem sempre. O objetivo da detecção é justamente localizar o ponto suspeito antes de uma intervenção, reduzindo quebras desnecessárias.',
    },
    {
      question: 'Vocês atendem apartamentos e condomínios?',
      answer:
        'Sim. O serviço pode ser realizado em casas, apartamentos, condomínios, estabelecimentos comerciais e outros tipos de imóveis.',
    },
    {
      question: 'Vocês fazem o reparo depois de encontrar o vazamento?',
      answer:
        'Isso depende do serviço contratado. A detecção e a localização do vazamento podem ser realizadas separadamente do reparo hidráulico.',
    },
    {
      question: 'Existe orçamento antes da execução?',
      answer:
        'Sim. Após entender o problema e avaliar as condições do atendimento, apresentamos as informações necessárias antes da execução do serviço.',
    },
  ];

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Helmet>
        <title>Caça Vazamento 24h | Encontre o vazamento sem quebrar</title>

        <meta
          name="description"
          content="Caça vazamento com equipamentos de detecção. Localizamos vazamentos ocultos em casas, apartamentos e empresas. Atendimento rápido e orçamento."
        />

        <link rel="canonical" href="https://seusite.com.br/" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Caça Vazamento',
            image: 'https://seusite.com.br/logo.svg',
            telephone: '+5511945697129',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'São Paulo',
              addressRegion: 'SP',
              addressCountry: 'BR',
            },
            openingHours: 'Mo-Su 00:00-23:59',
            priceRange: '$$',
            description:
              'Serviço de caça-vazamento e detecção de vazamentos ocultos em imóveis residenciais e comerciais.',
          })}
        </script>
      </Helmet>

      <Header />

      <main className="overflow-hidden mt-6">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.18),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-300">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  Atendimento rápido e profissional
                </div>

                <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Descubra onde está o vazamento
                  <span className="text-sky-400"> sem quebrar tudo.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Localizamos vazamentos ocultos em paredes, pisos e tubulações
                  utilizando técnicas de detecção para identificar o problema
                  antes de iniciar uma obra desnecessária.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={() =>
                      openWhatsapp(
                        'Olá! Gostaria de solicitar um orçamento para caça-vazamento.'
                      )
                    }
                    className="rounded-xl bg-green-500 px-7 py-4 text-center font-bold text-white shadow-lg transition hover:bg-green-600 hover:shadow-xl"
                  >
                    💬 Falar pelo WhatsApp
                  </button>

                  <a
                    href="#orcamento"
                    className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
                  >
                    Solicitar orçamento
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
                  <div>
                    <p className="text-2xl font-extrabold">24h</p>
                    <p className="text-sm text-slate-400">Atendimento</p>
                  </div>

                  <div>
                    <p className="text-2xl font-extrabold">🔎</p>
                    <p className="text-sm text-slate-400">Detecção precisa</p>
                  </div>

                  <div>
                    <p className="text-2xl font-extrabold">✓</p>
                    <p className="text-sm text-slate-400">Orçamento</p>
                  </div>

                  <div>
                    <p className="text-2xl font-extrabold">🏠</p>
                    <p className="text-sm text-slate-400">Residencial</p>
                  </div>
                </div>
              </div>

              <div className="lg:pl-8">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                  <div className="rounded-2xl bg-white p-7 text-slate-900">
                    <div className="mb-5">
                      <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                        Diagnóstico
                      </p>

                      <h2 className="mt-2 text-2xl font-extrabold">
                        O vazamento não aparece?
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Explique o que está acontecendo e entre em contato para
                        verificar o atendimento.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        'Conta de água aumentando',
                        'Parede ou piso úmido',
                        'Manchas e mofo',
                        'Água aparecendo sem explicação',
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            ✓
                          </span>

                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        openWhatsapp(
                          'Olá! Estou com um possível vazamento e gostaria de saber como funciona a avaliação.'
                        )
                      }
                      className="mt-6 w-full rounded-xl bg-slate-950 px-5 py-4 font-bold text-white transition hover:bg-slate-800"
                    >
                      Quero identificar o vazamento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            AVISO / BENEFÍCIOS
        ========================================================= */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            <div>
              <p className="font-bold text-slate-900">🔎 Detecção do problema</p>
              <p className="mt-1 text-sm text-slate-500">
                Investigação do ponto suspeito.
              </p>
            </div>

            <div>
              <p className="font-bold text-slate-900">🧱 Menos quebra</p>
              <p className="mt-1 text-sm text-slate-500">
                Evite abrir a estrutura sem necessidade.
              </p>
            </div>

            <div>
              <p className="font-bold text-slate-900">📋 Avaliação</p>
              <p className="mt-1 text-sm text-slate-500">
                Entenda a possível origem do problema.
              </p>
            </div>

            <div>
              <p className="font-bold text-slate-900">📱 WhatsApp</p>
              <p className="mt-1 text-sm text-slate-500">
                Atendimento direto e rápido.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            ORÇAMENTO
        ========================================================= */}
        <section id="orcamento" className="bg-slate-50 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
                  Solicite uma avaliação
                </span>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Conte o que está acontecendo
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Quanto mais detalhes você enviar, mais fácil será entender o
                  seu caso e direcionar o atendimento.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      1
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">
                        Você explica o problema
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Informe os sinais de vazamento e a localização.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      2
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">
                        Avaliamos o atendimento
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Entendemos a situação e as condições do imóvel.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      3
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">
                        Identificamos o problema
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        O objetivo é encontrar a origem do vazamento com o
                        mínimo de intervenção.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200 sm:p-8"
              >
                <div className="grid gap-5">
                  <div>
                    <label
                      htmlFor="nome"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Seu nome
                    </label>

                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      placeholder="Como podemos te chamar?"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Telefone / WhatsApp
                    </label>

                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      placeholder="(11) 90000-0000"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cidade"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Cidade / bairro
                    </label>

                    <input
                      id="cidade"
                      name="cidade"
                      type="text"
                      placeholder="Onde será o serviço?"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="servico"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Tipo de problema
                    </label>

                    <select
                      id="servico"
                      name="servico"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                    >
                      <option value="Caça-vazamento">
                        Caça-vazamento
                      </option>
                      <option value="Vazamento em parede">
                        Vazamento em parede
                      </option>
                      <option value="Vazamento no piso">
                        Vazamento no piso
                      </option>
                      <option value="Aumento da conta de água">
                        Aumento da conta de água
                      </option>
                      <option value="Vazamento em apartamento">
                        Vazamento em apartamento
                      </option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="problema"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Conte o que está acontecendo
                    </label>

                    <textarea
                      id="problema"
                      name="problema"
                      rows="4"
                      placeholder="Ex.: apareceu uma mancha de umidade na parede do banheiro..."
                      className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-xl bg-sky-600 px-5 py-4 font-bold text-white transition hover:bg-sky-700"
                  >
                    Solicitar orçamento pelo WhatsApp
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-500">
                    Ao enviar, você será direcionado ao WhatsApp com os dados
                    preenchidos.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVIÇOS
        ========================================================= */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
                Nossos serviços
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Encontramos diferentes tipos de vazamento
              </h2>

              <p className="mt-4 text-lg text-slate-600">
                Cada situação exige uma investigação específica. O primeiro
                passo é identificar os sinais e entender a origem provável do
                problema.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicos.map((servico) => (
                <article
                  key={servico.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-2xl">
                    {servico.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    {servico.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {servico.description}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      openWhatsapp(
                        `Olá! Gostaria de saber mais sobre o serviço de ${servico.title}.`
                      )
                    }
                    className="mt-5 font-bold text-sky-600 transition group-hover:text-sky-700"
                  >
                    Saber mais →
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            PROCESSO
        ========================================================= */}
        <section className="bg-slate-950 py-20 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-sky-400">
                Como funciona
              </span>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Do primeiro contato à localização do vazamento
              </h2>
            </div>

            <div className="mt-14 grid gap-10 md:grid-cols-4">
              {[
                {
                  number: '01',
                  title: 'Você chama',
                  description:
                    'Entre em contato pelo WhatsApp e explique os sinais que identificou no imóvel.',
                },
                {
                  number: '02',
                  title: 'Entendemos o caso',
                  description:
                    'Avaliamos as informações e identificamos os próximos passos para a investigação.',
                },
                {
                  number: '03',
                  title: 'Investigamos',
                  description:
                    'Utilizamos os métodos adequados para localizar a possível origem do vazamento.',
                },
                {
                  number: '04',
                  title: 'Você decide',
                  description:
                    'Com o diagnóstico em mãos, você pode decidir como deseja prosseguir com o reparo.',
                },
              ].map((step) => (
                <div key={step.number} className="relative">
                  <span className="text-5xl font-black text-sky-500/30">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            DIFERENCIAIS
        ========================================================= */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
                  Por que nos contratar
                </span>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                  O objetivo é encontrar o problema antes de começar a quebrar
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Um vazamento oculto pode causar desperdício de água,
                  infiltrações, manchas, mofo e danos à estrutura. Por isso, a
                  localização correta do problema é uma etapa importante antes
                  de qualquer reparo.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    openWhatsapp(
                      'Olá! Gostaria de conversar sobre um possível vazamento.'
                    )
                  }
                  className="mt-8 rounded-xl bg-sky-600 px-6 py-4 font-bold text-white transition hover:bg-sky-700"
                >
                  Falar com um especialista
                </button>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {vantagens.map((vantagem) => (
                  <div
                    key={vantagem.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-600">
                      ✓
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-950">
                      {vantagem.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {vantagem.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SINAIS DE VAZAMENTO
        ========================================================= */}
        <section className="bg-sky-50 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
                  Fique atento
                </span>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                  Sua casa pode estar avisando que existe um vazamento
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Alguns vazamentos acontecem dentro da parede ou sob o piso e
                  não aparecem imediatamente. Observar os primeiros sinais pode
                  evitar um problema maior.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Conta de água aumentando',
                  'Manchas de umidade',
                  'Pintura descascando',
                  'Mofo ou bolor',
                  'Piso constantemente úmido',
                  'Água aparecendo sem causa aparente',
                ].map((sinal) => (
                  <div
                    key={sinal}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      ✓
                    </span>

                    <span className="text-sm font-semibold text-slate-800">
                      {sinal}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================= */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
                Perguntas frequentes
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Dúvidas sobre caça-vazamento
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-5 p-5 text-left font-bold text-slate-900"
                    >
                      <span>{faq.question}</span>

                      <span
                        className={`text-xl text-sky-600 transition-transform duration-200 ${
                          isOpen ? 'rotate-45' : 'rotate-0'
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 max-w-3xl text-sm leading-7 text-slate-600">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>       
      </main>

      <Footer />

      <WhatsappButton />
    </>
  );
}