import { Home, Building, Factory, Droplets, Building2, Umbrella, Wrench, Flame } from 'lucide-react';

export const services = [
  {
    id: 'residencial',
    title: 'Caça Vazamento Residencial',
    description: 'Localização precisa de vazamentos em casas e apartamentos sem quebrar.',
    icon: Home,
    slug: '/caca-vazamento-residencial'
  },
  {
    id: 'comercial',
    title: 'Caça Vazamento Comercial',
    description: 'Soluções para empresas, lojas e escritórios com mínimo impacto.',
    icon: Building,
    slug: '/caca-vazamento-comercial'
  },
  {
    id: 'industrial',
    title: 'Caça Vazamento Industrial',
    description: 'Equipamentos de alta precisão para plantas industriais.',
    icon: Factory,
    slug: '/caca-vazamento-industrial'
  },
  {
    id: 'piscinas',
    title: 'Caça Vazamento em Piscinas',
    description: 'Detecção de vazamentos em piscinas de concreto, vinil e fibra.',
    icon: Droplets,
    slug: '/vazamento-piscina'
  },
  {
    id: 'condominios',
    title: 'Caça Vazamento em Condomínios',
    description: 'Atendimento especial para áreas comuns, garagens e apartamentos.',
    icon: Building2,
    slug: '/vazamento-condominio'
  },
  {
    id: 'infiltracoes',
    title: 'Infiltrações',
    description: 'Diagnóstico e solução para infiltrações em lajes, paredes e tetos.',
    icon: Umbrella,
    slug: '/infiltracoes'
  },
  {
    id: 'rede-hidraulica',
    title: 'Rede Hidráulica',
    description: 'Inspeção completa de tubulações de água fria e quente.',
    icon: Wrench,
    slug: '/rede-hidraulica'
  },
  {
    id: 'agua-quente',
    title: 'Tubulação de Água Quente',
    description: 'Localização de vazamentos em sistemas de aquecimento.',
    icon: Flame,
    slug: '/tubulacao-agua-quente'
  }
];