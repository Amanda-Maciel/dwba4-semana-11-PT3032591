// src/routes/sobre.tsx
import React from 'react';
import { Navbar } from '../components/Navbar';

export function Sobre() {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column p-0">
      <header>
        <Navbar />
      </header>

      <main className="flex-fill p-4" style={{ backgroundColor: 'white' }}>
        <div style={{ maxWidth: 900, margin: 'auto' }}>
          <img src="/logo-dark.svg" alt="Logo IFSP" style={{ width: '100%', maxWidth: 300, marginBottom: 20 }} />
          <p><strong>O Instituto Federal de Educação, Ciência e Tecnologia de São Paulo</strong> – é uma autarquia federal de ensino.</p>
          <p>Fundada em 1909, como Escola de Aprendizes Artífices, é reconhecida pela sociedade paulista por sua excelência no ensino público gratuito de qualidade.</p>
          <p>Durante sua história, recebeu, também, os nomes de Escola Técnica Federal de São Paulo e Centro Federal de Educação Tecnológica de São Paulo. Com a transformação em Instituto, em dezembro de 2008, passou a ter relevância de universidade, destacando-se pela autonomia.</p>
          <p>Com a mudança, o Instituto Federal de São Paulo passou a destinar 50% das vagas para os cursos técnicos e, no mínimo, 20% das vagas para os cursos de licenciatura, sobretudo nas áreas de Ciências e da Matemática. Complementarmente, continuará oferecendo cursos de formação inicial e continuada, tecnologias, engenharias e pós-graduação.</p>
          <p>Além dos cursos presenciais, o Instituto Federal de São Paulo oferece os cursos Técnicos em Administração e em Informática para Internet e, a partir de 2012, o superior de Formação de Professores na modalidade de Ensino a Distância (EaD).</p>
          <p>O IFSP é organizado em diversos câmpus e possui mais de 40 mil alunos matriculados nas 36 unidades distribuídas pelo estado de São Paulo.;</p>
          <p>Localizado em <strong>Rua Pedro Vicente, 625 - Canindé - São Paulo - SP - Brasil - Cep: 01109-010</strong></p>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/imagens/Facebook_f_logo_(2019).svg.png" alt="Facebook IFSP" style={{ width: 30, height: 30 }} />
            </a>
          </p>
          <p>IFSP - Câmpus Pirituba - Av. Mutinga, 951 - Jardim Santo Elias - CEP: 05110-000 - São Paulo/SP - Contato: (011) 2504-0100</p>
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
