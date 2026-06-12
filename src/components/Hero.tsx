import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center py-20 px-6 md:px-0">
      <div className="max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[32px] md:text-[48px] font-semibold tracking-[-0.03em] leading-[1.2] text-[#1A1A1A] mb-6"
        >
          Designing clarity in <br className="hidden md:block" />
          complex spaces.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[15px] leading-[1.6] text-[#444] font-sans max-w-xl"
        >
          A multidisciplinary designer specializing in interactive experiences, spatial environments, and minimalist graphic design.
        </motion.p>
      </div>
    </section>
  );
}
