
import React from 'react';
import { Building, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Recherche & sélection de biens',
      'Accompagnement Administratif',
      'Réalisation de plan',
      'Construction',
      'Gestion locative',
      'Rénovation & Entretien'
    ],
    company: [
      'À propos',
      'Nos valeurs',
      'Contact'
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/06748f36-5c9f-4fc6-83d4-54eb4a20f88b.png"
                alt="DiaspoLead Immo"
                className="h-16 w-auto"
              />
            </div>
            
            <p className="text-brand-blue font-medium text-lg">
              Expertise locale, Vision internationale
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire de confiance pour investir dans <span className="whitespace-nowrap">l'immobilier sénégalais.</span>
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-brand-blue" />
                <div className="flex flex-col">
                  <span>Sénégal: 00221 77 450 68 39</span>
                  <span>France: 0033 7 63 79 63 62</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-brand-blue" />
                <span>contact@diaspoleadimmo.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-brand-blue" />
                <span>Grand Mbao, Dakar - Sénégal</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="/services" 
                    className="text-gray-300 hover:text-brand-blue transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item === 'À propos' ? '/a-propos' : item === 'Contact' ? '/contact' : '#'}
                    className="text-gray-300 hover:text-brand-blue transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm space-y-2">
              <div>© {currentYear} DiaspoLead Immo. Tous droits réservés.</div>
              <div>DiaspoLead Immo est une activité du groupe DIASPOLEAD enregistré au RCCM de Dakar sous le n° SN DKR 2024B27087</div>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/politique-de-confidentialite" className="hover:text-brand-blue transition-colors duration-200">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
