import React from 'react';
import { ImageCarousel } from '../../components/Carousel/Carousel';
import './About.css';

const About = () => {
  return (
    <div className="main-about">
      <h2>Sobre Nós</h2>
      <p>
        O Café do Amanhã foi fundado por Nanda e Junior, dois apaixonados por
        café e pela cidade de Fortaleza. Localizado na Avenida Beira Mar, nosso
        café oferece um refúgio acolhedor onde você pode desfrutar de sabores
        únicos e de uma vista deslumbrante.
      </p>

      {/* Container para o carrossel de imagens com a classe "carrossel" */}
      <div className="carrossel">
        <ImageCarousel></ImageCarousel>
      </div>
    </div>
  );
};

export default About;