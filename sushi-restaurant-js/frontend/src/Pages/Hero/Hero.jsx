
import React from 'react';
import './Hero.css';

function Hero() {
  return (
     // Seção com classes definidas para centralizar e alinhar o conteúdo
    <section className="hero d-flex align-items-center justify-content-center">
      <div className="container text-center container-hero">
        <h2>Cada peça de sushi é um mergulho em sabores e tradição</h2>
        <p>
        Bem-vindo ao Miyabi Sushi.<br />Onde a culinária japonesa faz de cada refeição uma<br/> <strong>experiência inesquecível</strong>.
        </p>
      </div>
    </section>
  );
}

export default Hero;