import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import WhatsappButton from '../components/WhatsappButton';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Contato() {
  return (
    <>
      <Helmet>
        <title>Contato | Atendimento 24h</title>
      </Helmet>

      <Header />

      <main className="pt-20 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-primary font-semibold uppercase tracking-[0.2em] text-xs">Contato</p>
            <h1 className="mt-4 text-4xl font-black text-primary mb-8">Fale Conosco</h1>
            <div className="space-y-4 mb-8">
              <p className="flex items-center gap-3 text-gray-700"><Phone className="text-primary" /> (11) 99999-9999</p>
              <p className="flex items-center gap-3 text-gray-700"><MessageCircle className="text-whatsapp" /> WhatsApp 24h</p>
              <p className="flex items-center gap-3 text-gray-700"><MapPin className="text-primary" /> São Paulo e região metropolitana</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}