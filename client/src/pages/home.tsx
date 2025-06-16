import { useEffect } from "react";
import AnimatedBackground from "@/components/animated-background";
import HeroSection from "@/components/hero-section";
import RegistrationSection from "@/components/registration-section";
import ProgramSection from "@/components/program-section";
import PartnersSection from "@/components/partners-section";
import logoImg from "@assets/logo_1750094435561.png";
import partnersImg from "@assets/partners_1750094435562.png";

export default function Home() {
  useEffect(() => {
    // Smooth scroll for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const id = target.href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: 'var(--space-navy)' }}>
      <AnimatedBackground />
      
      {/* Header */}
      <header className="relative z-20 py-4 px-6" style={{ background: 'linear-gradient(135deg, hsl(240, 55%, 9%) 0%, hsl(249, 57%, 20%) 50%, hsl(258, 52%, 28%) 100%)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logoImg} alt="Ночной забег Королёв" className="h-12 w-auto" />
            <div className="hidden md:flex items-center space-x-2">
              <img src={partnersImg} alt="Партнёры" className="h-8 w-auto opacity-80" />
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#registration" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Регистрация
            </a>
            <a 
              href="#program" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Программа
            </a>
            <a 
              href="#partners" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Партнёры
            </a>
          </nav>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <HeroSection />
      <RegistrationSection />
      <ProgramSection />
      <PartnersSection />

      {/* Footer */}
      <footer className="py-12 border-t border-white/10" style={{ backgroundColor: 'var(--space-navy)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">Ночной забег Королёв</h3>
              <p className="text-gray-400">
                Космический забег под звёздным небом. Присоединяйтесь к нам 28 июня 2025 года!
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: korolev@night-run.ru</p>
                <p>Адрес: г. Королёв, Московская область</p>
              </div>
            </div>

          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Ночной забег Королёв. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
