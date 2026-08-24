import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function ServiceLayout({ title, description, image, content }) {
  return (
    <>
      <Helmet>
        <title>{title} | Caça Vazamento</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl font-bold text-white">
              {title}
            </motion.h1>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 prose lg:prose-lg">
            {content}
          </div>
        </section>
        <ContactForm />
        <FAQ />

      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}