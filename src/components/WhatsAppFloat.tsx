import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Send } from "lucide-react";

const WhatsAppFloat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "917743877426";

  const sendMessage = () => {
    const text = message.trim() || "Hello! I have an enquiry about your products.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setOpen(false);
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Chat popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-80 rounded-2xl overflow-hidden shadow-2xl border border-border"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
  <img
    src="/logo.png"
    alt="Viato Industries"
    className="h-8 w-8 object-contain"
  />
</div>
                <div>
                  <p className="font-bold text-white text-sm">Viato Industries</p>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/80 animate-pulse" />
                    <p className="text-white/80 text-xs">Typically replies instantly</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-7 w-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="h-4 w-4 text-white" />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="bg-[#ECE5DD] px-4 py-5">
              <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-[85%]">
                <p className="text-[#111] text-sm leading-relaxed">
                  👋 Hi! Welcome to <strong>Viato Industries</strong>.
                  <br /><br />
                  How can we help you today? Ask us about:
                </p>
                <ul className="mt-2 space-y-1">
                  {[
                    "Gas Pipeline Systems",
                    "Material Handling Equipment",
                    "Packaging Solutions",
                    "Get a Quote",
                  ].map((item) => (
                    <li
                      key={item}
                      onClick={() => {
                        setMessage(`Hi! I'm interested in ${item}.`);
                      }}
                      className="text-xs text-[#25D366] font-semibold cursor-pointer hover:underline"
                    >
                      → {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-gray-400 mt-2 text-right">Just now</p>
              </div>
            </div>

            {/* Input */}
            <div className="bg-[#F0F0F0] px-3 py-3 flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 bg-white rounded-full px-4 py-2.5 text-sm text-gray-800 outline-none border-none shadow-sm placeholder:text-gray-400"
              />
              <motion.button
                onClick={sendMessage}
                className="h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="h-4 w-4 text-white ml-0.5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <div className="relative">
        {/* Ping ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        )}

        <motion.button
          onClick={() => setOpen(!open)}
          className="relative h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-green-500/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                {/* WhatsApp SVG icon */}
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

    </div>
  );
};

export default WhatsAppFloat;
