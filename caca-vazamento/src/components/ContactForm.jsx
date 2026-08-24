// src/components/ContactForm.jsx
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aqui você pode enviar para API, e-mail ou formatar para WhatsApp
    const message = `Nome: ${data.name}\nTelefone: ${data.phone}\nServiço: ${data.service}\nMensagem: ${data.message}`;
    window.open(`https://wa.me/5511945697129?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('name', { required: 'Nome é obrigatório' })}
          placeholder="Seu nome"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>
      <div>
        <input
          {...register('phone', { required: 'Telefone é obrigatório' })}
          placeholder="Telefone/WhatsApp"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
      </div>
      <div>
        <select
          {...register('service')}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Selecione o serviço</option>
          <option value="residencial">Caça Vazamento Residencial</option>
          <option value="comercial">Caça Vazamento Comercial</option>
          <option value="piscina">Vazamento em Piscina</option>
          <option value="condominio">Vazamento em Condomínio</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <div>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Descreva o problema"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}