import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';

const NosValeurs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default NosValeurs;