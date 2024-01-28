import React from 'react';
import './About.css';
import { FaUsers, FaRegLightbulb, FaStar } from 'react-icons/fa'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="section-title">Birlikte Yönetiyoruz
Mustafa KAVUŞ 
Meram Belediye Başkanı</h2>
        <div className="section-introduction">
          <img
            src="https://baskanprofil.com/assets/images/baskan/42-meram.jpg"
            alt="Team"
            className="section-image"
          />
          <p className="section-text">
          Öğrenim hayatına Ali İhsan Dayıoğlugil İlkokulu'nda başlayan Mustafa KAVUŞ, orta ve lise öğrenimini ise Konya İmam Hatip Lisesi’nde bitirdi. 1995 yılında kazandığı Ankara Üniversitesi Siyasal Bilgiler Fakültesi İşletme Bölümü’nü başarıyla tamamlamasının ardından Selçuk Üniversitesi Yönetim Organizasyon Ana Bilim Dalı’nda yüksek lisans eğitimi aldı.
          </p>
        </div>
        <div className="section-highlights">
          <div className="highlight">
            <FaUsers className="highlight-icon" />
            <p className="highlight-text">Belediyecilik</p>
          </div>
          <div className="highlight">
            <FaRegLightbulb className="highlight-icon" />
            <p className="highlight-text">ekip işi</p>
          </div>
          <div className="highlight">
            <FaStar className="highlight-icon" />
            <p className="highlight-text">Benzersizlik</p>
          </div>
        </div>
        <h3 className="section-subtitle">Tevazu,Samimiyet ve gayretle</h3>
        <ul className="section-list">
          <li>Başkana Mesaj.</li>
          <li>Fotoğraf galerisi</li>
          <li>Önceki bakanlar.</li>
         
        </ul>
      </div>
    </div>
  );
};

export default About;