# 📰 AI News Agent  
### LangChain + Ollama + Tavily Search

This project is a local AI-powered news agent built using:

- LangChain
- Ollama (Local LLM)
- Tavily Search API
- Node.js
- TypeScript

The agent fetches real-time news using a search tool and summarizes it into structured bullet points.

---

# 🚀 Features

- 🔎 Live web search integration (Tavily)
- 🧠 Local LLM reasoning (Ollama)
- 📰 Summarized news output
- ⚡ Tool-calling AI agent architecture
- 🖥 Runs completely from terminal

---

# 🛠 Tech Stack

- Node.js
- TypeScript
- LangChain
- Ollama
- Tavily API
- dotenv

---

# 📦 Prerequisites

Make sure you have:

- **Node.js v18+**
- **Ollama installed**
- **Tavily API Key**

Download Ollama from:

👉 https://ollama.com/download

---

# ⚙️ Installation & Setup

Follow these steps to run the project.

---

## 1️⃣ Create Project Folder

```bash
mkdir ai-news-agent
cd ai-news-agent
2️⃣ Initialize Node Project
npm init -y
3️⃣ Install Dependencies
npm install langchain @langchain/core @langchain/ollama @langchain/tavily dotenv
For TypeScript support:

npm install -D typescript tsx @types/node
4️⃣ Install Ollama Model
Pull the required model:

ollama pull qwen3:4b
Verify installation:

ollama list
5️⃣ Setup Environment Variables
Create a .env file in the root folder:

TAVILY_API_KEY=your_actual_api_key_here
Replace with your real Tavily API key.

▶️ Running the Agent
Start the agent using:

npx tsx index.ts
The agent will:

Search latest news

Use LLM reasoning

Return 5 summarized bullet points

💬 Example Prompt Used
"What is today's latest news in Mumbai? Give summarized answer with 5 bullet points."
You can modify the prompt inside index.ts.

📁 Project Structure
ai-news-agent/
│
├── index.ts
├── package.json
├── package-lock.json
├── .env
├── node_modules/
└── README.md





