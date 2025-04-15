import React from 'react';
import { ImageCarousel } from '../../components/Carousel/Carousel';
import './About.css';

const About = () => {
  return (
    <div className="main-about">
      <h2 className='about-title'>Sobre Nós</h2>
      <p className='about-text'>
        O Miyabi Sushi nasceu do sonho de Marina e Gustavo, dois apaixonados pela culinária japonesa e pela cidade de Fortaleza. Localizado na Avenida Beira Mar, nosso restaurante é um convite para saborear combinações autênticas em um ambiente sofisticado, com uma vista encantadora do mar.
      </p>

      {/* Container para o carrossel de imagens com a classe "carrossel" */}
      <div className="carrossel">
        <ImageCarousel></ImageCarousel>
      </div>
    </div>
  );
};

export default About;