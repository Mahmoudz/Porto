---
sidebar_position: 3
---

# Optional Components

Porto offers a variety of optional components that you can integrate into your application to meet specific needs. While incorporating all of them may not be necessary, selecting the most relevant ones can significantly enhance your application’s capabilities. These components range from enhancing automated testing and event handling to managing database schema changes and abstracting data persistence logic. By choosing the right components, you can customize and optimize your application's functionality efficiently These components include:

- **Middlewares**: For processing HTTP requests and responses as intermediaries.
- **Repositories**: For abstracting data persistence logic, promoting code reuse and separation of concerns.
- **Service Providers**: For registering services within the application container, aiding in dependency management.
- **Migrations**: For managing and versioning your database schema changes.
- **Database Seeders**: For providing initial data for your database, useful for testing.
- **Events Publisher**: For broadcasting application events, facilitating communication between components.
- **Event Handlers**: For responding to application events, keeping your application reactive.
- **Data Transfer Objects**: For carrying data between systems, promoting loose coupling.
- **Jobs**: For executing long-running tasks in the background, improving application performance.
- **Commands**: For creating custom CLI commands for interacting with your application.
- **Tests**: For conducting automated checks to ensure your application functions as expected.
- **Contracts**: For defining interfaces that outline expected behaviors, promoting design by contract.
- **Value Objects**: For representing simple entities that are values with no conceptual identity.
- **Mixins**: For sharing code between classes, promoting the DRY (Don't Repeat Yourself) principle.
- **Factories**: For generating test data, aiding in robust and comprehensive testing.
- **Policies**: For defining authorization policies, ensuring secure access control.
- **Criteria**: For building complex database queries, aiding in flexible data retrieval.
- **Configurations**: For managing settings across your application.
- **Localizations**: For translating your application's user interface.
- ... add as many more components as needed

Feel free to add these components to your application as needed to improve its functionality and maintainability. 

<img src="/Porto/img/porto_components_1.png" alt="Porto Components" style={{width: '40%'}} />

## Typical Container Structure

Porto recommends this container structure for its modular design, which enhances code mobility and reusability across different projects. By integrating the UI within the container, you can easily branch out or repurpose sections of code as needed, making each container capable of functioning independently or as part of larger applications. 

Feel free to group more files on the root into logical folders. Whatever makes sense to you and your team is right, as long as you maintain consistency across all containers.

```markdown

├── Actions
├── Tasks

├── Models
├── Value-Objects

├── Events-Publisher
├── Events-Subscriber

├── Cron-Jobs

├── Exceptions
├── Policies
├── Contracts
├── Configs
├── ...
├── Mails
│   ├── Templates
│   ├── Attachments
│   └── ...
├── Data
│   ├── Migrations
│   ├── Seeders
│   ├── Factories
│   ├── Criteria
│   ├── Repositories
│   ├── Validators
│   ├── Transporters
│   ├── Rules
│   └── ...
├── Tests
│   ├── Unit
│   ├── Integration
│   ├── Performance
│   └── Security
└── UI
    ├── API
    │   ├── Routes
    │   ├── Controllers
    │   ├── Requests
    │   ├── Transformers
    │   └── Tests
    │       └── Functional
    ├── WEB
    │   ├── Routes
    │   ├── Controllers
    │   ├── Requests
    │   ├── Views
    │   └── Tests
    │       └── Acceptance
    └── CLI
        ├── Routes
        ├── Commands
        └── Tests
            └── Functional
```
