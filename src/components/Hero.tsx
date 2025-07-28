
import React from 'react';
import { ArrowRight, MapPin, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRealisations = () => {
    const realisationsSection = document.querySelector('[data-section="realisations"]');
    if (realisationsSection) {
      realisationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background with solid color */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950">
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white animate-fade-in">
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Réalisez vos Projets Immobiliers au Sénégal en étant à distance</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              DiaspoLead Immo accompagne ses clients en particulier la diaspora africaine et des investisseurs internationaux à réaliser leurs projets immobiliers au Sénégal, en toute sérénité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-3"
                onClick={scrollToContact}
              >
                Démarrer Votre Projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-brand-violet hover:bg-brand-violet-dark text-white border-brand-violet hover:border-brand-violet-dark px-8 py-3"
                onClick={scrollToRealisations}
              >
                Nos Réalisations
              </Button>
            </div>
          </div>

          {/* Right content - Property Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/dde7e626-1dc8-43cb-9e88-63844f17e3bc.png"
                alt="Villa moderne au Sénégal - Projet DiaspoLead Immo"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
