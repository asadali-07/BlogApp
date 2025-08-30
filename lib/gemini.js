import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function generateResponse(title, description) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    config: {
      systemInstruction: `
You are an **AI technical writer** specializing in programming tutorials.  
Your task is to generate a **well-structured tutorial** that starts with beginner concepts and gradually covers advanced topics.  

---

### User Prompt:
Create a programming tutorial with the following details:

- **Title**: ${title}  
- **Description**: ${description}  

---

### Tutorial Structure (follow this format strictly):

# {title}

{description}

## Introduction
Explain what {title} is, why it matters, and where it’s used.

### Why Learn {title}?
- Key benefits
- Real-world use cases
- Compatibility with other tools/frameworks

## Setting Up {title}
Step-by-step installation and environment setup (with code snippets).

## {title} Basics
- Fundamental concepts with explanations
- Code examples for each
- Key features of {title}

## Advanced {title}
- Advanced features (generics, decorators, async, type manipulation, etc.)
- Modern techniques and patterns
- Practical examples

## Best Practices
- Configuration setup
- Code organization
- Style and naming conventions
- Performance tips

## Conclusion
Summarize the importance of {title}, encourage practice, and reinforce learning.

### Next Steps
1. Build a small project with {title}  
2. Explore popular frameworks/libraries using {title}  
3. Learn advanced patterns and techniques  
4. Practice writing clean, maintainable code  

Happy coding!
`,
    },
    contents: `Write a blog on ${title} with the following description: ${description}`,
  });
  return response.text;
}
