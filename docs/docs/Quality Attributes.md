---
sidebar_position: 7
---

# Quality Attributes

Quality attributes are integral to Porto's design and implementation. They ensure the software meets the needs and expectations of its developers.



## Modularity & Reusability

In Porto, your application business logic lives in Containers. Porto Containers are similar in nature to the Modules *(from the Modular architecture)* and Domains *(from the DDD architecture)*.

Containers can depend on other Containers, similar to how a layer can depend on other layers in a layered architecture.

Porto's rules and guidelines minimize and define the dependency directions between Containers, to avoid circular references between them.

Additionally, it allows the grouping of related Containers, making it possible to reuse them in different projects. Each section contains a reusable portion of your application's business logic.

When it comes to dependency management, the developer is free to move each Container to its own repository or keep all Containers together under a single repository.



## Maintainability & Scalability

Porto aims to reduce maintenance costs by saving developers time. It's structured in a way to ensure code decoupling and forces consistency, which all contribute to its maintainability.

Having a single function per class to describe a functionality makes adding and removing features an easy process.

Porto has a very organized codebase and zero code coupling. In addition to a clear development workflow with predefined data flow and dependencies directions, all of these contribute to its scalability.



## Testability & Debuggability

Extremely adhering to the single responsibility principle by having a single function per class results in having slim classes, which leads to easier testability.

In Porto, each component expects the same type of input and output,
which makes testing, mocking, and stabbing straightforward.

The Porto structure itself makes writing automated tests a smooth process. Each container has a `tests` folder at its root to contain unit tests for its tasks. Additionally, each UI folder has a `tests` folder to contain functional tests (for testing each UI separately).

The key to making testing and debugging easy is not only in the organization of the tests and the predefined responsibility of the components, but also in the decoupling of your code.



## Adaptability & Evolvability

Porto allows for easy accommodation of future changes with minimal effort.

For example, let's say you have a web app that serves HTML and you decide that you also need a mobile app with an API. Porto's pluggable UI's (WEB, API & CLI) enables you to write the business logic of your application first and then implement a UI to interact with your code. This gives you the flexibility to add interfaces as needed and adapt to future changes with ease.

The reason this is possible is that Actions are the central organizing principle, not the controller,
and they can be shared across multiple UI's.
Additionally,
the UI's are separated from the application business logic and separated from each other within each Container.



## Usability & Learnability

Porto prioritizes ease of use and understandability. Its implementation of domain expert language when naming classes and adherence to the single function per class rule allow for quick location of any feature or functionality. This means that you can easily find any Use Case (Action) in your code simply by browsing the files.

Porto guarantees that you can find any feature implementation in less than 3 seconds. For example, if you are looking for where user addresses are being validated, simply go to the Address Container, open the list of Actions, and search for the ValidateUserAddressAction.



## Extensibility & Flexibility

Porto takes future growth into consideration and ensures your code remains maintainable no matter how large the project becomes. Its modular structure, separation of concerns, and organized coupling between internal classes ("Components") allows for modifications to be made without undesirable side effects.

Furthermore, Porto's extensibility and flexibility allow for easy integration with other tools and technologies. Its modular structure enables the addition of new functionality without affecting existing code, making it easy to scale the project as needed. This means that Porto is not only a great choice for current projects, but also for those that may require additional features or integrations in the future. The flexibility provided by Porto also allows for easy customization of the codebase to fit specific project requirements. This makes it a versatile choice for a wide range of development needs.



## Agility & Upgradability

Porto enables quick and easy movement in the development process.

Upgrading the framework is straightforward due to the complete separation between the application and framework code through the Ship layer.

Additionally, Porto's pluggable UI's make it easy to add or remove interfaces, and its modular structure enables adding new features or modifying existing ones without causing negative impacts on other parts of the codebase. This agility and upgradability make Porto a great choice for projects that require flexibility and adaptability to future changes.


<img src="/Porto/img/porto_ship_2.png" alt="Porto Components" style={{width: '100%'}} />