import './Skills.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5', color: '#e34f26' },
  { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572b6' },
  { icon: <FaJs />, name: 'JavaScript', color: '#f7df1e' },
  { icon: <FaReact />, name: 'React', color: '#61dafb' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#38bdf8' },
  { icon: <FaGitAlt />, name: 'Git', color: '#f05032' },
  { icon: <FaGithub />, name: 'GitHub', color: '#ffffff' },
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
    
        <h2 className="skills-heading">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills