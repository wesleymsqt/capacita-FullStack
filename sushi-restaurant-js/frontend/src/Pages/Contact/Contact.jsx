// página de contato
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="content">
      <div className="container-contato">
        <h2>Contato</h2>
        <p className="text">
          Estamos ansiosos para ouvir você! Entre em contato conosco através dos
          detalhes abaixo ou envie-nos uma mensagem diretamente pelo formulário
        </p>
        <p className="text">
          <strong>Endereço:</strong> 738 Av. Beira Mar, Fortaleza, CE
        </p>
        <p className="text">
          <strong>Telefone:</strong> (85) 1234-5678
        </p>
        <p className="text">
          <strong>Email:</strong> contato@MiyabiSushi.com
        </p>
        {/* Formulário de contato */}
        <form
          action="https://formsubmit.co/contatocafecapacita@gmail.com"
          method="POST"
          className="form-contato"
        >
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mensagem">Mensagem: </label>
          <textarea name="mensagem" rows="4" id="mensagem" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;