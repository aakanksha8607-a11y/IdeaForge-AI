# IdeaForge AI

IdeaForge AI is a full-stack web app that helps students come up with project ideas based on their skills, interests, experience level, and target role.

I built it to solve a simple problem: sometimes you know what you want to learn, but you don't know what project to build. IdeaForge takes your input and turns it into a project idea with a clear direction for development.

## Features

- Personalized project ideas based on your skills and interests
- Suggestions for the technology stack and project architecture
- Core features and a step-by-step development roadmap
- Skills you can learn while building the project
- Future improvements and a resume-ready project description

## Tech Stack

**Frontend:** React, TypeScript, Vite, CSS

**Backend:** Node.js, Express, Axios, CORS

**AI:** Ollama with Qwen3 8B running locally

## How It Works

The application has a simple flow:

```text
React Frontend
      ↓
Express Backend
      ↓
Ollama + Qwen3 8B
      ↓
Project Recommendation
      ↓
React Results Page
```

The user enters their skills, interests, experience level, and target role. The frontend sends this information to the backend, which sends a prompt to the locally running Qwen3 model. The response is then used to create and display the project recommendation.

## Running Locally

### Requirements

You'll need:

- Node.js
- Git
- Ollama

Make sure Qwen3 8B is available:

```bash
ollama pull qwen3:8b
```

### Backend

```bash
cd backend
npm install
node server.js
```

The backend runs on `http://localhost:5001`.

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173`.

Ollama needs to be running while using the application.

## Project Structure

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

## What I Learned

Building IdeaForge gave me hands-on experience with React and TypeScript, connecting a frontend to a backend API, working with Node.js and Express, using Git and GitHub, and integrating a local AI model with Ollama.

## Future Improvements

- Save generated projects
- Add user accounts
- Generate multiple project ideas
- Create detailed implementation plans
- Connect projects directly with GitHub
- Add project progress tracking