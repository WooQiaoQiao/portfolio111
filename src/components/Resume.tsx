import { motion } from 'motion/react';
import { experiences } from '../data';

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6 md:px-0 border-t border-[#E5E5E5] bg-[#F7F7F7]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[10px] uppercase tracking-[0.2em] text-[#999] font-medium"
          >
            Experience // 简历
          </motion.h2>
        </div>
        
        <div className="md:w-3/4 max-w-2xl flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#999] mb-2">
                {exp.period}
              </div>
              <h4 className="text-[18px] font-medium text-[#1A1A1A] mb-1">
                {exp.role}
              </h4>
              <div className="text-[14px] text-[#666] mb-4">
                {exp.company}
              </div>
              <p className="text-[15px] leading-[1.6] text-[#444]">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
