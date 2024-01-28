import React from 'react';
import './NewsSection.css'; // Stil dosyası

const NewsSection = () => {
  return (
    <div className="news-section">
      <h2 className="news-title">Son Haberler</h2>
      <div className="news-container">
        
        <div className="news-item">
          <img src="https://www.meram.bel.tr/upload/medya/4_231.jpg" alt="Karne sevinci" />
          <div className="news-content">
            <h3>Minikler karnelerni Başkan Kavuşun elinden aldı</h3>
            <p>Meram Belediye Başkanı Mustafa Kavuş, Mehmet Kadir Özgüzar İlkokulu öğrencilerinin 2023-2024 eğitim öğretim yılı ara karne heyecanlarına ortak oldu</p>
            <a href="haber_linki" className="news-read-more">Devamını Oku</a>
          </div>
        </div>

            
              <div className="news-item">
          <img src="https://www.meram.bel.tr/upload/medya/1-1_192.jpg" alt="Şivlilik" />
          <div className="news-content">
            <h3>MERAM’DA ŞİVLİLİK COŞKUSU</h3>
            <p>Meram’da yaşayan çocuklar, yıl boyunca heyecanla bekledikleri şivlilik için sabahın ilk ışıklarıyla birlikte sokaklardaydı. Yıllardır süregelen bu geleneği devam ettiren çocuklara Meram Belediye Başkanı Mustafa Kavuş da eşlik etti.</p>
            <a href="haber_linki" className="news-read-more">Devamını Oku</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;