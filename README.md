# Porto (Software Architectural Pattern)

![](/assets/porto-logo.png)

## Welcome to Porto









- [Introduction](#Introduction)
- [Getting Started](#Getting-Started)
	- [Layers Overview](#Layers-Overview)
	- [1) Ship Layer](#Ship-Layer)
	- [2) Containers Layer](#Containers-Layer)
		- [Containers](#Containers)
		- [Sections](#Sections)
- [Components](#Components)
	- [1) Main Components](#Main-Components)
		- [1.1) Components Interaction Diagram](#Components-Interaction-Diagram)
		- [1.2) Request Life Cycle](#Request-Life-Cycle)
		- [1.3) Main Components Definitions & Principles](#Components-Details)
			- [Routes](#Routes)
			- [Controllers](#Controllers)
			- [Requests](#Requests)
			- [Actions](#Actions)
			- [Tasks](#Tasks)
			- [Models](#Models)
			- [Views](#Views)
			- [Transformers](#Transformers)
			- [Exceptions](#Exceptions)
			- [Sub-Actions](#Sub-Actions)
	- [2) Optional Components](#Optional-Components)
- [Typical Container Structure](#Typical-Container-Structure)
- [Porto Quality Attributes](#Quality-Attributes)
- [Implementations (Built with Porto)](#Implementations-Projects)
- [Feedback & Questions](#Feedback)










<a id="Introduction"></a>
# Introduction

**Porto** is a modern software architectural pattern that offers developers a comprehensive set of guidelines, principles, and patterns to organize their code in a highly maintainable and reusable way. The primary goal of **Porto** is to help developers create software that is scalable, flexible, and easy to maintain over time.

"Simplicity is the ultimate sophistication." - Leonardo da Vinci

**Porto** is particularly well-suited for medium to large-sized web projects that require a high degree of flexibility and scalability. With **Porto**, developers can build highly scalable monoliths that can be easily split into multiple microservices whenever needed. This approach enables the reuse of business logic or application features across multiple projects, making it an ideal choice for teams that work on a variety of different projects.

It is built on a foundation of several established architectural concepts, including **Domain Driven Design** (DDD), **Modular**, **Micro Kernel**, **Model View Controller** (MVC), **Layered**, and **Action Domain Responder** (ADR) architectures. By drawing on these established concepts, **Porto** provides developers with a reliable and well-tested framework for building software.

In addition to these foundational concepts, **Porto** also adheres to a set of well-established design principles such as **SOLID**, **OOP**, **LIFT**, **DRY**, **CoC**, **GRASP**, **Generalization**, **High Cohesion**, and **Low Coupling**. These principles are designed to ensure that software built using **Porto** is maintainable, scalable, and easy to understand.

Overall, **Porto** is a powerful and flexible software architecture pattern that offers developers a comprehensive set of tools for building scalable, maintainable, and reusable software. Whether you are working on a small project or a large-scale enterprise application, **Porto** can help you build software that meets your needs today and in the future.








<br>

> **Note:** **Porto** started as an experimental architecture designed to solve common problems that web developers face when building large projects. Since its inception, **Porto** has become a beloved software architecture pattern among developers, offering a powerful set of tools for building scalable, maintainable, and reusable software. Feedbacks & Contributions are much appreciated.












<a id="Getting-Started"></a>
# Getting Started







<a id="Layers-Overview"></a>
## Layers Overview

**Porto** is composed of two layers: "Containers" and "Ship".

- **The Containers layer** holds all your application business logic code.
- **The Ship layer** holds the infrastructure code (shared code between all Containers).

These layers can be created anywhere inside any framework of your choice. For example, in Laravel or Rails, they can be created in the `app/` directory or in a new `src/` directory at the root.

By separating your application code into these two layers, **Porto** allows you to keep your business logic separate from your infrastructure code, making it easier to maintain and update your application over time. The Containers layer contains all of your application-specific code, while the Ship layer contains shared code that can be used across multiple Containers.

This separation of concerns also allows you to easily scale your application by adding or removing Containers as needed, without affecting the underlying infrastructure code. With **Porto**, you can create a scalable and maintainable software architecture that can adapt to your changing needs over time.










### Visual Overview

![](/assets/porto_visual_diagram.png)

Before diving deeper, let's take a moment to understand the different levels of code you will have in your codebase:

#### Code Levels

- **Low-level code**: the framework code (implements basic operations like reading files from a disk or interacting with a database). Usually lives in the Vendor directory.
- **Mid-level code**: the application general code (implements functionality that serves the High-level code and relies on the Low-level code to function). Should be in the `Ship` layer.
- **High-level code**: the business logic code (encapsulates complex logic and relies on the Mid-level code to function). Should be in the `Containers` layer.

By understanding these three levels of code, you can better organize your codebase and ensure that each level is responsible for the appropriate tasks. The Low-level code provides the basic functionality for your application, while the Mid-level code serves as a bridge between the Low-level and High-level code. The High-level code contains your application-specific business logic and encapsulates complex operations.

With **Porto**, you can easily separate your code into these different levels and ensure that each level is responsible for the appropriate tasks. This separation of concerns helps to make your code more maintainable and scalable over time.










### Layers Diagram

To better visualize the relationship between the Containers layer, Ship layer, and the underlying Framework, you can think of the Containers layer as cargo containers that rely on the Ship layer (the cargo ship) which in turn relies on the underlying Framework (the sea). This diagram illustrates the relationship between the different layers:

Containers layer (cargo containers)  >> relies on >>  Ship layer (cargo ship)  >> relies on >>  Framework (sea)

![](/assets/porto_layers.png)













### Monolithic to "Micro" Services

**Porto** is designed to scale with you! While many companies shift from Monolithic to Micro-Services (and more recently Serverless) as they scale up, **Porto** offers the flexibility to deflate your Monolithic into Micro-Services (or SOA) at any time with minimal effort.

In **Porto** terms, a Monolithic is equivalent to one cargo ship of Containers, while Micro-Services are equivalent to multiple cargo ships of Containers (disregarding their sizes). This means that with **Porto**, you can start small with a single, well-organized Monolithic service and grow as needed by extracting containers into multiple services as your team and business grow.

By organizing your code into Containers, which are grouped into isolated Sections, **Porto** makes it easy to extract individual Sections and deploy them separately as Micro-Services. This allows you to scale your application architecture as your needs evolve over time, without having to rebuild your entire application from scratch.

However, operating multiple services instead of a single Monolithic service can increase the cost of maintenance (with multiple repositories, CI pipelines, etc.) and requires a new approach to service communication. How Sections "Services" communicate with each other is completely up to the developers, although **Porto** recommends using Events and/or Commands.

With **Porto**, you can create a scalable and flexible software architecture that can adapt to your changing business needs. This allows you to stay ahead of the competition and provide the best possible experience for your users.




<br>









<a id="Ship-Layer"></a>

## 1) Ship Layer

The Ship layer is a critical component of the **Porto** architecture. It contains the Parent "Base" classes, which are classes extended by every single component, as well as some Utility Code.

The Parent classes in the Ship layer give developers full control over the Container's Components. For example, adding a function to the Base Model class makes it available in every Model in your Containers, saving time and effort.

The Ship layer also plays an important role in separating the Application code from the Framework code. This separation facilitates upgrading the Framework without affecting the Application code, making it easier to maintain and update your application over time.

In **Porto**, the Ship layer is kept slim and focused, containing only the essential Parent classes and utility code. It does not include common reusable functionalities such as Authentication or Authorization, as these functionalities are provided by the Containers. This gives developers more flexibility to customize their application to meet their specific needs.

By separating the infrastructure code from the business logic code, **Porto** allows you to keep your application code organized and maintainable, while also providing the flexibility to customize and scale your application as needed.


<br>









### Ship Structure

The Ship layer is composed of several types of code that work together to power your application:

- **The Core Code**: This is the engine of the ship that auto-registers and auto-loads all your Container's Components to boot your Application. It contains most of the magical code that handles everything that is not part of your business logic, and mostly contains code that facilitates development by extending the framework features.

- **The Containers shared code**:
	- **Parent Classes**: These are the base classes of each Component in your Container. Adding functions to the Parent Classes makes them available in every Container, and Parents are designed to contain shared code between your Containers.
	- **Generic Classes**: These are reusable features and classes that can be used by every Container, such as Global Exceptions, Application Middleware, Global Config files, and more.

It's important to note that all of the Container's Components must extend or inherit from the Ship layer, particularly the Parent folder.

When separating the **Core** into an external package, the Ship Parents should extend from the Core Parents (which can be named Abstract, since most of them are supposed to be Abstract Classes). The Ship Parents hold your custom Application shared business logic, while the Core Parents (Abstracts) hold your framework's common code. Essentially, anything that is not business logic should be hidden from the actual Application being developed.

By organizing your code in this way, **Porto** makes it easy to maintain and update your application over time, while also allowing you to extend and customize the framework features to meet your specific needs.


<br>









<a id="Containers-Layer"></a>

## 2) Containers Layer

The Containers layer is the heart of the **Porto** architecture. Here is where the application-specific business logic lives, including all the Application features and functionalities. You'll spend 90% of your time working in this layer, developing new features, and maintaining existing ones.

One of the main benefits of using **Porto** is that it manages the complexity of a problem by breaking it down into smaller, more manageable Containers. Each Container is designed to encapsulate a specific piece of functionality, making it easier to develop, test, and maintain.

By organizing your code in this way, **Porto** helps you to create a more modular and reusable codebase. This makes it easier to scale and maintain your application over time, as well as reducing the amount of code duplication across different parts of your application.

Overall, the Containers layer is the key to building a maintainable and scalable application architecture with **Porto**.



<br>


<a id="Containers"></a>
### Containers

A Container is a self-contained module that encapsulates a specific piece of functionality in your application. It can be a feature, a wrapper around a RESTful API resource, or anything else you need.



#### Example 1:

For example, in a TODO App, the 'Task', 'User', and 'Calendar' objects would each live in a different Container, with its own Routes, Controllers, Models, Exceptions, and more. Each Container is responsible for receiving requests and returning responses from whichever supported UI (Web, API, etc.).

While it's advised to use a Single Model per Container, in some cases, you may need more than one Model, and that's perfectly fine. You could also have Value Objects, which are similar to Models but don't get represented in the DB on their tables but as data on the Models. These objects get built automatically after their data is fetched from the DB, such as Price, Location, Time, and more.

It's important to keep in mind that two Models mean two Repositories, two Transformers, and more. Unless you want to use both Models always together, split them into two Containers.

If you have high dependencies between two Containers, placing them in the same Section would make reusing them easier in other projects.



#### Example 2:

For example, if you look at [Apiato](http://apiato.io), the first project implementing **Porto**, you will notice that Authentication and Authorization are both features provided as Containers.

By breaking down your application into smaller, more manageable Containers, **Porto** makes it easier to develop, test, and maintain your codebase over time.






<a id="Containers-Structure"></a>
#### Basic Containers Structure

```
Container 1
	├── Actions
	├── Tasks
	├── Models
	└── UI
	    ├── WEB
	    │   ├── Routes
	    │   ├── Controllers
	    │   └── Views
	    ├── API
	    │   ├── Routes
	    │   ├── Controllers
	    │   └── Transformers
	    └── CLI
	        ├── Routes
	        └── Commands

Container 2
	├── Actions
	├── Tasks
	├── Models
	└── UI
	    ├── WEB
	    │   ├── Routes
	    │   ├── Controllers
	    │   └── Views
	    ├── API
	    │   ├── Routes
	    │   ├── Controllers
	    │   └── Transformers
	    └── CLI
	        ├── Routes
	        └── Commands
```











<a id="Containers-Interactions"></a>
#### Containers Communication

Containers can communicate with each other in a variety of ways within the same Section:

- A Container may depend on one or many other Containers.
- A Controller may call Tasks from another Container.
- A Model may have a relationship with a Model from another Container.
- Other forms of communication are also possible, such as via Events and Commands.

*If you use Event-based communication between Containers, you can use the same mechanism after splitting your codebase into multiple services.*

Note that if you're not familiar with separating your code into Modules/Domains or if you prefer not to use that approach, you can create your entire Application in a single Container. However, this is not recommended and may not be as scalable or maintainable over time.







<a id="Sections"></a>
### Sections

Section are another very important aspect in the Porto architecture.

A **Section** is a group of related containers. It can be a **service** _(micro or bigger)_, or a sub-system within the main system, or anything else.

*Think of a Section as a rows of containers on a cargo ship. Well organized containers in rows, speeds up the loading and unloading of related containers for a specific customer.*

The basic definition of a Section is a folder that contains related Containers. However the benefits are huge. (A section is equivalent to a bounded context from the Domain-driven design) Each section represents a portion of your system and is completely isolated from other sections. 

A Section can be deployed separately.

#### Example 1:

If you're building a racing game like Need for Speed, you may have the following two sections: the Race Section and the Lobby Section, where each section contains a Car Container and a Car Model inside it, but with different properties and functions. 
In this example the Car Model of the Race section can contain the business logic for accelerating and controlling the car, while the Car Model of the Lobby Section contains the business logic for customizing the car (color, accessories..) before the race.

Sections allows separating large Model into smaller ones. And they can provide boundaries for different Models in your system.

If you prefer simplicity or you have only single team working on the project, you can have no Sections at all (where all Containers live in the containers folder) which means your project is a single section. In this case if the project grew quickly and you decided you need to start using sections, you can make a new project also with a single section, this is known as Micro-Services. In Micro-Services each section "project portion" live in its own project (repository) and they can communicate over the network usually using the HTTP protocol.

#### Example 2:

In a typical e-commerce application you can have the following sections: Inventory Section, Shipping Section, Order Section, Payment Section, Catalog Section and more...

As you can imagine each of these Sections can be a micro-service by itself. And can be extracted and deployed on its own server based on the traffic it receives.









<a id="Sections-Interactions"></a>
### Sections Communication

- A Section MUST be isolated and SHOULD NOT depend on any other Section.
- A Section MAY listen to events fired by other Sections. (Commands can be used as an alternative to events.)

This architecture allows for a loose coupling between Sections, enabling a more scalable and flexible system. Events and commands can be used to communicate between different Sections, allowing for easy expansion and modification of the system over time.


<br>






<a id="Components"></a>
# Components

In the Container layer, there's a set of `Components` "Classes" with predefined responsibilities. Every single piece of code you write should live in a Component (class function). Porto defines a huge list of those Components for you, along with a set of guidelines to follow when using them, to keep the development process smooth.

Components ensure consistency and make your code easier to maintain as you already know where each piece of code should be found.



<a id="Components-Types"></a>
### Components Types

Every Container consists of a number of Components, in **Porto** the Components are split into two Types: `Main Components` and `Optional Components`.

- **Main Components**: the essential Components that you will need for your Container. These Components are mandatory and are meant to be used to achieve the main functionality of your Container. 

- **Optional Components**: these are Components that you can use to add additional functionality to your Container. They are optional and you can choose to use them or not, depending on your requirements.

By using these Components, you can create a modular and reusable codebase, making it easier to maintain and modify your code in the future.












<a id="Main-Components"></a>
## 1) Main Components

You must use these Components as they are essential for almost all types of Web Apps:

Routes - Controllers - Requests - Actions - Tasks - Models - Views - Transformers.



> **Views:** should be used in case the App serves HTML pages.
> <br>
> **Transformers:** should be used in case the App serves JSON or XML data.

*For detailed definitions and principles of each of the main components, please refer to the "Some Components Definitions & Principles" section below.*












<a id="Components-Interaction-Diagram"></a>
### 1.1) Main Components Interaction Diagram

![](/assets/porto_container_interactions.png)











<a id="Request-Life-Cycle"></a>
### 1.2) The Request Life Cycle

The Request Life Cycle is the process through which an API call navigates through the main components of a Porto application. The following steps describe a basic API call scenario:

1. The User calls an `Endpoint` in a `Route` file.
2. `Endpoint` calls a `Middleware` to handle the Authentication.
3. `Endpoint` calls its corresponding `Controller` function.
4. The `Request` object, which is automatically injected in the `Controller`, applies the request validation and authorization rules.
5. `Controller` calls an `Action` and passes the data from the `Request` object to it.
6. `Action` executes the business logic, or it can call as many `Tasks` as needed to execute reusable subsets of the business logic.
7. `Tasks` execute reusable subsets of the business logic, with each `Task` responsible for a single portion of the main `Action`.
8. `Action` prepares the data to be returned to the `Controller`, and may collect data from the `Tasks` if needed.
9. `Controller` builds the response using a `View` or `Transformer`, and sends it back to the User.

It is important to note that the `Request` object handles request validation and authorization rules, while the `Action` executes the business logic. The `Tasks` can be used to execute reusable subsets of the business logic, with each `Task` responsible for a single portion of the main `Action`. The `View` or `Transformer` is used to build the response that is sent back to the User.







<a id="Components-Details"></a>
### 1.3) Some Components Definitions & Principles

> Click on the arrows below to read about each component.













<a id="Routes"></a>
<Details>
<Summary>Routes</Summary>
<br>

Routes are responsible for mapping all incoming HTTP requests to their controller's functions. When an HTTP request hits the Application, the Endpoints match with the URL pattern and make the call to the corresponding Controller function.

#### Principles:

- There are three types of Routes, API Routes, Web Routes, and CLI Routes.
- The API Routes files SHOULD be separated from the Web Routes files, each in its folder.
- The Web Routes folder will contain only the Web Endpoints (accessible by web browsers); And the API Routes folder will contain only the API Endpoints (accessible by any consumer app).
- Every Container SHOULD have its Routes.
- Every Route file SHOULD contain a single Endpoint.
- The Endpoint job is to call a function on the corresponding Controller once a request of any type is made (It SHOULD NOT do anything else).

***

</Details>










<a id="Controllers"></a>
<Details>
<Summary>Controllers</Summary>
<br>

Controllers are responsible for validating the request, serving the request data, and building a response. *Validation and response happen in separate classes but triggered from the Controller*.

*The Controllers concept is the same as in MVC (They are the C in MVC), but with limited and predefined responsibilities.*

#### Principles:

- Controllers SHOULD NOT know anything about business logic or any business object.
- A Controller SHOULD only do the following jobs:
   1. Reading a Request data (user input)
   2. Calling an Action (and passing request data to it)
   3. Building a Response (usually builds the response based on the data collected from the Action call)
- Controllers SHOULD NOT have any form of business logic (It SHOULD call an Action to perform the business logic).
- Controllers SHOULD NOT call Container Tasks. They MAY only call Actions (And then Actions can call Container Tasks).
- Controllers CAN be called by Routes Endpoints only.
- Every Container UI folder (Web, API, CLI) will have its Controllers.

You may wonder why we need the Controller when we can directly call the Action from the Route. The Controller layer helps make the Action reusable in multiple UI's (Web & API), since it doesn't build a response, and that reduces the amount of code duplication across different UI's.

Here's an example below:

- UI (Web): Route `W-R1` -> Controller `W-C1` -> Action `A1`.
- UI (API): Route `A-R1` -> Controller `A-C1` -> Action `A1`.

As you can see in the example above, the Action `A1` was used by both routes `W-R1` and `A-R1`, with the help of the Controllers layer that lives in each UI.

***

</Details>










<a id="Requests"></a>
<Details>
<Summary>Requests</Summary>
<br>

Requests mainly serve the user input in the application. They are very useful to automatically apply the Validation and Authorization rules.

Requests are the best place to apply validations since the validation rules will be related to every request. Requests can also check the Authorization, e.g., check if this user has access to this controller function (for example, check if a specific user owns a product before deleting it, or check if this user is an admin to edit something).

#### Principles:

- A Request MAY hold the Validation/Authorization rules.
- Requests SHOULD only be injected in Controllers. Once injected, they automatically check if the request data matches the validation rules, and if the request input is not valid, an Exception will be thrown.
- Requests MAY also be used for authorization; they can check if the user is authorized to make a request.

***

</Details>












<a id="Actions"></a>
<Details>
<Summary>Actions</Summary>
<br>

Actions represent the Use Cases of the Application *(i.e., the actions that can be performed by a user or software in the application)*.

Actions can hold business logic and/or orchestrate the tasks to perform the business logic.

Actions take data structures as inputs, manipulate them according to the business rules, and output new data structures.

Actions should not be concerned with how the data is gathered or how it will be represented.

By looking at the Actions folder of a Container, you can determine what use cases (features) your Container provides.
By looking at all the Actions, you can tell what an application can do.

#### Principles:
- Every Action should be responsible for performing a single use case in the application.
- An Action may retrieve data from Tasks and pass data to another Task.
- An Action may call multiple Tasks, and can even call Tasks from other Containers.
- Actions may return data to the Controller.
- Actions should not return a response (the Controller's job is to return a response).
- An Action should not call another Action. Instead, if you need to reuse a big chunk of business logic in multiple Actions, and this chunk is calling some Tasks, you can create a SubAction (see the SubAction section below).
- Actions are mainly used from Controllers. However, they can be used from Events Listeners, Commands, and/or other Classes, but they should not be used from Tasks.
- Every Action should have only a single function named `run()`.
- The Action main function `run()` can accept a Request Object in the parameter.
- Actions are responsible for handling all expected Exceptions.

***

</Details>










<a id="Tasks"></a>
<Details>
<Summary>Tasks</Summary>
<br>

Tasks are classes that hold shared business logic between multiple Actions across different Containers.

Each Task is responsible for a small part of the logic, and it usually has a single function called `run()`. However, Tasks can have more functions with explicit names if needed, which makes the Task class replace the concept of function flags.

Tasks are optional, but in most cases, you find yourself in need of them. For example, if you have Action 1 that needs to find a record by its ID from the DB, then fires an Event. And you have an Action 2 that needs to find the same record by its ID, then makes a call to an external API. Since both actions are performing the "find a record by ID" logic, we can take that business logic and put it in its own class, that class is the Task. This Task is now reusable by both Actions and any other Action you might create in the future.

The rule is, whenever you see the possibility of reusing a piece of code from an Action, you should put that piece of code in a Task. Do not blindly create Tasks for everything. You can always start by writing all the business logic in an Action and only create a dedicated Task when you need to reuse it. Refactoring is essential to adapt to the code growth.

#### Principles:
- Every Task SHOULD have a single responsibility (job).
- A Task MAY receive and return Data. (Task SHOULD NOT return a response, the Controller's job is to return a response).
- A Task SHOULD NOT call another Task. Because that will take us back to the Services Architecture, which can lead to a big mess.
- A Task SHOULD NOT call an Action. Because your code wouldn't make any logical sense then!
- Tasks SHOULD only be called from Actions. (They could be called from Actions of other Containers as well!).
- A Task SHOULD NOT be called from the Controller. Because this leads to non-documented features in your code. It's totally fine to have many Actions (e.g., `FindUserByIdAction` and `FindUserByEmailAction`) where both Actions are calling the same Task, as well as it's totally fine to have a single Action `FindUserAction` making a decision to which Task it should call.
- A Task SHOULD NOT accept a Request object in any of its functions. It can take anything in its function parameters but never a Request object. This will keep it free to use from anywhere and can be tested independently.

***

</Details>











<a id="Models"></a>
<Details>
<Summary>Models</Summary>
<br>

Models provide an abstraction for data and represent the data in the database. (They are the M in MVC).

Models are responsible for how the data should be handled and ensure that data is properly stored in the backend (e.g. Database).

#### Principles:
- A Model SHOULD NOT contain business logic, but only the code and data that represents itself (such as relationships with other models, hidden fields, table name, and fillable attributes).
- A single Container MAY contain multiple Models.
- A Model MAY define the relationships between itself and other Models (if such relationships exist).

***

</Details>











<a id="Views"></a>
<Details>
<Summary>Views</Summary>
<br>

Views contain the HTML served by your application.

Their main goal is to separate the application logic from the presentation logic. (They are the V in MVC).

Views receive data from the Controller and use it to generate the HTML that will be sent to the client's browser. Views can also include template files that define the structure and layout of the HTML, making it easier to maintain consistency across multiple pages.


#### Principles:
- Views should only be used from the Web Controllers.
- Views should be separated into multiple files and folders based on what they display.
- A single Container may contain multiple View files.
- Views SHOULD NOT contain any business logic or data manipulation. They are only responsible for presentation.

***

</Details>









<a id="Transformers"></a>
<Details>
<Summary>Transformers</Summary>
<br>

Transformers, short for Response Transformers, are equivalent to Views but for JSON Responses. While Views take data and represent it in HTML, Transformers take data and represent it in JSON.

Transformers are responsible for transforming Models into Arrays. They take a Model or a group of Models "Collection" and convert it to a formatted serializable Array. 

#### Principles:
- All API responses MUST be formatted via Transformers.
- Every Model (that gets returned by an API call) SHOULD have a corresponding Transformer.
- A single Container MAY have multiple Transformers.
- Usually, every Model would have a Transformer to ensure consistency in the API response format.

***

</Details>










<a id="Exceptions"></a>
<Details>
<Summary>Exceptions</Summary>
<br>

Exceptions are also a form of output that should be expected (like an API exception) and well defined.

Exceptions are a way to handle errors in a well-defined and expected manner. In a well-designed application, exceptions should be thrown whenever an error occurs that cannot be handled by the code in its current context.


#### Principles:
- There are container Exceptions (live in Containers) and general Exceptions (live in Ship).
- Tasks, Sub-Tasks, Models, and any class in general can throw a very specific Exception.
- The caller MUST handle all expected Exceptions from the called class.
- Actions MUST handle all Exceptions, making sure they don't leak to upper Components and cause unexpected behaviors.
- Exceptions names SHOULD be as specific as possible, and they SHOULD have clear descriptive messages.

***

</Details>











<a id="Sub-Actions"></a>
<Details>
<Summary>Sub-Actions</Summary>
<br>

SubActions are designed to eliminate code duplication in Actions. SubActions allow Actions to share a sequence of Tasks, while Tasks allows Actions to share a piece of functionality.

The SubActions are created to solve a problem. Sometimes a big chunk of business logic is reused in multiple Actions, and that code is already calling some Tasks. In such cases, the solution is to create a SubAction.

For example, assuming an Action `A1` is calling Task1, Task2 and Task3, and another Action `A2` is calling Task2, Task3, Task4, and Task5. Notice both Actions are calling Tasks 2 and 3. To eliminate code duplication, we can create a SubAction that contains all the common code between both Actions.

#### Principles:
- Sub-Actions MUST call Tasks. If a Sub-Action is doing all the business logic without the help of at least one Task, it probably shouldn't be a Sub-Action but a Task instead.
- A Sub-Action MAY retrieve data from Tasks and pass data to another Task.
- A Sub-Action MAY call multiple Tasks (they can even call Tasks from other Containers).
- Sub-Actions MAY return data to the Action.
- Sub-Action SHOULD NOT return a response (the Controller job is to return a response).
- Sub-Action SHOULD NOT call another Sub-Action (try to avoid that as much as possible).
- Sub-Action SHOULD be used from Actions. However, they can be used from Events, Commands, and/or other Classes. But they SHOULD NOT be used from Controllers or Tasks.
- Every Sub-Action SHOULD have only a single function named `run()`.

***

</Details>







<br>










<a id="Optional-Components"></a>
## 2) Optional Components

There are several optional components that can be added to your application based on your specific needs. While not all of them may be necessary, some are highly recommended. These components include:

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


<br>









<a id="Typical-Container-Structure"></a>
## Typical Container Structure

> A Container with a list of Main and Optional Components.

```
Container
	├── Actions
	├── Tasks
	├── Models
	├── Values
	├── Events
	├── Listeners
	├── Policies
	├── Exceptions
	├── Contracts
	├── Traits
	├── Jobs
	├── Notifications
	├── Providers
	├── Configs
	├── Mails
	│   ├── Templates	
	├── Data
	│   ├── Migrations
	│   ├── Seeders
	│   ├── Factories
	│   ├── Criteria
	│   ├── Repositories
	│   ├── Validators
	│   ├── Transporters
	│   └── Rules
	├── Tests
	│   ├── Unit
	│   └── Traits
	└── UI
	    ├── API
	    │   ├── Routes
	    │   ├── Controllers
	    │   ├── Requests
	    │   ├── Transformers
	    │   └── Tests
	    │       └── Functional
	    ├── WEB
	    │   ├── Routes
	    │   ├── Controllers
	    │   ├── Requests
	    │   ├── Views
	    │   └── Tests
	    │       └── Acceptance
	    └── CLI
	        ├── Routes
	        ├── Commands
	        └── Tests
	            └── Functional
```










<a id="Quality-Attributes"></a>
## Porto Quality Attributes

> The benefits of using Porto.










<Details>
<Summary>Modularity & Reusability</Summary>
<br>

In Porto, your application business logic lives in Containers. Porto Containers are similar in nature to the Modules *(from the Modular architecture)* and Domains *(from the DDD architecture)*.

Containers can depend on other Containers, similar to how a layer can depend on other layers in a layered architecture.

Porto's rules and guidelines minimize and define the dependency directions between Containers, to avoid circular references between them.

Additionally, it allows the grouping of related Containers into sections, making it possible to reuse them in different projects. Each section contains a reusable portion of your application's business logic.

When it comes to dependency management, the developer is free to move each Container to its own repository or keep all Containers together under a single repository.

***

</Details>











<Details>
<Summary>Maintainability & Scalability</Summary>
<br>

Porto aims to reduce maintenance costs by saving developers time. It's structured in a way to ensure code decoupling and forces consistency, which all contribute to its maintainability.

Having a single function per class to describe a functionality makes adding and removing features an easy process.

Porto has a very organized codebase and zero code coupling. In addition to a clear development workflow with predefined data flow and dependencies directions, all of these contribute to its scalability.

***

</Details>











<Details>
<Summary>Testability & Debuggability</Summary>
<br>

Extremely adhering to the single responsibility principle by having a single function per class results in having slim classes, which leads to easier testability.

In Porto, each component expects the same type of input and output, which makes testing, mocking, and stabbing very simple.

The Porto structure itself makes writing automated tests a smooth process. Each container has a `tests` folder at its root to contain unit tests for its tasks. Additionally, each UI folder has a `tests` folder to contain functional tests (for testing each UI separately).

The key to making testing and debugging easy is not only in the organization of the tests and the predefined responsibility of the components, but also in the decoupling of your code.

***

</Details>











<Details>
<Summary>Adaptability & Evolvability</Summary>
<br>

Porto allows for easy accommodation of future changes with minimal effort.

For example, let's say you have a web app that serves HTML and you decide that you also need a mobile app with an API. Porto's pluggable UI's (WEB, API & CLI) enables you to write the business logic of your application first and then implement a UI to interact with your code. This gives you the flexibility to add interfaces as needed and adapt to future changes with ease.

The reason this is possible is because Actions are the central organizing principle, not the controller, and they can be shared across multiple UI's. Additionally, the UI's are separated from the application business logic and separated from each other within each Container.

***

</Details>













<Details>
<Summary>Usability & Learnability</Summary>
<br>

Porto prioritizes ease of use and understandability. Its implementation of domain expert language when naming classes and adherence to the single function per class rule allow for quick location of any feature or functionality. This means that you can easily find any Use Case (Action) in your code simply by browsing the files.

Porto guarantees that you can find any feature implementation in less than 3 seconds. For example, if you are looking for where user addresses are being validated, simply go to the Address Container, open the list of Actions, and search for the ValidateUserAddressAction.

***

</Details>











<Details>
<Summary>Extensibility & Flexibility</Summary>
<br>

Porto takes future growth into consideration and ensures your code remains maintainable no matter how large the project becomes. Its modular structure, separation of concerns, and organized coupling between internal classes ("Components") allows for modifications to be made without undesirable side effects.

Furthermore, Porto's extensibility and flexibility allow for easy integration with other tools and technologies. Its modular structure enables the addition of new functionality without affecting existing code, making it easy to scale the project as needed. This means that Porto is not only a great choice for current projects, but also for those that may require additional features or integrations in the future. The flexibility provided by Porto also allows for easy customization of the codebase to fit specific project requirements. This makes it a versatile choice for a wide range of development needs.

***

</Details>











<Details>
<Summary>Agility & Upgradability</Summary>
<br>

Porto enables quick and easy movement in the development process.

Upgrading the framework is straightforward due to the complete separation between the application and framework code through the Ship layer.

Additionally, Porto's pluggable UI's make it easy to add or remove interfaces, and its modular structure enables adding new features or modifying existing ones without causing negative impacts on other parts of the codebase. This agility and upgradability make Porto a great choice for projects that require flexibility and adaptability to future changes.

***

</Details>






<br>










<a id="Implementations-Projects"></a>

# Implementations

> Feel free to list your implementation here.

List of projects implementing the Porto architecture.

- **PHP**
	- **Laravel** 
		- [**Apiato**](http://apiato.io/) **(By the Porto creator)** A PHP Framework for building scalable API's on top of Laravel.
		- [**Laravel Large Project**](https://github.com/stasyanko/laravel-large-project) An example project to show how to build large projects with Porto.
	- **Zend Expressive**
		- [**Expressive Porto**](https://github.com/lpj145/expressive-porto) An implementation of the Porto architecture with Zend Expressive.
- **JavaScript**
- **Python**
	- **Django** 
		- [**PyPorto**](https://github.com/discoroveryx/pyporto) A design for building scalable and testable applications with Django Rest Framework.
- **Ruby**
- **Java**
- **C#**
- ...











<a id="Feedback"></a>
# Get in Touch

> Your feedback is important.

We hope this documentation has provided you with a comprehensive overview of **Porto SAP** and its benefits. As with any software architecture pattern, **Porto** is continually evolving, and we welcome your feedback and contributions to help make it even better. If you have any suggestions or questions about **Porto**, feel free to reach out.






<a id="Author"></a>
## Author

<table>
  <tbody>
     <tr>
        <td align="center" valign="top">
            <img width="125" height="125" src="https://github.com/mahmoudz.png?s=150">
            <br>
            <strong>Mahmoud Zalt</strong>
            <br>
            Twitter: <a href="https://github.com/Mahmoudz">@mahmoudz</a>
            <br>
            Site: <a href="http://zalt.me">zalt.me</a>
        </td>
     </tr>
  </tbody>
</table>











<a id="Donations"></a>
## Donations

Become a [Github Sponsor](https://github.com/sponsors/Mahmoudz).
<br>
Direct donation via [Paypal](https://paypal.me/mzmmzz).
<br>
Become a [Patreon](https://www.patreon.com/zalt).







<a name="License"></a>
## License

[MIT](https://opensource.org/licenses/MIT) © Mahmoud Zalt
