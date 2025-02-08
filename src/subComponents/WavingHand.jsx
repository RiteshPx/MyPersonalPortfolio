import { motion } from "framer-motion";

export default function WavingHand() {
  return (
    <div className="flex items-center   text-4xl font-bold">
      <span className="ml-2">Hi There!</span>

      <motion.span
        animate={{ rotate: [0, 20, 0] }} // Hand wave motion
        transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
      >
        👋
      </motion.span>
      <span className="ml-2"> I'm</span>

     </div>
  );
}
