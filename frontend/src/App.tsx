import { useState } from 'react'
import './App.css'

type ProjectIdea = {
  title: string
  problemStatement: string
  whyUseful: string
  technologyStack: string[]
  architecture: string
  coreFeatures: string[]
  developmentRoadmap: string[]
  difficulty: string
  skillsLearned: string[]
  futureImprovements: string[]
  resumeBullet: string
  readmeDescription: string
}

function App() {
  const [skills, setSkills] = useState('')
  const [interests, setInterests] = useState('')
  const [experience, setExperience] = useState('Beginner')
  const [role, setRole] = useState('')
  const [projectIdea, setProjectIdea] = useState<ProjectIdea | null>(null)
  const [loading, setLoading] = useState(false)

  const generateProject = async () => {
    setLoading(true)
    setProjectIdea(null)

    try {
      const response = await fetch('http://localhost:5001/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          skills,
          interests,
          experience,
          role
        })
      })

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`)
      }

      const data = await response.json()
      setProjectIdea(data.result)
    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please check that the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">✦</span>
          IdeaForge <span>AI</span>
        </div>

        <div className="badge">AI PROJECT ARCHITECT</div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-tag">✦ Turn your skills into your next project</div>

          <h1>
            Build better projects
            <br />
            <span>with AI.</span>
          </h1>

          <p>
            Tell IdeaForge about your skills, interests, experience, and career
            goals. Get a personalized project designed to strengthen your portfolio.
          </p>
        </section>

        <section className="generator-card">
          <div className="card-header">
            <div>
              <h2>Tell us about yourself</h2>
              <p>We'll forge a project around your goals.</p>
            </div>

            <div className="step-indicator">01 / 01</div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>YOUR SKILLS</label>
              <input
                placeholder="C++, Python, React..."
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>YOUR INTERESTS</label>
              <input
                placeholder="AI, Web Development..."
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>EXPERIENCE LEVEL</label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div className="form-group">
              <label>TARGET ROLE</label>
              <input
                placeholder="Software Developer..."
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </div>

          <button
            className="generate-button"
            onClick={generateProject}
            disabled={loading}
          >
            {loading ? 'Forging your project...' : 'Generate Project Idea'}
            {!loading && <span>→</span>}
          </button>
        </section>

        {projectIdea && (
          <section className="results">
            <div className="result-heading">
              <div>
                <div className="hero-tag">✦ YOUR FORGED PROJECT</div>
                <h2>{projectIdea.title}</h2>
              </div>

              <div className="difficulty">{projectIdea.difficulty}</div>
            </div>

            <div className="result-grid">
              <article className="result-card large">
                <h3>Problem Statement</h3>
                <p>{projectIdea.problemStatement}</p>
              </article>

              <article className="result-card large">
                <h3>Why It's Useful</h3>
                <p>{projectIdea.whyUseful}</p>
              </article>

              <article className="result-card">
                <h3>Technology Stack</h3>
                <div className="tags">
                  {projectIdea.technologyStack.map((technology, index) => (
                    <span key={index}>{technology}</span>
                  ))}
                </div>
              </article>

              <article className="result-card">
                <h3>Architecture</h3>
                <p>{projectIdea.architecture}</p>
              </article>

              <article className="result-card">
                <h3>Core Features</h3>
                <ul>
                  {projectIdea.coreFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </article>

              <article className="result-card">
                <h3>Skills You'll Learn</h3>
                <ul>
                  {projectIdea.skillsLearned.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </article>

              <article className="result-card large">
                <h3>Development Roadmap</h3>
                <ol className="roadmap">
                  {projectIdea.developmentRoadmap.map((step, index) => (
                    <li key={index}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </article>

              <article className="result-card">
                <h3>Future Improvements</h3>
                <ul>
                  {projectIdea.futureImprovements.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                  ))}
                </ul>
              </article>

              <article className="result-card highlight">
                <h3>Resume Bullet</h3>
                <p>{projectIdea.resumeBullet}</p>
              </article>

              <article className="result-card highlight">
                <h3>README Description</h3>
                <p>{projectIdea.readmeDescription}</p>
              </article>
            </div>
          </section>
        )}
      </main>

      <footer>
        <span>IDEAFORGE AI</span>
        <span>Powered locally by Ollama · Qwen3 8B</span>
      </footer>
    </div>
  )
}

export default App