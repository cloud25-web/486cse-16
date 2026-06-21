import { motion } from "framer-motion";

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        p-8
        bg-gradient-to-r
        from-[#6366F1]
        via-[#818CF8]
        to-[#93C5FD]]
        text-white
        shadow-xl
      "
    >
      
      {/* Background Blur Circle */}
      <div className="absolute top-[-50px] right-[-50px] w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

      {/* Text */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold leading-tight">
          Hey Buddy 👋
        </h1>

        <p className="mt-4 text-lg text-white/90 max-w-xl">
          Ready to organize your college life and crush your goals today?
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">

          <button 
          onClick={() => alert(" AI Assistant Coming Soon!")}
          className="
            bg-white
            text-[#6D28D9]
            px-5
            py-3
            rounded-2xl
            font-semibold
            hover:scale-105
            transition
          ">
            Open Assistant
          </button>

        </div>
      </div>

      {/* Buddy Animation */}
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="
          absolute
          bottom-4
          right-10
          text-7xl
        "
      >
        🧸
      </motion.div>

    </motion.div>
  );
}

export default HeroSection;