import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  Menu,
  X,
  PhoneCall,
  MapPin,
  Clock3,
  Mail,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Aluguel de Munck", href: "#servicos" },
    { label: "Iançamentos", href: "#empresa" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg shadow-black/5">

      {/* Barra Superior */}
      <div className="bg-zinc-900 text-white text-sm">
        <div className="container mx-auto h-10 px-6 flex items-center justify-between">

          <p className="hidden md:block text-zinc-300">
            Aluguel de Munck • Atendimento em toda a região
          </p>

          <div className="flex items-center gap-6 ml-auto">

            <a
              href="tel:+5511999999999"
              className="flex items-center gap-2 hover:text-red-400 transition"
            >
              <PhoneCall size={15} />
              (11) 94762-7842
            </a>

          </div>

        </div>
      </div>

      {/* Área Central */}
      <div className="bg-white/95 backdrop-blur-md">

        <div className="container mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white shadow-lg shadow-red-600/30">
              <Truck size={28} />
            </div>

            <div>
              <h2 className="font-black text-3xl tracking-tight">
                MUNCK
                <span className="text-red-600">.</span>
              </h2>

              <p className="text-xs text-gray-500">
                Locação e Içamentos
              </p>
            </div>
          </Link>

          {/* Informações */}

          <div className="hidden lg:flex items-center gap-12">

            <Info
              icon={<Clock3 size={20} />}
              title="Horário Comercial"
              text="Seg-Dom 08:00 - 22:00"
            />

            <Info
              icon={<MapPin size={20} />}
              title="Onde estamos?"
              text="São Paulo - SP"
            />

            <Info
              icon={<Mail size={20} />}
              title="E-mail"
              text="contato@empresa.com.br"
            />

          </div>

          {/* Mobile */}

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>

      </div>

      {/* Barra Vermelha */}

      <div className="bg-red-600">

        <div className="container mx-auto flex justify-between items-center">

          <nav className="hidden lg:flex">

            {navItems.map((item) => (

              <a
                key={item.label}
                href={item.href}
                className="px-6 py-5 text-white font-semibold hover:bg-red-700 transition"
              >
                {item.label}
              </a>

            ))}

          </nav>

          <a
            href="https://wa.me/550000000000"
            className="hidden lg:flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-5 font-semibold transition"
          >
            <PhoneCall size={18} />
            Solicitar Orçamento
          </a>

        </div>

      </div>

      {/* Menu Mobile */}

      {isOpen && (
        <div className="lg:hidden bg-white border-t">

          <nav className="flex flex-col p-6 gap-2">

            {navItems.map((item) => (

              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 hover:bg-red-50 hover:text-red-600 transition"
              >
                {item.label}
              </a>

            ))}

            <a
              href="https://wa.me/550000000000"
              className="mt-4 rounded-xl bg-red-600 text-white py-3 flex justify-center font-semibold"
            >
              Solicitar Orçamento
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}

function Info({ icon, title, text }) {
  return (
    <div className="flex items-center gap-4">

      <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
        {icon}
      </div>

      <div>

        <p className="text-xs uppercase tracking-wide text-gray-400">
          {title}
        </p>

        <p className="font-semibold text-gray-800">
          {text}
        </p>

      </div>

    </div>
  );
}