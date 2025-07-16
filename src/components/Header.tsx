
import React, { useState } from 'react';
import { Menu, X, Home, Users, Building, Phone, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Building },
    { name: 'Comment ça marche', href: '/comment-ca-marche', icon: HelpCircle },
    { name: 'À Propos', href: '/a-propos', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/7c42b477-1a73-4282-9dc7-72620d718da8.png"
                alt="DiaspoLead Immo - La garantie de vos projets immobiliers au Sénégal"
                className="h-16 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-brand-blue hover:text-brand-blue-dark transition-colors duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              className="bg-brand-blue hover:bg-brand-blue-dark"
              onClick={scrollToContact}
            >
              Consultation Gratuite
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-2 text-brand-blue hover:text-brand-blue-dark hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="px-4 pt-4">
                <Button 
                  className="w-full bg-brand-blue hover:bg-brand-blue-dark"
                  onClick={scrollToContact}
                >
                  Consultation Gratuite
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
