
import React from 'react';
import './Hero.css';

function Hero() {
  return (
     // Seção com classes definidas para centralizar e alinhar o conteúdo
    <section className="hero d-flex align-items-center justify-content-center">
      <div className="container text-center container-hero">
        <h2>Cada xícara é um abraço quente para a alma</h2>
        <p>
          Bem-vindo ao Café do Amanhã. <br />Onde o café e o nascer do sol pintam o dia com <br /> <strong>sabores únicos</strong>.
        </p>
      </div>
    </section>
  );
}

export default Hero;