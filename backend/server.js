const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('IdeaForge backend is running!')
})

app.post('/generate', async (req, res) => {
  console.log('GENERATE ROUTE HIT')
  console.log(req.body)

  try {
    const { skills, interests, experience, role } = req.body

    const prompt = `Give ONE practical software project idea for a student.

Skills: ${skills}
Interests: ${interests}
Experience: ${experience}
Target role: ${role}

Reply in ONLY 2 short sentences.
Sentence 1: Give only the project title.
Sentence 2: Briefly explain what the project does and what problem it solves.

Important:
- Keep the project realistic for the user's experience level.
- Do not invent technologies that were not requested.
- Do not describe the architecture.
- Do not say C++ is a backend unless specifically requested.`

    const response = await axios.post(
      'http://localhost:11434/api/generate',
      {
        model: 'qwen3:8b',
        prompt: prompt,
        stream: false,
        think: false,
        options: {
          num_predict: 40,
          temperature: 0.2
        }
      },
      {
        timeout: 30000
      }
    )

    console.log('Ollama response received')

    const aiText = response.data.response.trim()

    console.log('AI RESPONSE:')
    console.log(aiText)

    const lines = aiText
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)

    const title =
      lines[0] || 'AI-Powered Student Project'

    const description =
      lines.slice(1).join(' ') ||
      'A practical software project designed around your skills and interests.'

    const cleanTitle = title.replace(/^[0-9.)\-\s]+/, '')

    const project = {
      title: cleanTitle,

      problemStatement: description,

      whyUseful:
        `This project matches your interests in ${interests} and your goal of becoming a ${role}.`,

      technologyStack: skills
        ? skills
            .split(',')
            .map(skill => skill.trim())
            .filter(Boolean)
        : ['C++', 'Python', 'SQL'],

      architecture:
        'React frontend → Express backend → Ollama AI model → personalized project result.',

      coreFeatures: [
        'Personalized project generation',
        'Skill and interest based recommendations',
        'Portfolio-ready project planning'
      ],

      developmentRoadmap: [
        'Build the project foundation',
        'Implement the core functionality',
        'Connect the required technologies',
        'Test and deploy the final project'
      ],

      difficulty: experience || 'Beginner',

      skillsLearned: [
        'Problem solving',
        'Software development',
        'AI integration'
      ],

      futureImprovements: [
        'User accounts and saved projects',
        'More advanced project recommendations'
      ],

      resumeBullet:
        `Built ${cleanTitle}, an AI-powered project recommendation tool using React, Node.js, Express and Ollama.`,

      readmeDescription:
        `IdeaForge AI is a full-stack AI-powered project recommendation tool that helps students discover practical software projects based on their skills, interests, experience level, and target career role.`
    }

    res.json({
      result: project
    })

  } catch (error) {
    console.log('OLLAMA ERROR:', error.message)

    res.status(500).json({
      error: 'Could not generate project'
    })
  }
})

app.listen(5001, () => {
  console.log('Backend running on http://localhost:5001')
})

setInterval(() => {}, 1000)