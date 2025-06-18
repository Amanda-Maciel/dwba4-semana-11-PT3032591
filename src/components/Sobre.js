import React from 'react';


const sobreStyles = {
  padding: '0 20px', 
  textAlign: 'justify',
  maxWidth: '960px', 
  margin: '20px auto', 
};

const h2Styles = {
  marginBottom: '1.5em', 
  lineHeight: '1.6', 
  fontWeight: 'normal', 
  fontSize: '1rem',
};

const Sobre = () => {
  return (
    <main style={sobreStyles}>
      <h1>Sobre</h1>
      <br />
      <h2 style={h2Styles}>
        O <b>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo </b>- é uma autarquia federal de ensino. Fundada em 1909, como Escola de Aprendizes Artífices, é reconhecida pela sociedade paulista por sua excelência no ensino público gratuito de qualidade. Durante sua história, recebeu, também, os nomes de Escola Técnica Federal de São Paulo e Centro Federal de Educação Tecnológica de São Paulo. Com a transformação em Instituto, em dezembro de 2008, passou a ter relevância de universidade, destacando-se pela autonomia.
      </h2>
      <h2 style={h2Styles}>
        Com a mudança, o Instituto Federal de São Paulo passou a destinar 50% das vagas para os cursos técnicos e, no mínimo, 20% das vagas para os cursos de licenciatura, sobretudo nas áreas de Ciências e da Matemática. Complementarmente, continuará oferecendo cursos de formação inicial e continuada, tecnologias, engenharias e pós-graduação. AAlém dos cursos presenciais, o Instituto Federal de São Paulo oferece os cursos Técnicos em Administração e em Informática para Internet e, a partir de 2012, o superior de Formação de Professores na modalidade de Ensino a — Distância (EaD).
      </h2>
      <h2 style={h2Styles}>
        O IFSP é organizado em diversos câmpus e possui mais de 40 mil alunos matriculados nas 36 unidades distribuídas pelo estado de São Paulo. Localizado em <b>Rua Pedro Vicente, 625 - Canindé - São Paulo - SP- Brasil - Cep 01109-010</b>
      </h2>
      
    </main>
  );
};

export default Sobre;