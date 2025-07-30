
import React from 'react';
import { Building, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

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
    resources: [
      'Guide de l\'acheteur',
      'Marché immobilier',
      'Fiscalité',
      'Financement'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/06748f36-5c9f-4fc6-83d4-54eb4a20f88b.png"
                alt="DiaspoLead Immo"
                className="h-16 w-auto"
              />
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire de confiance pour investir dans l'immobilier sénégalais. 
              Expertise locale, vision internationale.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-brand-blue" />
                <span>+221 77 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-brand-blue" />
                <span>contact@woorimmo.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-brand-blue" />
                <span>Almadies, Dakar - Sénégal</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-blue transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
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

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Ressources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href="/comment-ca-marche" 
                    className="text-gray-300 hover:text-brand-blue transition-colors duration-200"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <p className="text-sm text-gray-400 mb-4">
                Recevez nos conseils et opportunités
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-brand-blue"
                />
                <button className="px-4 py-2 bg-brand-blue hover:bg-brand-blue-dark rounded-r-lg transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} DiaspoLead Immo. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-brand-blue transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="hover:text-brand-blue transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-brand-blue transition-colors duration-200">
                CGU
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
