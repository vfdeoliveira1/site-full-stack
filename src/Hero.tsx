import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="titulo">Desenvolvedor Web e Estudante de Engenharia da Computação</h1>
        <h2 className="subtitulo">Transformando ideias em experiências digitais excepcionais</h2>
      </div>
      <div className="hero-image">
        <img src="..\src\assets\eu.png" alt="Descrição da imagem" />
      </div>
    </div>
  );
};

export default Hero;