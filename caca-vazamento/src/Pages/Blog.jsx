import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton';
import { Helmet } from 'react-helmet-async';

const posts = [
  {
    title: 'Como identificar vazamento antes que vire dano estrutural',
    excerpt: 'Sinais como manchas, aumento de conta e umidade podem indicar que o problema já está mais avançado do que parece.',
    date: '12 ago 2026',
  },
  {
    title: 'Por que não quebrar piso e parede para localizar um vazamento',
    excerpt: 'Métodos modernos de detecção eletrônica permitem encontrar a origem do problema com menor impacto ao imóvel.',
    date: '08 ago 2026',
  },
  {
    title: 'Laudo técnico: por que ele faz diferença na hora da correção',
    excerpt: 'Um diagnóstico bem documentado ajuda a evitar retrabalho e orienta a escolha do melhor tratamento para cada caso.',
    date: '02 ago 2026',
  },
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Dicas e Artigos sobre Vazamentos</title>
        <meta name="description" content="Artigos e dicas sobre vazamentos, infiltrações e manutenção de imóveis." />
      </Helmet>

      <Header />

      <main className="pt-20 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <p className="text-primary font-semibold uppercase tracking-[0.2em] text-xs">Blog</p>
            <h1 className="mt-4 text-4xl font-black text-primary">Dicas para cuidar melhor do seu imóvel</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="rounded-3xl bg-white p-7 shadow-sm border border-gray-100">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Dica
                </div>
                <h2 className="text-xl font-bold text-primary mb-3">{post.title}</h2>
                <p className="text-gray-600 leading-7">{post.excerpt}</p>
                <p className="mt-6 text-sm text-gray-500">{post.date}</p>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}