
import React from 'react';
import { ArrowRight, MapPin, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Satisfaits' },
    { icon: Star, value: '4.9/5', label: 'Note Moyenne' },
    { icon: MapPin, value: '15+', label: 'Villes Couvertes' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/65b6f083-cee7-482b-a717-d4f4a1ed6be7.png"
          alt="Villa moderne au Sénégal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue/20 rounded-full mb-6">
              <span className="text-brand-violet-light font-medium">🇸🇳 Expertise Sénégalaise</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Votre Partenaire
              <span className="block text-white">Immobilier</span>
              au Sénégal
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Accompagnement complet pour la diaspora et les investisseurs internationaux. 
              De l'acquisition à la gestion, nous guidons chaque étape de votre projet immobilier.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-3"
              >
                Démarrer Votre Projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
              >
                Nos Réalisations
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-brand-violet-light mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Trust indicators */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Présence Locale</h3>
                  <p className="text-gray-600">Bureau permanent à Dakar avec équipe locale expérimentée</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-violet rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expertise Diaspora</h3>
                  <p className="text-gray-600">Compréhension unique des besoins de la diaspora sénégalaise</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-purple rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service Premium</h3>
                  <p className="text-gray-600">Accompagnement personnalisé de A à Z pour chaque client</p>
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
