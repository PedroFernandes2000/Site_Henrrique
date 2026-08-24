import React, { useEffect, useState } from 'react';

/**
 * Página: Caça Vazamento - Empresas
 * Componente base criado para listagem de empresas/pontos de contato.
 * Adapte conforme necessidade (API, roteamento, estilos, etc.).
 */
const CacaVazamentoEmpresas = () => {
	const [empresas, setEmpresas] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		// placeholder: carregar empresas locais ou via API
		setLoading(true);
		const timer = setTimeout(() => {
			// dados de exemplo
			setEmpresas([
				{ id: 1, nome: 'Empresa A', telefone: '(11) 99999-0000', cidade: 'São Paulo' },
				{ id: 2, nome: 'Empresa B', telefone: '(21) 98888-1111', cidade: 'Rio de Janeiro' },
			]);
			setLoading(false);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div style={{ padding: 20 }}>
			<h1>Caça Vazamento — Empresas</h1>

			{loading && <p>Carregando empresas...</p>}
			{error && <p style={{ color: 'red' }}>{error}</p>}

			{!loading && empresas.length === 0 && <p>Nenhuma empresa encontrada.</p>}

			<ul>
				{empresas.map((e) => (
					<li key={e.id} style={{ marginBottom: 8 }}>
						<strong>{e.nome}</strong> — {e.cidade} — {e.telefone}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CacaVazamentoEmpresas;

