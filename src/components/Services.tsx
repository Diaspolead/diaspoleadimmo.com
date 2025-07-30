import React, { useState } from 'react';
import { Building2, Search, FileText, PenTool, Construction, Key, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Recherche & Sélection de biens',
      description: 'Identification des meilleures opportunités selon vos critères et budget: achat de terrain, de maison, d\'appartement',
      features: ['Analyse de marché approfondie', 'Rapports détaillés avec photos'],
      details: 'Notre équipe d\'experts analyse le marché immobilier sénégalais pour identifier les meilleures opportunités d\'investissement. Nous utilisons des critères précis basés sur vos besoins, votre budget et vos objectifs d\'investissement. Chaque bien est évalué selon sa localisation, son potentiel de valorisation et sa rentabilité.',
      color: 'bg-brand-blue',
      image: '/lovable-uploads/9d244248-4aee-49d5-b073-d1a3ccdb928a.png'
    },
    {
      icon: FileText,
      title: 'Accompagnement Administrative',
      description: 'Gestion complète des aspects légaux et administratifs',
      features: ['Vérification des titres de propriété', 'Suivi notarial complet'],
      details: 'Nous vous accompagnons dans toutes les démarches juridiques et administratives liées à votre acquisition. Notre équipe juridique vérifie la validité des titres, s\'assure de la conformité réglementaire et vous protège contre tous les risques juridiques. Nous gérons également les relations avec les notaires et les administrations.',
      color: 'bg-brand-violet',
      image: '/lovable-uploads/9ca2326a-9c4b-4563-bd39-8f515fd498ea.png'
    },
    {
      icon: PenTool,
      title: 'Réalisation de plan',
      description: 'Conception architecturale adaptée au climat sénégalais',
      features: ['Plans personnalisés', 'Respect des normes locales'],
      details: 'Nos architectes conçoivent des plans sur mesure adaptés au climat tropical et aux spécificités du Sénégal. Nous privilégions une architecture bioclimatique qui optimise le confort thermique naturel, réduit les coûts énergétiques et respecte l\'environnement local tout en intégrant vos préférences esthétiques.',
      color: 'bg-brand-purple',
      image: '/lovable-uploads/0f5f1445-a0b3-40a6-b1c3-14d63098783a.png'
    },
    {
      icon: Construction,
      title: 'Construction',
      description: 'Réalisation clés en main avec matériaux de qualité',
      features: ['Gestion de chantier jusqu\'à la livraison', 'Suivi qualité rigoureux'],
      details: 'Nous prenons en charge l\'intégralité de votre projet de construction, de la fondation à la remise des clés. Notre réseau d\'artisans qualifiés et notre système de contrôle qualité garantissent une construction aux normes internationales. Nous utilisons des matériaux adaptés au climat local et respectueux de l\'environnement.',
      color: 'bg-brand-blue',
      image: '/lovable-uploads/7ea407cb-3b64-46ab-87d0-f0e0ddc427f8.png'
    },
    {
      icon: Key,
      title: 'Gestion locative',
      description: 'Administration complète de vos biens immobiliers',
      features: ['Recherche de locataires', 'Encaissement des loyers'],
      details: 'Notre service de gestion locative vous permet de rentabiliser votre investissement sans contrainte. Nous nous occupons de la recherche et sélection des locataires, de l\'encaissement des loyers, des états des lieux, et de toute la gestion administrative. Un reporting mensuel vous tient informé de la performance de votre bien.',
      color: 'bg-brand-violet',
      image: '/lovable-uploads/082b92a0-6722-42c0-b616-b6b37de09a63.png'
    },
    {
      icon: Wrench,
      title: 'Rénovation & Entretien',
      description: 'Valorisation et maintenance de votre patrimoine',
      features: ['Rénovation complète', 'Entretien préventif'],
      details: 'Nous prenons soin de votre patrimoine immobilier avec des services de rénovation et d\'entretien adaptés au climat sénégalais. Notre équipe intervient pour la maintenance préventive, les réparations urgentes, et les projets de rénovation pour valoriser vos biens. Nous utilisons des matériaux résistants et durables.',
      color: 'bg-brand-purple',
      image: '/lovable-uploads/ce4bda76-9ffb-4df8-9033-a5801d21ef1f.png'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <CardHeader>
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
            <Link to="/contact" className="bg-white text-brand-blue font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-block">
              Réserver Ma Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
