import { useEffect, useState } from "react";
import AnimatedBackground from "@/components/animated-background";
import HeroSection from "@/components/hero-section";
import NewRegistrationSection from "@/components/new-registration-section";
import PhotoGallerySection from "@/components/photo-gallery-section";
import ProgramSection from "@/components/program-section";
import PartnersSection from "@/components/partners-section";
// Временные заглушки для изображений
const logoImg = "/api/placeholder/200/80";
const partnersImg = "/api/placeholder/800/200";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    // Handle scroll for floating header
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    document.addEventListener('click', handleSmoothScroll);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: 'var(--space-navy)' }}>
      <AnimatedBackground />
      
      {/* Floating Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 floating-header-compact' 
          : 'py-4 floating-header'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={logoImg} 
              alt="Ночной забег Королёв" 
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-8' : 'h-12'}`} 
            />
            <div className="hidden md:flex items-center space-x-2">
              <img 
                src={partnersImg} 
                alt="Партнёры" 
                className={`w-auto opacity-80 transition-all duration-300 ${isScrolled ? 'h-6' : 'h-8'}`} 
              />
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
          <button 
            className="md:hidden text-white z-60"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 floating-header-compact border-t border-white/10">
            <nav className="flex flex-col p-6 space-y-4">
              <a 
                href="#registration" 
                className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Регистрация
              </a>
              <a 
                href="#program" 
                className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Программа
              </a>
              <a 
                href="#partners" 
                className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Партнёры
              </a>
            </nav>
          </div>
        )}
      </header>

      <HeroSection />
      <NewRegistrationSection />
      <ProgramSection />
      <PartnersSection />

      {/* Footer */}
      <footer className="py-12 border-t border-white/10" style={{ backgroundColor: 'var(--space-navy)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
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
            <a 
              href="/admin" 
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-300 mt-2 inline-block"
            >
              Администрирование
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
