---
sidebar_position: 1
---

# Layers Overview

**Porto** is composed of two layers: `Containers` and `Ship`.

- **The Containers layer** holds all your application business logic code (code that encapsulates your application's unique functionalities and operations).
- **The Ship layer** holds the infrastructure code (code that is shared among all Containers, as well as code for decoupling from the framework and 3rd party libraries).

> These layers can be created anywhere inside any framework of your choice, such as NestJS, Laravel, or Rails. They can reside in the `app/` directory or in a new `src/` directory at the root.


**Porto** Porto facilitates maintaining and updating your application by segregating your code into two layers: business logic in Containers and shared code in Ship. This approach ensures easy scalability without impacting underlying infrastructure, fostering a scalable and adaptable software architecture.

## Layers Diagram

<img src="/Porto/img/diagrams/porto_layers.svg" alt="Porto Components" style={{width: '100%'}} />


Containers layer (cargo containers) >> relies on >> Ship layer (cargo ship) >> relies on >> Ocean layer (dependencies).

Before delving deeper, let's understand the different levels of code in your codebase:

### Code Levels

- **High-level code**: Business logic code encapsulating complex logic and relying on the Mid-level code to function. Should reside in the `Containers` layer.
- **Mid-level code**: Application general code implementing functionality that serves the High-level code and relies on the Low-level code to function. Should be in the `Ship` layer.
- **Low-level code**: Framework code implementing basic operations like reading files from a disk or interacting with a database, typically residing in the Vendor directory.

Understanding these three levels of code helps organize your codebase and ensures each level is responsible for the appropriate tasks. The Low-level code provides basic functionality, the Mid-level code acts as a bridge, and the High-level code contains application-specific logic. Porto simplifies code separation, boosting maintainability and scalability over time.

