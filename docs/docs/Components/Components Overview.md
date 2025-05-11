---
sidebar_position: 1
---

# Components Overview

In the Container layer, Porto organizes code into `Components`, which are classes with specific roles and responsibilities. You can think of these Components as parcels within a container, each encapsulating specific code and functionality. All code you develop is structured within these Components, ensuring that each class function has a clear purpose. 

Porto incorporates the well-known MVC components such as `Models`, `Views`, and `Controllers`, and enhances them with powerful additions like `Actions` and `Tasks`.

## Components Diagram

<img src="/Porto/img/diagrams/porto_container_interactions.svg" alt="Porto Components" style={{width: '100%'}} />

<br/>
<br/>

This diagram explains the flow of data and interactions within the Porto architecture, from handling external inputs to executing business logic through actions and tasks.

### Input Handlers

External input handlers manage incoming requests from outside the system:
- **API Route & Web Route**: These are the entry points for external requests such as API calls and web page requests. Requests may be processed by middleware before reaching the controller.
- **Controllers**: The requests are then handled by controllers. API Controllers manage API-specific logic, while Web Controllers handle web-specific logic.
- **View Template**: For web routes, the View Template is used to render the response that will be sent back to the user.
- **Data Transformer**: This component converts incoming data into a format suitable for the internal processing steps that follow.


Internal input triggers handle scheduled tasks and internal events:
- **CLI Command & Event Subscriber**: These components handle command-line interface commands and event subscriptions that trigger internal actions.
- **Cron Job**: Manages scheduled tasks, triggering them at specified intervals.
- **Handlers**: Command Handlers, Event Handlers, and Job Handlers execute tasks in response to these internal triggers.

### Business Logic

The heart of the diagram lies in the Business Logic layer, where core processing happens:
- **Actions**: Actions are the central units of business logic. They orchestrate various tasks needed to complete a business process.
    - **Action 1 & Action 2**: Actions receive data through Data Transfer Objects and manage the flow of the process. For example, Action 1 might handle user registration while Action 2 processes orders.
- **Sub-Actions**: For complex tasks, Actions might delegate parts of their responsibilities to Sub-Actions.
    - **Sub-Action 1**: Supports the main Actions by handling a segment of the business logic.
- **Tasks**: Actions break down into Tasks, each responsible for a specific part of the process.
    - **Task 1, Task 2, Task 3, Task 4**: These tasks perform detailed operations, such as validating data, updating records, or sending notifications. For instance, Action 1 may involve Task 1 (data validation) and Task 2 (database update).

### Data Management

Data management components handle interactions with databases and other storage mechanisms:
- **Repositories**: Repositories abstract the data access logic, providing a clean interface for the Tasks to interact with data models.
- **Data Models**: Represent the application's data structures and are used by the tasks to store and retrieve data.
    - **Data Model 1 & Data Model 2**: Examples of data models that tasks may use to interact with the database.
- **Clients**: Facilitate communication with external systems.
    - **API Client, DB Client, Events Client**: These clients allow tasks to interact with external APIs, databases, and event systems. For example, the API Client might be used to fetch data from an external service.

By understanding the flow from external inputs, through business logic actions and tasks, to data management, you can see how Porto structures an application's architecture for clarity, scalability, and maintainability.


## Components Types

In **Porto**, every Container is comprised of a number of specific `Components`, categorized into two main types: `Main Components` and `Optional Components`.

- **Main Components**: These are essential for the core functionality of your Container. They are mandatory and are designed to fulfill the primary roles within the Container. (Example: Actions & Tasks.)

- **Optional Components**: These Components are supplementary and can be integrated based on specific project needs. They are not mandatory, allowing for flexibility in enhancing the Container's functionality. (Example: Middlewares & Repositories.)

This structure promotes a modular and adaptable codebase, simplifying both maintenance and future modifications.


## Actions & Tasks

In Porto SAP, `Actions` and `Tasks` are the key components that ensure the cleanliness and maintainability of your code. These components interact with the remaining components commonly found in typical web frameworks.

The convention is to append the component type to the fully descriptive name, such as **Action** or **Task**. Here are some examples:

> - Actions examples: RegisterUserAction, ListProductsAction, MakeOrderAction...
> - Tasks examples: ValidatePaymentTask, UpdateInventoryTask, DeliverOrderTask...

These examples illustrate how Actions and Tasks are named in the Porto architecture. This standardized approach not only maintains consistency across your codebase but also simplifies maintenance, as the organization and purpose of each piece of code are clearly defined from the outset.


<img src="/Porto/img/porto_container_2.png" alt="Porto Components" style={{width: '80%'}} />

