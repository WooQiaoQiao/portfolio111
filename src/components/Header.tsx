import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Resume', href: '#resume' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full md:w-[320px] h-[72px] md:h-screen md:border-r border-[#E5E5E5] bg-[#F7F7F7] z-50 p-6 md:p-10 flex flex-row md:flex-col justify-between items-center md:items-start transition-all">
      <div className="w-full flex justify-between items-center md:items-start md:flex-col">
        <div className="md:mb-12">
          <a href="#home" className="text-[24px] md:text-[32px] font-semibold tracking-[-0.03em] text-[#1A1A1A]">RUBY</a>
          <div className="text-[16px] text-[#666] hidden md:block mt-2 font-normal">Multidisciplinary Designer</div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-col gap-3">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-[14px] uppercase tracking-[0.1em] font-medium text-[#999] hover:text-[#1A1A1A] transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-[#1A1A1A]" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="hidden md:flex flex-col gap-6 mt-12">
        <a href="#resume" className="inline-block border border-[#1A1A1A] px-6 py-3 text-[12px] uppercase tracking-[0.1em] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors text-center w-max">
          View Resume / CV
        </a>
        <div className="text-[11px] text-[#BBB] tracking-[0.05em] uppercase">
          &copy; {new Date().getFullYear()} PORTFOLIO — RUBY
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-[#F7F7F7] text-[#1A1A1A] flex flex-col justify-center items-center gap-8 z-40 md:hidden"
        >
          {links.map((link, i) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-[20px] uppercase tracking-[0.1em] font-medium text-[#1A1A1A] hover:text-[#999] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </motion.a>
          ))}
          <a href="#resume" onClick={() => setIsOpen(false)} className="mt-4 border border-[#1A1A1A] px-6 py-3 text-[12px] uppercase tracking-[0.1em] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors">
            View Resume / CV
          </a>
        </motion.div>
      )}
    </header>
  );
}
