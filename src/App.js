import React from 'react';
import './App.css';
import logoAlpine from './images/logo_alpine.png';
import backgroundImage from './images/sources-homepage/galerie/A110_PE_1.jpg';
import alpineVintage from './images/sources-homepage/galerie/Alpine_vintage.jpeg';
import alpineEvolution from './images/sources-homepage/galerie/A110_PURE_6.jpg';
import backgroundAlpine from './images/sources-homepage/design/Visuel_1_desktop.jpg';
import logoFooter from './images/pngwing.com_1.png';
import structureImageOne from './images/sources-homepage/conception/alpine-bone.jpg';
import structureImageTwo from './images/sources-homepage/conception/alpine-skin.jpg';

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  };


  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-navbar">
          <img src={logoAlpine} className="App-logo" alt="logo" />
          <ul className="App-nav-links">
            <li><a href="/">Modèle</a></li>
            <li><a href="/about">Formule 1</a></li>
            <li><a href="/contact">Boutique</a></li>
            <li><a href="/contact">Mon compte</a></li>
          </ul>
        </nav>
      </header>

      <section className="part_one">
        <div style={backgroundStyle}></div>
      </section>

      <section className="part_two">
        <div className="content">
          <h1>MADE BY RACERS</h1>
          <p>En 1955, Jean Rédélé, entrepreneur passionné, fonde Alpine sur trois piliers : agilité, élégance, esprit de compétition.</p>
          <p>Conçue par des pilotes pour ceux qui veulent maîtriser l’asphalte, la légende Alpine s’est érigée à travers des victoires mythiques, et un engagement sportif sans limite.</p>
          <p>Depuis 2016, à travers notre nouvelle gamme A 110, nous continuons à gravir tous les échelons du sport automobile. Demain, nous voulons réinventer la sportivité automobile avec des technologies innovantes issues de la Formule 1, pour des pilotes passionnés.</p>
        </div>

        <div className="image-container">
          <img src={alpineVintage} className="alpineVintage" alt="Alpine d'époque" />
          <h1 className="title-image-one">Née de la vision d'un homme</h1>
          <img src={alpineEvolution} className="alpineEvolution" alt="Alpine contemporaine" />
          <h1 className="title-image-two">Une marque de valeurs</h1>
        </div>
      </section>

      <section className="part_three">
        <h3><span>MODÈLES</span></h3>
        <h4>LES SENSATIONS DE LA PISTE AU QUOTIDIEN</h4>
        <div className="image-container">
          <img src={backgroundAlpine} className="alpine" alt="Alpine" />
          <div className="text-overlay">
            <h1>A110 R</h1>
            <a href="#" class="link"><h3>Expérimentez la radicalité</h3></a>
          </div>
        </div>
      </section>

      <section className="part_four">
        <div class="description">
          <h4>A110</h4>
          <p>ESPRIT ORIGINEL</p>
          <p>À PARTIR DE 65 000 €</p>
          <p>Classe énergétique D</p>
          <a href="#">Découvrir</a>
          <a href="#">Configurez</a>
        </div>

        <a href="#">Retour en haut de la page</a>
      </section>

      <section className="part_five">
        {/* <div className="structure-img">
          <img src={structureImageOne} className="structureImageOne"/>
          <img src={structureImageTwo} className="structureImageTwo"/>
        </div> */}

        <div className="content-structure">
          <h4>STRUCTURE</h4>
          <h1>A Quest to go lighter</h1>
          <p>Avec seulement 1 102 kg sur la balance, le rapport poids/puissance de l'A110 est tout simplement remarquable. Rien n'a été négligé dans la recherche de la légèreté, du choix des matériaux aux accessoires, en passant par les sièges et les jantes.</p>
        </div>
      </section>

      <section className="part_six">
        {/* <div className="structure-img">
          <img src={structureImageOne} className="structureImageOne"/>
          <img src={structureImageTwo} className="structureImageTwo"/>
        </div> */}

        <div className="content-mechanic">
          <h4>MÉCANIQUE</h4>
          <h2>Performance in your hands</h2>

          <h2>155 mph</h2>
          <p>Vitesse maximale sur la piste</p>

          <h2>4,5 s</h2>
          <p>0 à 62 mph</p>

          <h2>260 ms</h2>
          <p>Temps de changement de vitesse</p>
        </div>
      </section>

      <section className="footer">
        <div className="customer-service">
          <p>SERVICE CLIENT</p>
          <a href="#">Contacter Alpine</a>
        </div>

        <div className="other-site">
          <p>AUTRES SITES</p>
          <a href="#">Alpinecars.com</a>
          <a href="#">Espace Media</a>
          <a href="#">Alpine Elf Cup Series</a>
          <a href="#">Alpine Eyewear</a>
          <a href="#">Boutique</a>
        </div>

        <div className="career">
          <p>CARRIÈRES</p>
          <a href="#">Nos offres</a>
        </div>

        <div className="links">
          <p>LIENS DIRECTS</p>
          <a href="#">Configurateur</a>
          <a href="#">Réserver un essai</a>
          <a href="#">Demande de financement</a>
          <a href="#">Inscription à la newsletter</a>
        </div>

        <div className="logoFooter">
          <img src={logoFooter} className="logoFooter-img" alt="Logo Alpine" />
        </div>

      </section>





    </div>
  );
}

export default App;
