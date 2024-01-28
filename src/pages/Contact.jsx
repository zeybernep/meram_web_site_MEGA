import React from 'react';
import './Contact.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>İletişim Bilgileri</h2>
        <p>Herhangi bir sorunuz mu var? Bizimle iletişime geçmekten çekinmeyin.</p>
        <ul>
          <li><strong>Adres:</strong> Yenişehir Mahallesi Azerbaycan Caddesi No: 5 42010 Meram / KONYA</li>
          <li><strong>Telefon:</strong> 444 3 042</li>
          <li><strong>E-posta:</strong> bizimmeram@meram.bel.tr</li>
        </ul>
        <div className="social-links">


        <FontAwesomeIcon icon={faFacebook} className="social-links" />
          <a href="https://www.facebook.com/Meram.Belediyesi">Facebook</a>
          
          <FontAwesomeIcon icon={faTwitter} className="social-links" />
          <a href="https://twitter.com/MeramBelediyesi">Twitter</a>
          
          <FontAwesomeIcon icon={faInstagram} className="social-links" />
          <a href="https://www.instagram.com/meram.belediyesi/">Instagram</a>
          

        </div>
      </div>
      <div className="contact-form">
        <h2>Bize Ulaşın</h2>
        <form>
          <input type="text" placeholder="Adınız" required />
          <input type="email" placeholder="E-posta Adresiniz" required />
          <textarea placeholder="Mesajınız" required></textarea>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;