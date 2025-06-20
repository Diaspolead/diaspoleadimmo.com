
import React from 'react';
import { Award, Globe, Heart, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Proximité',
      description: 'Nous comprenons les défis uniques de la diaspora sénégalaise'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Standards élevés dans chaque aspect de notre service'
    },
    {
      icon: Globe,
      title: 'Vision Internationale',
      description: 'Expertise locale combinée à une approche globale'
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
                <strong>SenegalEstate</strong> est née de la vision de faciliter l'investissement 
                immobilier au Sénégal pour la diaspora et les investisseurs internationaux. 
                Nous comprenons les défis uniques auxquels vous faites face lorsque vous 
                investissez à distance.
              </p>
              
              <p className="leading-relaxed">
                Notre équipe biculturelle, dirigée par des experts ayant vécu l'expérience 
                de la diaspora, vous offre un accompagnement personnalisé qui va au-delà 
                de la simple transaction immobilière. Nous sommes vos yeux et vos mains 
                sur le terrain sénégalais.
              </p>
              
              <p className="leading-relaxed">
                Avec plus de <strong>10 ans d'expérience</strong> dans l'immobilier sénégalais 
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

        {/* Team section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Notre Équipe</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Aminata Diallo',
                role: 'Directrice Générale',
                description: 'Expert en investissement immobilier, 15 ans d\'expérience diaspora',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Mamadou Fall',
                role: 'Directeur Commercial',
                description: 'Spécialiste marché sénégalais, réseau étendu de partenaires',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
              },
              {
                name: 'Fatou Sarr',
                role: 'Responsable Juridique',
                description: 'Avocate spécialisée droit immobilier et transactions internationales',
                image: 'https://images.unsplash.com/photo-1594736797933-d0b22d3fbc90?auto=format&fit=crop&w=400&q=80'
              }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-brand-blue font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
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
