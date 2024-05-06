---
sidebar_position: 3
---

# Optional Components

There are several optional components that can be added to your application based on your specific needs. While not all of them may be necessary, some are highly recommended. 

<img src="/Porto/img/porto_components_1.png" alt="Porto Components" style={{width: '40%'}} />


These components include:

- **Tests**: for automated testing of your application
- **Events**: for broadcasting and listening to application events
- **Listeners**: for handling application events
- **Commands**: for creating custom CLI commands
- **Migrations**: for managing changes to your database schema
- **Seeders**: for seeding your database with test data
- **Factories**: for generating test data
- **Middlewares**: for handling HTTP requests and responses
- **Repositories**: for abstracting data persistence logic
- **Criteria**: for querying your database with complex criteria
- **Policies**: for defining authorization policies
- **Service Providers**: for registering services with the application container
- **Contracts**: for defining interfaces to be implemented by classes
- **Traits**: for sharing code between classes
- **Jobs**: for executing long-running tasks in the background
- **Values**: for representing simple value objects
- **Transporters**: for sending and receiving data between systems
- **Mails**: for sending email messages
- **Notifications**: for sending notifications to users
- *And more...*: add additional components as needed

Feel free to add these components to your application as needed to improve its functionality and maintainability. 

## Typical Container Structure

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
