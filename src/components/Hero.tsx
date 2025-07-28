
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
              <span className="text-white">Le Partenaire de Confiance de la Diaspora et des Investisseurs internationaux pour leurs Projets Immobiliers au Sénégal</span>
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

          {/* Right content - Logo and Trust indicators */}
          <div className="space-y-6 animate-fade-in">
            
            
            <Card className="p-6 bg-brand-blue">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Présence Locale</h3>
                  <p className="text-white/90">Bureau permanent à Dakar avec équipe locale expérimentée</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-brand-violet">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-violet" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Expertise Diaspora</h3>
                  <p className="text-white/90">Compréhension unique des besoins de la diaspora sénégalaise</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-brand-purple">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-brand-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Service Premium</h3>
                  <p className="text-white/90">Accompagnement personnalisé de A à Z pour chaque client</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
