
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      
      <a href="https://www.facebook.com/ifsppirituba/?locale=pt_BR">
        <img 
          src="https://raw.githubusercontent.com/DWBA4/dwba4_semana_imagens/refs/heads/master/facebook.png" 
          alt="Link para o Facebook"
          className="social-icon" 
        />
      </a>

      <p>
        IFSP - Campus Pirituba - Av. Mutinga, 951 - Jardim Santo Elias - CEP:
        05110-000 - São Paulo/SP - Contato: (011) 2504-0100
      </p>
    </footer>
  );
};

export default Footer;