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

<img src="/Porto/img/diagrams/porto_layers.svg" alt="Porto Layers" style={{width: '100%'}} />

<br/>
<br/>

This diagram provides a detailed view of the Porto architecture, showcasing how different layers and components interact and depend on each other.

### Containers Layer

The Containers layer is the core of the application where business logic is implemented. Containers are modular units that can be grouped into sections to organize related functionalities. Within a section, containers communicate directly. However, when communication is needed across sections or with external systems, it is facilitated through tools like a Message Broker or API Gateway. This modular approach ensures each container can operate independently yet interact seamlessly when necessary, enhancing flexibility and maintainability.

### Ship Layer

Supporting the Containers layer is the Ship layer, which provides essential shared infrastructure. This layer is divided into four key parts:
- **Containers Bay**: This part includes foundational classes and utilities that are used consistently across all containers, ensuring uniformity.
- **Bridge Deck**: It contains shared interfaces and schemas that help in maintaining interoperability and standard communication protocols between containers.
- **Ship Ballast**: Hosts integration components that isolate containers from other parts of the application, promoting modular design and easing integration efforts.
- **Engine Room**: Focuses on core functionalities like dependency injection and automatic registration of components, crucial for efficient application management and performance optimization.

### Ocean Layers

At the base of the Porto architecture lie the Ocean Layers, representing the underlying dependencies required for the system's operation. These foundational layers include:
- **Frameworks & Libraries**: Essential for providing the necessary tools and functions used throughout the application development.
- **Runtime Environment**: Offers the runtime context in which the application executes, handling all necessary runtime operations.
- **Operating System**: Manages the hardware resources and provides the essential services that applications need to function.
- **Firmware**: Contains low-level software crucial for controlling and interacting with the hardware.
- **Physical Hardware**: The tangible machines and devices that form the physical foundation supporting all higher-level software components.

Together, these layers ensure a robust, scalable, and maintainable architecture. By clearly defining the role and interaction of each layer, Porto provides a structured approach to building and managing complex applications, allowing for scalability and ease of maintenance.


## Code Levels

Before delving deeper, let's understand the different levels of code in your codebase:

- **High-level code**: Business logic code encapsulating complex logic and relying on the Mid-level code to function. Should reside in the `Containers` layer.
- **Mid-level code**: Application general code implementing functionality that serves the High-level code and relies on the Low-level code to function. Should be in the `Ship` layer.
- **Low-level code**: Framework code implementing basic operations like reading files from a disk or interacting with a database, typically residing in the Vendor directory.

Understanding these three levels of code helps organize your codebase and ensures each level is responsible for the appropriate tasks. The Low-level code provides basic functionality, the Mid-level code acts as a bridge, and the High-level code contains application-specific logic. Porto simplifies code separation, boosting maintainability and scalability over time.
