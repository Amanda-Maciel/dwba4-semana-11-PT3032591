// src/routes/home.tsx
import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';

const slides = [
  { src: '/eleicoes.jpg', alt: 'Eleições do IFSP' },
  { src: '/embriao.jpg', alt: 'SNCT Atividades' },
  { src: '/mulher_lendo.png', alt: 'IFSP oferece bolsas' },
  { src: '/maratona.jpeg', alt: 'Maratona IFSP' },
];

export function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((slideIndex + 1) % slides.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [slideIndex]);

  function currentSlide(index: number) {
    setSlideIndex(index);
  }

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column p-0">
      <header>
        <Navbar />
      </header>

      <main className="flex-fill d-flex align-items-center justify-content-center flex-column text-center p-3">
        <div className="slideshow-container mb-3" style={{ maxWidth: 700, position: 'relative' }}>
          {slides.map((slide, i) => (
            <div key={i} className={`slide ${slideIndex === i ? 'active' : ''}`} style={{ display: slideIndex === i ? 'block' : 'none' }}>
              <img src={slide.src} alt={slide.alt} style={{ width: '100%', borderRadius: 8 }} />
            </div>
          ))}
        </div>

        <div className="dots" style={{ marginTop: 10 }}>
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${slideIndex === i ? 'active-dot' : ''}`}
              onClick={() => currentSlide(i)}
              style={{
                height: 15,
                width: 15,
                margin: '0 5px',
                backgroundColor: slideIndex === i ? '#114B2E' : '#bbb',
                borderRadius: '50%',
                display: 'inline-block',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark text-white py-4 text-center">
        <div className="container">
          <div className="footer-links mb-2">
            <a href="/contato" className="text-white mx-2">Contato</a>
            <a href="/sobre" className="text-white mx-2">Sobre</a>
          </div>
          <p>Av. Mutinga, 951 - Jardim Santo Elias, São Paulo - SP, 05110-000</p>
          <a href="#"><img src="/imagens/Facebook_f_logo_(2019).svg.png" alt="Facebook" style={{ width: 30, height: 30 }} /></a>
        </div>
      </footer>
    </div>
  );
}
