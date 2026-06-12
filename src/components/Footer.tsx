export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-0 bg-[#F7F7F7] border-t border-[#E5E5E5] mt-12 md:hidden">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[11px] text-[#BBB] tracking-[0.05em] uppercase">
          &copy; {new Date().getFullYear()} PORTFOLIO — RUBY
        </div>
        
        <div className="flex gap-6 text-[11px] uppercase tracking-[0.05em]">
          <a href="#" className="text-[#999] hover:text-[#1A1A1A] transition-colors">Dribbble</a>
          <a href="#" className="text-[#999] hover:text-[#1A1A1A] transition-colors">Behance</a>
          <a href="#" className="text-[#999] hover:text-[#1A1A1A] transition-colors">LinkedIn</a>
          <a href="mailto:rubychaoran@gmail.com" className="text-[#999] hover:text-[#1A1A1A] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
