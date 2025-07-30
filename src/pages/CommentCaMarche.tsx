
import React from 'react';
import { ArrowRight, FileText, CheckCircle, Users, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CommentCaMarche = () => {
  const steps = [
    {
      number: 1,
      title: "Définition de votre projet",
      description: "Vous avez un projet immobilier au Sénégal (réalisation de plan, construction, achat/vente de terrain, de maison ou d'appartement, location, rénovation et décoration).",
      detail: "Vous nous détaillez précisément votre demande par mail, par téléphone ou en remplissant le formulaire de contact.",
      icon: FileText,
      color: "bg-teal-600"
    },
    {
      number: 2,
      title: "Proposition",
      description: "Nous vous proposons 1 à 2 offres correspondant à votre projet en vous expliquant si nécessaires les avantages et les inconvénients de chacune des propositions.",
      icon: CheckCircle,
      color: "bg-teal-600"
    },
    {
      number: 3,
      title: "Choix",
      description: "Vous nous faites part de votre choix parmi les propositions que vous avez reçues.",
      icon: Users,
      color: "bg-teal-600"
    },
    {
      number: 4,
      title: "Accompagnement",
      description: "Nous prenons en mains l'ensemble des démarches administratives et techniques jusqu'à la réalisation de votre projet tout en effectuant un suivi rigoureux.",
      icon: Cog,
      color: "bg-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
            Comment ça marche ?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre processus simple et efficace en 4 étapes pour concrétiser votre projet immobilier au Sénégal
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step Card */}
                <Card className="h-full transition-transform hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-6">
                    {/* Step Header */}
                    <div className="text-center mb-6">
                      <div className={`${step.color} text-white px-4 py-2 rounded-lg inline-block mb-4`}>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold">{step.number}-</span>
                          <span className="font-semibold">{step.title}</span>
                        </div>
                      </div>
                      <step.icon className="w-12 h-12 text-teal-600 mx-auto" />
                    </div>

                    {/* Step Content */}
                    <div className="text-center">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      {step.detail && (
                        <p className="text-gray-600 text-sm italic">
                          {step.detail}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow connector (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-teal-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et personnalisée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue-dark">
                Démarrer Mon Projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                Nos Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommentCaMarche;
