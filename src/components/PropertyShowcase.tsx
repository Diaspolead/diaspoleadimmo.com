
import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PropertyShowcase = () => {
  const properties = [
    {
      id: 1,
      title: 'Immeuble Moderne R+4',
      location: 'Dakar, Sénégal',
      bedrooms: null,
      bathrooms: null,
      area: 450,
      type: 'Immeuble',
      image: '/lovable-uploads/d1535e04-a215-482c-b941-7b48d44c6e68.png'
    },
    {
      id: 2,
      title: 'Villa de Luxe avec Balcons',
      location: 'Almadies, Dakar',
      bedrooms: 6,
      bathrooms: 4,
      area: 320,
      type: 'Villa',
      image: '/lovable-uploads/61c96c09-019a-49ae-9388-804df8767e7f.png'
    },
    {
      id: 3,
      title: 'Résidence Moderne en Construction',
      location: 'Plateau, Dakar',
      bedrooms: 4,
      bathrooms: 3,
      area: 180,
      type: 'Résidence',
      image: '/lovable-uploads/f74e2db8-3e4f-456e-93eb-ef3ca45d237e.png'
    },
    {
      id: 4,
      title: 'Villa Contemporaine',
      location: 'Saly, Mbour',
      bedrooms: 5,
      bathrooms: 3,
      area: 280,
      type: 'Villa',
      image: '/lovable-uploads/8995c1ed-f6bd-4cb9-8b8f-b028309a8b3a.png'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-uns des projets que nous avons accompagnés 
            avec succès pour nos clients de la diaspora.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {property.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  {property.bedrooms && (
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Bed className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{property.bedrooms}</div>
                      <div className="text-xs text-gray-500">Chambres</div>
                    </div>
                  )}
                  
                  {property.bathrooms && (
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Bath className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{property.bathrooms}</div>
                      <div className="text-xs text-gray-500">SDB</div>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Square className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900">{property.area}</div>
                    <div className="text-xs text-gray-500">m²</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vous Avez un Projet Similaire ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Que ce soit pour une résidence principale, un investissement locatif ou 
              l'acquisition d'un terrain, nous vous accompagnons dans toutes vos démarches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-blue text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-blue-dark transition-colors duration-200">
                Voir Toutes Nos Offres
              </button>
              <button className="border border-brand-blue text-brand-blue font-semibold px-8 py-3 rounded-lg hover:bg-brand-blue hover:text-white transition-colors duration-200">
                Estimer Mon Projet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
