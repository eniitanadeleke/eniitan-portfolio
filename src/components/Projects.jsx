import './Projects.css'

const projects = [
  {
    title: 'Eduspline',
    description: 'A React-based student performance monitoring platform. Covers landing page, authentication, admin dashboard with real-time data visualisation, and a student dashboard with dropout risk indicators.',
    tags: ['React', 'JavaScript', 'CSS3', 'React Router', 'Context API'],
    live: 'https://www.loom.com/share/af61ffef1dda432ab6d23efc32fe5251',
    github: null,
    color: '#0a2e1f',
  },
  {
    title: 'Job Filtering Page',
    description: 'Dynamic job listing interface built with JavaScript, enabling users to search and filter opportunities based on specific criteria.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: null,
    github: 'https://github.com/eniitanadeleke/Job-filtering-page',
    color: '#1a0a2e',
  },
  {
    title: 'Recommender',
    description: 'A React application delivering personalised content recommendations based on user-selected genre, mood, and experience level.',
    tags: ['React', 'JavaScript', 'API Integration'],
    live: null,
    github: 'https://github.com/eniitanadeleke/myrecommender',
    color: '#0a1a2e',
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2 className="projects-heading">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div
                className="project-image"
                style={{ backgroundColor: project.color }}
              >
                <span className="project-image-text">{project.title}</span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link primary">
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link secondary">
                      GitHub
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects