
import React from 'react';
import { Building2, Search, FileText, Key, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Recherche & Sélection',
      description: 'Identification des meilleures opportunités selon vos critères et budget',
      features: ['Analyse de marché', 'Visites virtuelles', 'Rapports détaillés'],
      color: 'bg-brand-blue'
    },
    {
      icon: FileText,
      title: 'Accompagnement Juridique',
      description: 'Gestion complète des aspects légaux et administratifs',
      features: ['Vérification titres', 'Négociation contrats', 'Suivi notarial'],
      color: 'bg-brand-violet'
    },
    {
      icon: TrendingUp,
      title: 'Conseil en Investissement',
      description: 'Stratégies d\'investissement adaptées au marché sénégalais',
      features: ['Analyse rentabilité', 'Projections fiscales', 'Optimisation portfolio'],
      color: 'bg-brand-purple'
    },
    {
      icon: Building2,
      title: 'Gestion de Patrimoine',
      description: 'Administration et valorisation de vos biens immobiliers',
      features: ['Gestion locative', 'Maintenance', 'Optimisation revenus'],
      color: 'bg-brand-blue'
    },
    {
      icon: Key,
      title: 'Clés en Main',
      description: 'Service complet pour propriétaires à distance',
      features: ['Aménagement', 'Ameublement', 'Mise en location'],
      color: 'bg-brand-violet'
    },
    {
      icon: Shield,
      title: 'Sécurisation',
      description: 'Protection et assurance de vos investissements',
      features: ['Due diligence', 'Assurances', 'Suivi post-achat'],
      color: 'bg-brand-purple'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise complète pour accompagner votre projet immobilier au Sénégal, 
            de la recherche à la gestion de votre patrimoine.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="gradient-blue-violet p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à Concrétiser Votre Projet ?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Bénéficiez d'une consultation gratuite avec nos experts
            </p>
            <button className="bg-white text-brand-blue font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Réserver Ma Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
