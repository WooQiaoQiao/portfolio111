import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-0 border-t border-[#E5E5E5]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[10px] uppercase tracking-[0.2em] text-[#999] font-medium"
          >
            About Me // 自我介绍
          </motion.h2>
        </div>
        <div className="md:w-3/4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-[15px] leading-[1.6] text-[#444]"
          >
            <p>
              Hi, I'm Ruby. I operate at the intersection of digital and physical environments, believing that good design is fundamentally about clarity and intent.
            </p>
            <p>
              My work spans interactive screen interfaces, physical spatial layouts, and foundational graphic design. This multidisciplinary approach allows me to craft holistic experiences rather than isolated touchpoints.
            </p>
            <p className="text-[#999]">
              Less noise, more signal.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
