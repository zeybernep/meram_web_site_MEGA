import React from 'react';
import './Home.css';
import NewsSection from './NewsSection';
import EventsCalendar from './EventsCalendar';



const Home = () => {
  return (
    <div className="home-container">
    
      <h1>Bizim Meram için çalışıyoruz </h1>
      <p>Üretken Akademi ZEYNEP BERRA KOÇ</p>
      <div className="image-gallery">
        <img src="https://static.daktilo.com/sites/1085/uploads/2023/10/31/konya-ili-meram-belediye-baskanligi-10-memur-alacak-1698730763.jpg" alt="Meram belediye" />
        <img src="https://logowik.com/content/uploads/images/943_meram_belediyesi_logo.jpg" alt="Meram logo" />
        <img src="http://www.mesmuhendislik.com/contents/merambel_mes_01.jpg" alt="Meram belediye" />
        
        
      </div>
      {/* Haberler ve Duyurular */}
      <NewsSection />
      <EventsCalendar/>
      
    </div>
  );
};

export default Home;