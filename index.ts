import "dotenv/config";
import { createAgent } from "langchain";
import { ChatOllama } from "@langchain/ollama";
import { TavilySearch } from "@langchain/tavily";
import { Document } from "@langchain/core/documents";

const apiKey = process.env.TAVILY_API_KEY;

const docs = [
  new Document({
    pageContent:
      "Dogs are great companions, known for their loyalty and friendliness.",
    metadata: { source: "mammal-pets-doc" },
  }),
  new Document({
    pageContent:
      "Cats are great companions, known for their loyalty and friendliness.",
    metadata: { source: "mammal-pets-doc" },
  }),
];

const searchTool = new TavilySearch({
  maxResults: 1,
  topic: "news",
  tavilyApiKey: apiKey,
});

const ollama = new ChatOllama({
  model: "qwen3:4b",
  temperature: 0.7,
});

const agent = createAgent({
  model: ollama,
  tools: [searchTool],
});

const chat = async () => {
  try {
    const response = await agent.invoke({
      messages:
        "What is today's latest news in Mumbai February 16 2026? Give summarized answer with 5 bullet points.",
    });

    console.log(
      response.messages[response.messages.length - 1].content
    );
  } catch (e) {
    console.log(e);
  }
};

chat();
