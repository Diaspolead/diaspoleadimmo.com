import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['Sénégal: 00221 77 450 68 39', 'France: 0033 7 63 79 63 62'],
      color: 'bg-senegal-green'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@diaspolead-immo.com'],
      color: 'bg-senegal-gold'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Centre Avicole de Grand Mbao,', 'Villa N° 506, Dakar - Sénégal'],
      color: 'bg-senegal-red'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-Nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à concrétiser votre projet immobilier au Sénégal ? 
            Notre équipe est là pour vous accompagner à chaque étape.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Restons en Contact
              </h3>
              <p className="text-gray-600 mb-8">
                Consultation gratuite pour évaluer votre projet et vous présenter 
                nos solutions personnalisées.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Contact */}
            <Card className="bg-gradient-to-r from-senegal-green to-senegal-gold text-white">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-lg mb-2">Consultation Express</h4>
                <p className="text-sm opacity-90 mb-4">
                  Appelez-nous maintenant pour un premier échange
                </p>
                <Button 
                  variant="secondary" 
                  className="bg-white text-senegal-green hover:bg-gray-100 font-semibold"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler Maintenant
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Demande de Consultation
                </CardTitle>
                <p className="text-gray-600">
                  Remplissez ce formulaire et nous vous recontactons sous 24h
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <Input placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <Input placeholder="Votre nom" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="votre@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <Input placeholder="+221 / +33..." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de projet
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-senegal-green focus:border-senegal-green">
                    <option>Sélectionnez votre projet</option>
                    <option>Achat résidence principale</option>
                    <option>Investissement locatif</option>
                    <option>Terrain à construire</option>
                    <option>Gestion de patrimoine</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget indicatif
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-senegal-green focus:border-senegal-green">
                    <option>Sélectionnez votre budget</option>
                    <option>Moins de 50M FCFA</option>
                    <option>50M - 100M FCFA</option>
                    <option>100M - 200M FCFA</option>
                    <option>Plus de 200M FCFA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Décrivez votre projet
                  </label>
                  <Textarea 
                    placeholder="Parlez-nous de vos objectifs, délais, contraintes..."
                    rows={4}
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-senegal-green hover:bg-senegal-green/90 text-white font-semibold py-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer Ma Demande
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe. 
                  Vos données sont protégées et ne seront jamais partagées.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
