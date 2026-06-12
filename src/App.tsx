import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Resume from './components/Resume';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#F7F7F7] min-h-screen text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-white flex flex-col md:flex-row">
      <Header />
      <main className="flex-1 md:ml-[320px] w-full max-w-[1200px] mx-auto pt-24 md:pt-10 md:p-14 overflow-x-hidden">
        <Hero />
        <About />
        <Works />
        <Resume />
        <Footer />
      </main>
    </div>
  );
}
