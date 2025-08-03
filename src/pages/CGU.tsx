import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CGU = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation (CGU)</h1>
          
          <p className="text-sm text-gray-600 mb-8">Dernière mise à jour : 01-08-2025</p>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Objet du site</h2>
              <p>
                Le Site a pour objectif de fournir des informations, des outils et des services d'accompagnement dans le cadre de projets immobiliers (achat, construction, financement, conseils juridiques, etc.) au Sénégal, à destination de la diaspora sénégalaise et des investisseurs internationaux.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Acceptation des conditions</h2>
              <p>
                L'accès et l'utilisation du Site impliquent l'acceptation pleine et entière des présentes CGU par l'utilisateur. Si vous n'acceptez pas ces conditions, vous êtes prié de ne pas utiliser le Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Accès au site</h2>
              <p>
                Le Site est accessible gratuitement à tout utilisateur disposant d'un accès internet. Tous les coûts relatifs à l'accès au Site (matériel, logiciels, connexion internet) sont à la charge de l'utilisateur. Certaines parties ou fonctionnalités du Site peuvent être réservées aux utilisateurs enregistrés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Services proposés</h2>
              <p>Le Site propose notamment :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Des conseils en ligne, en présence physique ou toute autre moyen sur l'investissement immobilier au Sénégal ;</li>
                <li>Un accompagnement personnalisé pour les projets immobiliers (études de faisabilité, mise en relation, due diligence) ;</li>
                <li>Une sélection de biens immobiliers vérifiés ;</li>
                <li>Des services complémentaires (juridiques, notariaux, financiers, etc).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Inscription et compte utilisateur</h2>
              <p>
                Pour bénéficier de certains services, l'utilisateur peut être amené à créer un compte. L'utilisateur s'engage à fournir des informations exactes, complètes et à jour. Il est seul responsable de la confidentialité de ses identifiants et de toute activité liée à son compte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Propriété intellectuelle</h2>
              <p>
                Tous les contenus présents sur le Site (textes, images, vidéos, logos, marques, base de données) sont protégés par le droit de la propriété intellectuelle. Toute reproduction ou utilisation non autorisée des contenus est strictement interdite sans l'accord préalable écrit de DiaspoLead Immo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Responsabilité</h2>
              <p>
                Le Site fournit des informations à titre indicatif. Malgré tous les efforts, aucune garantie n'est donnée quant à leur exactitude ou leur actualité. Le Site ne saurait être tenu responsable des décisions ou actions prises sur la base de ces informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Liens hypertextes</h2>
              <p>
                Le Site peut contenir des liens vers d'autres sites. Diaspolead-immo.com ne peut être tenu responsable du contenu de ces sites tiers ni des dommages pouvant résulter de leur consultation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Données personnelles</h2>
              <p>
                Les données collectées dans le cadre de l'utilisation du Site sont traitées conformément à la politique de confidentialité du Site, accessible [ici/lien à insérer]. L'utilisateur dispose de droits d'accès, de rectification et de suppression de ses données.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Modification des CGU</h2>
              <p>
                [Nom de l'entreprise] se réserve le droit de modifier à tout moment les présentes CGU. Les utilisateurs seront informés des changements via le Site. L'utilisation continue du Site vaut acceptation des CGU modifiées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Droit applicable et juridiction compétente</h2>
              <p>
                Les présentes CGU sont soumises au droit sénégalais. En cas de litige, compétence exclusive est attribuée aux tribunaux de Dakar, sauf disposition légale contraire.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
              <p>
                Pour toute question relative à ces CGU, vous pouvez nous contacter à :
              </p>
              <p>
                📧 contact@diaspoleadimmo.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CGU;