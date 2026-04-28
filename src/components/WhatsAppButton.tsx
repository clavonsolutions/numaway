import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { NAP } from "@/lib/nap";

const WhatsAppButton = () => {
  const defaultMessage = "Hello! I'm interested in studying abroad and would like to learn more about Numaway's services.";
  const whatsappUrl = `${NAP.whatsappUrl}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[hsl(var(--whatsapp))] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[hsl(var(--whatsapp))] animate-ping opacity-30" />
    </motion.a>
  );
};

export default WhatsAppButton;
