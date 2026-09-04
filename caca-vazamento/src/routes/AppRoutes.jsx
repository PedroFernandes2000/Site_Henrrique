import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home'));
const HomeLider = lazy(() => import('../Pages/HomeLider'));
const Servicos = lazy(() => import('../Pages/Service'));
const Atendimento = lazy(() => import('../Pages/Atendimento'));
const Depoimentos = lazy(() => import('../Pages/Depoimentos'));
const CacaVazamentoResidencial = lazy(() => import('../Pages/CacaVazamentoResidencial'));
const Contato = lazy(() => import('../Pages/Contato'));
const Blog = lazy(() => import('../Pages/Blog'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/lider' element={<HomeLider />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/servicos/:slug" element={<Servicos />} />
      <Route path="/atendimento" element={<Atendimento />} />
      <Route path="/atendimento/:slug" element={<Atendimento />} />
      <Route path="/depoimentos" element={<Depoimentos />} />
      <Route path="/caca-vazamento-residencial" element={<CacaVazamentoResidencial />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}