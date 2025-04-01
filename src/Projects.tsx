import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Projects.module.css';
import githubIcon from "/src/assets/github-logo.svg"


type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubRepo: string;
  projectLink?: string;
};

const ProjectCard: React.FC<{
  project: Project;
  isExpanded: boolean;
  hasExpandedCard: boolean;
  onClick: () => void;
}> = ({ project, isExpanded, hasExpandedCard, onClick }) => {
  return (
    <div className={`
      ${styles.card} 
      ${isExpanded ? styles.expanded : ''}
      ${hasExpandedCard && !isExpanded ? styles.noBorder : ''}
    `}>
      <div className={styles.cardHeader} onClick={onClick}>
        <h3>{project.title}</h3>
        <span>{isExpanded ? '▲' : '▼'}</span>
      </div>
      
      {isExpanded && (
        <div className={styles.cardContent}>
          <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
          <p>{project.description}</p>
          <div className={styles.links}>
            <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
              <img className="github-icon" src={githubIcon} /> Ver no GitHub
            </a>
            {project.projectLink && (
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Ver Projeto
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: "Xadrez em Java",
      description: "Este projeto consistiu no desenvolvimento de um jogo de xadrez em Java, iniciando pela implementação da lógica do jogo, com classes para cada peça e regras de movimentação, e evoluindo para a criação de uma interface gráfica interativa utilizando Java Swing. O sistema gerenciava turnos, validava jogadas e detectava o fim do jogo, proporcionando uma experiência funcional e visualmente intuitiva. O projeto fortaleceu o conhecimento em POO, manipulação de eventos gráficos e estruturação de jogos baseados em regras.",
      imageUrl: "../images/javaxadrez.png",
      githubRepo: "#",
      projectLink: "#"
    },
    {
      id: '2',
      title: "Calculadora de Idades",
      description: "Este projeto foi desenvolvido utilizando React e JavaScript, com o objetivo de criar uma calculadora de idade interativa. A aplicação permite que o usuário insira sua data de nascimento e, ao processar a entrada, exibe sua idade exata em anos, meses e dias. Para a gestão de estados e reatividade da interface, foram utilizados React Hooks, como useState para armazenar os valores inseridos e useEffect para atualizar dinamicamente o cálculo da idade. O projeto proporcionou um aprofundamento na manipulação de datas em JavaScript e na construção de componentes reutilizáveis dentro do ecossistema React, garantindo uma experiência fluida e responsiva para o usuário.",
      imageUrl: "../images/calculadora.png",
      githubRepo: "https://github.com/vfdeoliveira1/age-calculator",
      projectLink: "https://age-calculator-vinio.vercel.app/"
    },
    {
      id: '3',
      title: "Site Calangotec Baja",
      description: "Este projeto foi desenvolvido por uma equipe da CalangoTec Baja, da qual faço parte, com o objetivo de criar um site para apresentar a história da iniciativa e detalhar seus subsistemas. A CalangoTec Baja é um projeto estudantil dedicado à construção de protótipos off-road para competições, e o site serve como uma plataforma para divulgar nosso trabalho e atrair novos membros e apoiadores. Utilizamos React, Vite e TypeScript para garantir uma aplicação moderna, eficiente e bem estruturada, aproveitando a velocidade do Vite no desenvolvimento e a segurança do TypeScript na tipagem. O projeto proporcionou uma experiência prática em desenvolvimento web colaborativo, reforçando habilidades em componentização, otimização de desempenho e boas práticas com TypeScript.",
      imageUrl: "../images/logoBaja.svg",
      githubRepo: "#",
      projectLink: "#"
    }
  ];

  const handleCardClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={styles.projectsContainer}>
      <h2 className="meusprojetos">Meus Projetos</h2>
      <div className={styles.cardsContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            hasExpandedCard={expandedId !== null}
            onClick={() => handleCardClick(project.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;