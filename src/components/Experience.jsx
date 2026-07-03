import './Experience.css'

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Lufemos Consults',
    period: '2021 – 2023',
    description: [
      'Built and maintained dynamic web pages and React-based components, improving usability and overall user engagement.',
      'Developed responsive layouts using HTML5, CSS3, Tailwind CSS, and JavaScript that performed consistently across devices.',
      'Collaborated within a team environment using Git and GitHub for version control, code reviews, and project tracking.',
      'Applied basic software quality assurance practices, including manual testing and cross-browser compatibility checks.',
    ]
  },
  {
    role: 'Software Development Fellow',
    company: 'Tech4Dev – Women Techsters',
    period: '2024 – Present',
    description: [
      'Intensive fellowship covering modern frontend development with React and JavaScript.',
      'Collaborated with peers on real-world projects using Agile workflows.',
      'Deepened skills in component architecture, state management, and REST API integration.',
    ]
  }
]

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="experience-heading">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-left">
                <span className="experience-period">{exp.period}</span>
              </div>
              <div className="experience-line">
                <div className="experience-dot"></div>
                <div className="experience-track"></div>
              </div>
              <div className="experience-right">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <ul className="experience-bullets">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience