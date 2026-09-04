import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Truck,
  Container,
  Factory,
  Building2,
  PackageOpen,
  Wrench,
  ShieldCheck,
  Clock,
  Users,
  Award,
} from "lucide-react";

const services = [
  {
    title: "Locação de Caminhão Munck",
    description:
      "Atendimento especializado com equipamentos modernos e operadores qualificados.",
    icon: <Truck className="w-8 h-8" />,
  },
  {
    title: "Içamento de Máquinas",
    description:
      "Movimentação segura de equipamentos pesados com precisão e agilidade.",
    icon: <Factory className="w-8 h-8" />,
  },
  {
    title: "Transporte de Containers",
    description:
      "Transporte rápido e seguro para containers de todos os tamanhos.",
    icon: <Container className="w-8 h-8" />,
  },
  {
    title: "Movimentação Industrial",
    description:
      "Soluções completas para realocação e instalação de maquinário industrial.",
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    title: "Estruturas Metálicas",
    description:
      "Içamento e montagem de estruturas metálicas com equipe especializada.",
    icon: <PackageOpen className="w-8 h-8" />,
  },
  {
    title: "Remoção de Equipamentos",
    description:
      "Remoção e transporte de equipamentos com total segurança e eficiência.",
    icon: <Wrench className="w-8 h-8" />,
  },
];

const advantages = [
  {
    title: "Equipe Especializada",
    icon: <Users className="w-10 h-10" />,
    description: "Profissionais treinados e certificados para cada operação.",
  },
  {
    title: "Atendimento Rápido",
    icon: <Clock className="w-10 h-10" />,
    description: "Resposta imediata e agendamento flexível para sua necessidade.",
  },
  {
    title: "Segurança Garantida",
    icon: <ShieldCheck className="w-10 h-10" />,
    description: "Rigorosos protocolos de segurança em todos os serviços.",
  },
  {
    title: "Frota Moderna",
    icon: <Award className="w-10 h-10" />,
    description: "Caminhões e equipamentos de última geração.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-24 overflow-hidden">
        {/* HERO */}
        <section id="inicio" className="relative bg-gradient-to-br from-gray-50 to-gray-100">
          {/* Elemento decorativo */}
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

          <div className="container mx-auto px-6 py-28 lg:py-36 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-700 font-semibold rounded-full text-sm uppercase tracking-wider">
                Locação de Caminhão Munck
              </span>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                Rapidez, Segurança e{" "}
                <span className="text-red-600">Eficiência</span> para sua Obra
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Soluções completas para movimentação de cargas, içamentos
                industriais e transporte de equipamentos. Conte com nossa
                experiência e frota moderna.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group relative bg-red-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-red-600/20 hover:bg-red-700 hover:shadow-red-700/30 transition-all duration-300 hover:-translate-y-0.5">
                  Solicitar Orçamento
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full animate-ping opacity-75"></span>
                </button>
                <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 hover:-translate-y-0.5">
                  Saiba Mais
                </button>
              </div>

              {/* Mini estatísticas */}
              <div className="flex gap-8 pt-8">
                <div>
                  <p className="text-3xl font-bold text-gray-900">+15</p>
                  <p className="text-sm text-gray-500">Anos de experiência</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">+500</p>
                  <p className="text-sm text-gray-500">Serviços realizados</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-500">Segurança garantida</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="/images/munck.png"
                alt="Caminhão Munck em operação"
                className="relative rounded-2xl shadow-2xl shadow-gray-900/10 w-full object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="container mx-auto px-6 py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
              O que fazemos
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-gray-900">
              Nossos Serviços
            </h2>
            <p className="mt-4 text-gray-600">
              Oferecemos soluções completas e personalizadas para atender às
              necessidades do seu projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-200 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="h-16 w-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all">
                  Saiba mais
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
          {/* Padrão de fundo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-red-400 font-semibold uppercase tracking-wider text-sm">
                Diferenciais
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-3">
                Por que escolher nossa empresa?
              </h2>
              <p className="mt-4 text-gray-400">
                Compromisso com excelência, segurança e satisfação total do
                cliente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {advantages.map((advantage, index) => (
                <div
                  key={advantage.title}
                  className="text-center group hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 mx-auto flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:shadow-red-700/50 group-hover:scale-110 transition-all duration-300">
                    {advantage.icon}
                  </div>
                  <h3 className="font-bold text-xl mt-6 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section
          id="empresa"
          className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl blur-2xl opacity-10"></div>
            <img
              src="/images/caminhao.jpg"
              alt="Frota de caminhões"
              className="relative rounded-2xl shadow-2xl shadow-gray-900/10 w-full object-cover hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <p className="text-4xl font-extrabold text-red-600">15+</p>
              <p className="text-sm text-gray-600 font-medium">
                Anos de
                <br />
                Experiência
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
              Nossa História
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 leading-tight">
              Mais de 15 anos oferecendo soluções em içamentos
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-8">
              Atuamos em obras industriais, mineração, construção civil e
              transporte de equipamentos pesados, sempre priorizando segurança,
              pontualidade e qualidade.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Equipe altamente treinada e certificada",
                "Frota moderna e bem equipada",
                "Atendimento personalizado e flexível",
                "Compromisso com prazos e resultados",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-red-700 to-red-600 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 text-center text-white relative">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Precisa de um Caminhão Munck?
            </h2>
            <p className="mt-4 text-xl text-red-100">
              Solicite um orçamento agora mesmo e receba uma resposta rápida.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Falar pelo WhatsApp
              </a>
              <button className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white transition-all duration-300">
                Ligar Agora
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}