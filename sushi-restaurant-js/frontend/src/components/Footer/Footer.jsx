import React from 'react';
import './Footer.css';

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="footer">
        <p>
          &copy; {getCurrentYear()} Miyabi Sushi. Todos os direitos
          reservados.
        </p>
        <p>738 Av. Beira Mar, Fortaleza, CE | (85) 1234-5678</p>
    </footer>
  );
}

export default Footer;