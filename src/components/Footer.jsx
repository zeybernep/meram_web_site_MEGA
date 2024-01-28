import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/meram.belediyesi/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
        <a href="https://www.facebook.com/Meram.Belediyesi" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
        <a href="https://twitter.com/MeramBelediyesi" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
      </div>
      <p>&copy; Meram belediyesi Üretken Akademi /Zeynep Berra koç</p>
    </div>
  );
};

export default Footer;