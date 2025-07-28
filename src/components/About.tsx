
import React from 'react';
import { Award, Globe, Heart, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Proximité',
      description: 'Nous comprenons les défis uniques de la diaspora sénégalaise et des investisseurs internationaux'
    },
    {
      icon: Award,
      title: 'Expertise professionnelle',
      description: 'Nous mettons à votre disposition une expertise professionnelle pour vous accompagner dans tous vos projets immobiliers au Sénégal.'
    },
    {
      icon: Globe,
      title: 'Sécurité et transparence',
      description: 'Nous vous garantissons la réalisation de vos projets immobiliers en respectant les normes légales et réglementaires en vigueur.'
    },
    {
      icon: Target,
      title: 'Résultats',
      description: 'Focus sur la réussite concrète de vos projets'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Votre Partenaire de Confiance
              <span className="block text-brand-blue">au Sénégal</span>
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                <strong>WOOR IMMO</strong> est née de la vision de faciliter l'investissement 
                immobilier au Sénégal pour la diaspora et les investisseurs internationaux. 
                Nous comprenons les défis uniques auxquels vous faites face lorsque vous 
                investissez à distance.
              </p>
              
              <p className="leading-relaxed">
                Notre équipe, dirigée par des experts ayant vécu l'expérience 
                de la diaspora, vous offre un accompagnement personnalisé qui va au-delà 
                de la simple transaction immobilière. Nous sommes vos yeux et vos mains 
                sur le terrain sénégalais.
              </p>
              
              <p className="leading-relaxed">
                Avec plus de <strong>20 ans d'expérience</strong> dans l'immobilier sénégalais 
                et un réseau solide de partenaires locaux, nous transformons votre projet 
                en réalité, en toute sécurité et transparence.
              </p>
            </div>
          </div>

          {/* Right content - Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Nos Valeurs</h3>
            
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-brand-blue hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
