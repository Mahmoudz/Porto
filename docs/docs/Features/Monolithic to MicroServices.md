---
sidebar_position: 2
---

# Monolithic to Microservices

**Porto** is designed to scale with you! While many companies shift from Monolithic to Micro-Services (and more recently Serverless) as they scale up, **Porto** offers the flexibility to deflate your Monolithic into Micro-Services (or SOA) at any time with minimal effort.

In **Porto** terms, a Monolithic is equivalent to one cargo ship of Containers, while Micro-Services are equivalent to multiple cargo ships of Containers (disregarding their sizes). This means that with **Porto**, you can start small with a single, well-organized Monolithic service and grow as needed by extracting containers into multiple services as your team and business grow.

By organizing your code into Containers, which are grouped into isolated Sections, **Porto** makes it easy to extract individual Sections and deploy them separately as Micro-Services. This allows you to scale your application architecture as your needs evolve over time, without having to rebuild your entire application from scratch.

However, operating multiple services instead of a single Monolithic service can increase the cost of maintenance (with multiple repositories, CI pipelines, etc.) and requires a new approach to service communication. How Sections "Services" communicate with each other is completely up to the developers, although **Porto** recommends using Events and/or Commands.

With **Porto**, you can create a scalable and flexible software architecture that can adapt to your changing business needs. This allows you to stay ahead of the competition and provide the best possible experience for your users.
