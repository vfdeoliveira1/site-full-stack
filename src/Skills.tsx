import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 90 },
    { name: 'C++', level: 75 },
    { name: 'Java', level: 70 }
  ];

  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Anima as barras de progresso quando o componente é montado
    progressRefs.current.forEach((ref, index) => {
      if (ref) {
        setTimeout(() => {
          ref.style.width = `${skills[index].level}%`;
        }, 100 * index);
      }
    });
  }, []);

  return (
    <section className="skills-section">
      <h3 className="text-3xl font-bold mb-8">Skills e Expertises: </h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={skill.name} className="skill-card">
            <h4 className="text-xl font-bold mb-3">{skill.name}</h4>
            <div className="skill-bar">
              <div
                ref={el => { progressRefs.current[index] = el; return; }}
                className="skill-progress"
                style={{ width: '0%' }} // Inicialmente 0%, será animado no useEffect
              ></div>
            </div>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;