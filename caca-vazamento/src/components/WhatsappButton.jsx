// src/components/WhatsappButton.jsx
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/5511945697129"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}