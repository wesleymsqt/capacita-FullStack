// Página de histórias
import React from 'react';
import './Stories.css';

function Stories() {
    return (
        <section className='container-everything'>
             <h2>Histórias</h2>
             <p className='beginning-text'>Descubra as histórias que inspiraram o Miyabi Sushi. Desde a paixão de Marina e Gustavo pela culinária japonesa até a busca por criar uma experiência única à beira-mar, cada detalhe reflete o amor pela tradição e pela qualidade. </p>

                 <div className='container-stories'>
                    <div className='box'>
                        <h4>Sabor do Japão à Beira Mar</h4>
                        <p>Marina e Gustavo sempre foram fascinados pela culinária japonesa e pela beleza de Fortaleza. Após muitas viagens ao Japão, decidiram transformar esse amor em um sonho: o Miyabi Sushi. Localizado na Avenida Beira Mar, o restaurante oferece uma experiência gastronômica única, com pratos autênticos preparados com ingredientes frescos e selecionados. A vista encantadora do mar torna o ambiente ainda mais especial, fazendo cada visita um momento inesquecível, onde o sabor e a tranquilidade se encontram em perfeita harmonia.</p>
                    </div>

                    <div className='box'>
                        <h4>Tradição e Modernidade</h4>
                        <p>No Miyabi Sushi, Marina e Gustavo preservam as tradições da culinária japonesa, incorporando toques modernos para criar pratos inovadores. O cardápio é uma verdadeira celebração da gastronomia nipônica, com sushis, sashimis e pratos quentes feitos com ingredientes frescos e de qualidade. O restaurante oferece uma experiência sensorial única, onde os sabores autênticos do Japão se misturam com uma abordagem criativa, proporcionando aos clientes uma refeição memorável, cheia de frescor e sabor.
                        </p>
                    </div>

                    <div className='box'>
                        <h4>Um Refúgio à Beira Mar</h4>
                        <p>O Miyabi Sushi é mais do que um restaurante; é um refúgio à beira-mar. Com uma vista deslumbrante de Fortaleza, o ambiente sofisticado e acolhedor torna cada refeição especial. A combinação da culinária japonesa autêntica com o som suave das ondas cria uma atmosfera única, que transforma cada visita em uma verdadeira experiência sensorial. No Miyabi, a qualidade dos pratos, o conforto e a beleza do mar se unem, proporcionando aos clientes um momento de puro prazer gastronômico e relaxamento.
                            
                        </p>
                    </div>
                 </div>

        </section>
    );
}

export default Stories;