\# IdeaForge AI



AI-powered project idea generator that transforms a student's skills, interests, experience level, and target career role into a personalized, portfolio-ready software project.



\## Overview



IdeaForge AI helps students overcome the "what should I build?" problem.



Users provide:

\- Technical skills

\- Areas of interest

\- Experience level

\- Target career role



IdeaForge then generates a practical project concept using a locally running AI model and presents it as a structured project plan.



\## Features



\- Personalized project recommendations

\- Skill and interest-based generation

\- Experience-level aware suggestions

\- Technology stack recommendations

\- Project architecture

\- Core feature planning

\- Development roadmap

\- Skills-to-learn section

\- Future improvement suggestions

\- Resume-ready project description

\- README-ready project description

\- Local AI inference with no external AI API key



\## Technology Stack



\### Frontend

\- React

\- TypeScript

\- Vite

\- CSS



\### Backend

\- Node.js

\- Express.js

\- Axios

\- CORS



\### AI

\- Ollama

\- Qwen3 8B



\## Architecture



```text

User

&#x20; ↓

React + TypeScript Frontend

&#x20; ↓

Express.js Backend

&#x20; ↓

Ollama Local API

&#x20; ↓

Qwen3 8B

&#x20; ↓

Project Recommendation

&#x20; ↓

Structured Project Dashboard

```



\## How It Works



1\. The user enters their skills, interests, experience level, and target role.

2\. The React frontend sends the information to the Express backend.

3\. The backend creates a focused prompt for the local Qwen3 model.

4\. Ollama runs the model locally and returns a project title and description.

5\. The backend combines the AI response with project-planning information.

6\. The frontend displays the complete project recommendation.



\## Project Structure



```text

IdeaForge/

├── backend/

│   ├── server.js

│   ├── package.json

│   └── package-lock.json

│

├── frontend/

│   ├── src/

│   │   ├── App.tsx

│   │   ├── App.css

│   │   └── main.tsx

│   ├── package.json

│   └── package-lock.json

│

├── .gitignore

└── README.md

```



\## Getting Started



\### Prerequisites



Install:



\- Node.js

\- Ollama

\- Git



Make sure the Qwen3 8B model is available in Ollama:



```bash

ollama pull qwen3:8b

```



\### 1. Clone the repository



```bash

git clone https://github.com/aakanksha8607-a11y/IdeaForge-AI.git

cd IdeaForge-AI

```



\### 2. Start the backend



```bash

cd backend

npm install

node server.js

```



The backend runs on:



```text

http://localhost:5001

```



\### 3. Start the frontend



Open another terminal:



```bash

cd frontend

npm install

npm run dev

```



The frontend runs on:



```text

http://localhost:5173

```



\### 4. Start Ollama



Make sure Ollama is running locally with the `qwen3:8b` model available.



\## Example Input



```text

Skills: C++, Python, DSA, SQL

Interests: AI, Web Development

Experience: Beginner

Target Role: Software Developer

```



IdeaForge uses this information to create a project recommendation tailored to the user's profile.



\## Why This Project?



IdeaForge AI was built to explore the integration of:



\- Modern frontend development

\- REST APIs

\- Backend development

\- Local AI inference

\- Prompt engineering

\- Full-stack application architecture



The project also demonstrates how AI can be incorporated into a practical developer-focused product without relying on a paid external AI API.



\## Future Improvements



\- User authentication

\- Save and manage generated projects

\- Multiple project recommendations per request

\- Project difficulty customization

\- GitHub repository generation

\- AI-generated implementation plans

\- Progress tracking

\- Deployment support

\- More advanced personalization



\## Learning Outcomes



Through this project, I worked with:



\- React and TypeScript

\- Node.js and Express

\- REST API communication

\- Frontend-backend integration

\- Local AI models with Ollama

\- Prompt engineering

\- Git and GitHub

\- Full-stack application architecture



\## Resume Description



> Built IdeaForge AI, a full-stack AI-powered project recommendation platform using React, TypeScript, Node.js, Express, and locally hosted Qwen3 8B through Ollama to generate personalized, portfolio-ready project ideas based on user skills, interests, experience, and career goals.



\## Author



\*\*Aakanksha\*\*



Computer Science Engineering Student

