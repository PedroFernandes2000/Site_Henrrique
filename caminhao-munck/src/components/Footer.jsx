export default function Footer() {
    return (
        <footer
            id="contato"
            className="bg-gray-900 text-white mt-20"
        >
            <div className="container mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        Empresa
                    </h2>

                    <p className="text-gray-300">
                        Especialistas em locação de Caminhão Munck,
                        içamentos, transporte de cargas e apoio para
                        construção civil.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        Contato
                    </h2>

                    <p>(31) 99999-9999</p>
                    <p>contato@empresa.com.br</p>
                    <p>Belo Horizonte - MG</p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        Atendimento
                    </h2>

                    <p>Segunda a Sexta</p>
                    <p>08:00 às 18:00</p>

                    <a
                        href="https://wa.me/550000000000"
                        className="inline-block mt-4 bg-red-600 px-5 py-3 rounded-lg"
                    >
                        Falar no WhatsApp
                    </a>
                </div>

            </div>

            
        </footer>
    );
}