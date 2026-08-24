import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home'));
const Servicos = lazy(() => import('../Pages/Service'));
const CacaVazamentoResidencial = lazy(() => import('../Pages/CacaVazamentoResidencial'));
const Contato = lazy(() => import('../Pages/Contato'));
const Blog = lazy(() => import('../Pages/Blog'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/caca-vazamento-residencial" element={<CacaVazamentoResidencial />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}