import React from 'react';
import { CartProvider } from './context/CartContext';
import { PhotoProvider } from './context/PhotoContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { StylesSection } from './components/StylesSection';
import { ProcessSection } from './components/ProcessSection';
import { CustomOrderSection } from './components/CustomOrderSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickActions } from './components/QuickActions';
import { PhotoManagerModal } from './components/PhotoManagerModal';

export default function App() {
  return (
    <PhotoProvider>
      <CartProvider>
        <div className="min-h-screen bg-[#f6efe6] text-[#2a1a12] font-sans flex flex-col selection:bg-[#e8742a] selection:text-white">
          <Header />
          <main className="flex-1">
            <Hero />
            <AboutSection />
            <StylesSection />
            <ProcessSection />
            <CustomOrderSection />
            <ContactSection />
          </main>
          <Footer />
          <CartDrawer />
          <QuickActions />
          <PhotoManagerModal />
        </div>
      </CartProvider>
    </PhotoProvider>
  );
}
