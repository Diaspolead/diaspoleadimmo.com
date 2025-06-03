
import React, { useState } from 'react';
import { Building2, Search, FileText, PenTool, Construction, Key, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Recherche & Sélection de biens',
      description: 'Identification des meilleures opportunités selon vos critères et budget',
      features: ['Analyse de marché approfondie', 'Visites virtuelles et physiques', 'Rapports détaillés avec photos'],
      details: 'Notre équipe d\'experts analyse le marché immobilier sénégalais pour identifier les meilleures opportunités d\'investissement. Nous utilisons des critères précis basés sur vos besoins, votre budget et vos objectifs d\'investissement. Chaque bien est évalué selon sa localisation, son potentiel de valorisation et sa rentabilité.',
      color: 'bg-brand-blue'
    },
    {
      icon: FileText,
      title: 'Accompagnement Juridique',
      description: 'Gestion complète des aspects légaux et administratifs',
      features: ['Vérification des titres de propriété', 'Négociation de contrats', 'Suivi notarial complet'],
      details: 'Nous vous accompagnons dans toutes les démarches juridiques et administratives liées à votre acquisition. Notre équipe juridique vérifie la validité des titres, s\'assure de la conformité réglementaire et vous protège contre tous les risques juridiques. Nous gérons également les relations avec les notaires et les administrations.',
      color: 'bg-brand-violet'
    },
    {
      icon: PenTool,
      title: 'Réalisation de plan',
      description: 'Conception architecturale adaptée au climat sénégalais',
      features: ['Plans personnalisés', 'Architecture bioclimatique', 'Respect des normes locales'],
      details: 'Nos architectes conçoivent des plans sur mesure adaptés au climat tropical et aux spécificités du Sénégal. Nous privilégions une architecture bioclimatique qui optimise le confort thermique naturel, réduit les coûts énergétiques et respecte l\'environnement local tout en intégrant vos préférences esthétiques.',
      color: 'bg-brand-purple'
    },
    {
      icon: Construction,
      title: 'Construction',
      description: 'Réalisation clés en main avec matériaux de qualité',
      features: ['Gestion de chantier', 'Matériaux certifiés', 'Suivi qualité rigoureux'],
      details: 'Nous prenons en charge l\'intégralité de votre projet de construction, de la fondation à la remise des clés. Notre réseau d\'artisans qualifiés et notre système de contrôle qualité garantissent une construction aux normes internationales. Nous utilisons des matériaux adaptés au climat local et respectueux de l\'environnement.',
      color: 'bg-brand-blue'
    },
    {
      icon: Key,
      title: 'Gestion locative',
      description: 'Administration complète de vos biens immobiliers',
      features: ['Recherche de locataires', 'Encaissement des loyers', 'Maintenance préventive'],
      details: 'Notre service de gestion locative vous permet de rentabiliser votre investissement sans contrainte. Nous nous occupons de la recherche et sélection des locataires, de l\'encaissement des loyers, des états des lieux, et de toute la gestion administrative. Un reporting mensuel vous tient informé de la performance de votre bien.',
      color: 'bg-brand-violet'
    },
    {
      icon: Wrench,
      title: 'Rénovation & Entretien',
      description: 'Valorisation et maintenance de votre patrimoine',
      features: ['Rénovation complète', 'Entretien préventif', 'Mise aux normes'],
      details: 'Nous prenons soin de votre patrimoine immobilier avec des services de rénovation et d\'entretien adaptés au climat sénégalais. Notre équipe intervient pour la maintenance préventive, les réparations urgentes, et les projets de rénovation pour valoriser vos biens. Nous utilisons des matériaux résistants et durables.',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Detailed Services Accordion */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Détails de nos services
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {services.map((service, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold">{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pl-14">
                  <p className="text-gray-600 leading-relaxed">{service.details}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
