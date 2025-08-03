import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            
            <section>
              <p className="text-lg font-medium">
                Bienvenue sur le site de DiaspoLead Immo !
              </p>
              <p>
                Les présentes conditions générales définissent les règles d'utilisation du site web de DiaspoLead Immo, situé à l'adresse https://diaspoleadimmo.com.
              </p>
              <p>
                En accédant à ce site, nous considérons que vous acceptez ces conditions. Ne continuez pas à utiliser DiaspoLead Immo si vous n'acceptez pas tous les termes et conditions énoncés sur cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies</h2>
              <p>
                Le site web utilise des cookies pour personnaliser votre expérience en ligne. En accédant à DiaspoLead Immo, vous acceptez d'utiliser les cookies nécessaires.
              </p>
              <p>
                Un cookie est un fichier texte placé sur votre disque dur par un serveur de pages web. Les cookies ne peuvent pas être utilisés pour exécuter des programmes ou transmettre des virus à votre ordinateur. Les cookies vous sont attribués de manière unique et ne peuvent être lus que par un serveur web du domaine qui a émis le cookie.
              </p>
              <p>
                Nous pouvons utiliser des cookies pour collecter, stocker et suivre des informations à des fins statistiques ou de marketing pour faire fonctionner notre site web. Vous avez la possibilité d'accepter ou de refuser les cookies facultatifs. Certains cookies obligatoires sont nécessaires au fonctionnement de notre site web. Ces cookies ne requièrent pas votre consentement car ils fonctionnent toujours. Veuillez garder à l'esprit qu'en acceptant les cookies obligatoires, vous acceptez également les cookies de tiers, qui peuvent être utilisés via des services fournis par des tiers si vous utilisez ces services sur notre site web, par exemple, une fenêtre d'affichage vidéo fournie par des tiers et intégrée à notre site web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Licence</h2>
              <p>
                Sauf indication contraire, DiaspoLead Immo et/ou ses concédants de licence détiennent les droits de propriété intellectuelle sur l'ensemble du contenu de DiaspoLead Immo. Tous les droits de propriété intellectuelle sont réservés. Vous pouvez accéder à ce site de DiaspoLead Immo pour votre usage personnel, sous réserve des restrictions énoncées dans les présentes conditions générales.
              </p>
              <p>Vous ne devez pas :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>copier ou republier le contenu de DiaspoLead Immo</li>
                <li>vendre, louer ou concéder des sous-licences sur le contenu de DiaspoLead Immo</li>
                <li>reproduire, dupliquer ou copier le contenu de DiaspoLead Immo</li>
                <li>redistribuer le contenu de DiaspoLead Immo</li>
              </ul>
              <p>Le présent accord entre en vigueur dès la mise en ligne de ce site internet.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Commentaires des utilisateurs</h2>
              <p>
                Certaines parties de ce site web offrent aux utilisateurs la possibilité de publier et d'échanger des opinions et des informations dans certaines zones du site. DiaspoLead Immo ne filtre pas, n'édite pas, ne publie pas et ne vérifie pas les commentaires avant qu'ils ne soient publiés sur le site web. Les commentaires ne reflètent pas les points de vue et les opinions de DiaspoLead Immo, de ses agents et/ou de ses affiliés.
              </p>
              <p>
                DiaspoLead Immo se réserve le droit de contrôler tous les commentaires et de supprimer tout commentaire pouvant être considéré comme inapproprié, offensant ou constituant une violation des présentes conditions générales.
              </p>
              <p>Vous garantissez et déclarez que :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vous avez le droit de publier les commentaires sur notre site web et disposez de toutes les licences et autorisations nécessaires à cet effet</li>
                <li>Les commentaires n'enfreignent aucun droit de propriété intellectuelle</li>
                <li>Les commentaires ne contiennent pas d'éléments diffamatoires, injurieux, offensants, indécents ou autrement illégaux</li>
                <li>Les commentaires ne seront pas utilisés pour solliciter ou promouvoir des affaires ou des activités commerciales ou illégales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Collecte et protection des données</h2>
              <p>
                Vos données sont collectées par l'entreprise DiaspoLead SARL.
              </p>
              <p>
                Une donnée à caractère personnel désigne toute information concernant une personne physique identifiée ou identifiable. Les informations personnelles pouvant être recueillies sur le site sont principalement utilisées pour la gestion des relations avec vous, et le cas échéant pour le traitement de vos commandes.
              </p>
              <p>Les données personnelles collectées sont les suivantes :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>prénom et nom ou nom de la société</li>
                <li>adresse mail</li>
                <li>numéro de téléphone mobile et/ou fixe</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Droit d'accès, de rectification et de déréférencement de vos données</h2>
              <p>En application de la réglementation applicable aux données à caractère personnel, les utilisateurs disposent des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>le droit d'accès pour connaître les données personnelles les concernant</li>
                <li>le droit de rectification si les données détenues sont inexactes</li>
                <li>le droit de suppression des données conformément aux lois applicables</li>
                <li>le droit à la limitation du traitement conformément au RGPD</li>
                <li>le droit de s'opposer au traitement des données</li>
                <li>le droit à la portabilité des données</li>
              </ul>
              <p>
                Vous pouvez exercer ces droits en nous contactant à l'adresse : contact@diaspoleadimmo.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Utilisation des données</h2>
              <p>Les données personnelles collectées ont pour objectif :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>l'accès et l'utilisation de la Plateforme par l'utilisateur</li>
                <li>la gestion du fonctionnement et l'optimisation de la Plateforme</li>
                <li>la mise en œuvre d'une assistance utilisateurs</li>
                <li>la vérification, identification et authentification des données</li>
                <li>la personnalisation des services</li>
                <li>la prévention et détection des fraudes</li>
                <li>la gestion des éventuels litiges</li>
                <li>l'envoi d'informations commerciales selon vos préférences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Liens hypertextes</h2>
              <p>
                Certaines organisations peuvent établir un lien avec notre site Web sans autorisation écrite préalable, notamment les agences gouvernementales, les moteurs de recherche, et les organismes de presse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Responsabilité du contenu</h2>
              <p>
                Nous ne pouvons être tenus responsables du contenu qui apparaît sur votre site web. Vous acceptez de nous protéger et de nous défendre contre toute réclamation soulevée sur votre site web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Clause de non-responsabilité</h2>
              <p>
                Dans toute la mesure permise par la loi applicable, nous excluons toutes les représentations, garanties et conditions relatives à notre site web et à l'utilisation de ce site.
              </p>
              <p>
                Tant que le site web et les informations et services qu'il contient sont fournis gratuitement, nous ne serons pas responsables des pertes ou dommages de quelque nature que ce soit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Loi applicable</h2>
              <p>
                Les présentes conditions d'utilisation du site sont régies par la loi sénégalaise et soumises à la compétence des tribunaux du siège social de l'éditeur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
              <p>
                Pour toute demande ou question merci de nous contacter à : contact@diaspoleadimmo.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;