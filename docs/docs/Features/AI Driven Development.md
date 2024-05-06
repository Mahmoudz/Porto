---
sidebar_position: 1
---

# AI-Driven Development

## LLMs + Porto = Harmony

In the era of AI-driven development, it's crucial to optimize our code for both human and AI comprehension. **Porto** is designed with this in mind, working harmoniously with Large Language Models (LLMs) such as GitHub Copilot.

**Porto** strictly adheres to the single responsibility principle. Each functionality is encapsulated in a separate file, and each file contains a single function named `run`. This structure makes it easier for AI to understand your code, enhancing development efficiency.

The `run` function in each file is the main entry point for that functionality. By limiting each file to a single functionality and a single `run` function, we reduce complexity and make the code more readable. This is beneficial for both human developers, who can more easily understand and maintain the code, and AI models, which can more accurately predict and generate code based on this structure.

Furthermore, this structure allows for better modularity and separation of concerns. Each file can be developed, tested, and deployed independently, reducing the impact of changes and making the codebase more resilient.
