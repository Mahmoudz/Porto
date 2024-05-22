---
sidebar_position: 3
---

# Ship Layer

The Ship Layer, an integral aspect of Porto's architecture, serves as the backbone for system organization and flexibility. Divided into few areas, it empowers developers to centralize control, decouple application code, and optimize resource management, ultimately facilitating streamlined development and maintenance processes

![](/img/porto_ship_4.png)

This critical component of the **Porto** architecture is divided into 4 areas:

### Containers Bay (Base Classes)
- **Purpose:** Manages core container operations. It provides essential base classes for all container components, ensuring centralized control.
- **Components:** Abstract Classes, Base Classes, Utilites, Shared Classes...
- **Note:** *Contains executable code that all Container's Components must inherit from. Designed to enforce architectural conformity and functional integration.*

### Bridge Deck (Shared Interfaces)
- **Purpose:** Serves as a central repository for shared definitions and schemas, centralizing critical architectural elements to ensure uniformity and interoperability across Containers.
- **Components:** Interfaces, Event Contracts, API Specifications, Types...
- **Note:** *Holds non-executable definitions and structures critical for maintaining consistency and facilitating integration across Containers, without containing code that directly executes.*

### Ship Ballast (Integration Adapters)
- **Purpose:** Hosts structural design patterns like adapters and facades to decouple Containers from other application layers. It allows for enhanced modularity by isolating application code from frameworks and external libraries.
- **Components:** Adapters, Decorators, Facades, Bridges, Proxies, Configurations...
- **Note:** *Optional part, but highly valuable for dependency management and framework independence.*

### Engine Room (Core Services)
- **Purpose:** Powers the architecture's core features by automatically loading, registering, and injecting dependencies into Container Components.
- **Components:** Automatic Dependency Injection, Class Loaders, Automatic Component Registrar...
- **Note:** *Designed to be reusable across applications, enhancing consistency and efficiency.*

<br/>
<br/>

<img src="/Porto/img/diagrams/porto_layers.svg" alt="Porto Components" style={{width: '100%'}} />   

<br/>
<br/>


In **Porto**, the Ship layer, particularly the `Containers Bay` is better kept slim and focused, containing only the essential components. It should not include common reusable functionalities such as Authentication or Authorization, as the Containers provide these.

By separating the infrastructure code from the business logic, Porto enables organized and maintainable application code, while also offering flexibility for customization and scalability. This approach facilitates easy maintenance and updates over time, alongside the ability to extend and customize framework features to meet specific needs.




