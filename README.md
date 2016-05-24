# Freestyle Architecture

[![forthebadge](http://forthebadge.com/images/badges/built-by-developers.svg)](http://www.zalt.me)



<a name="Introduction"></a>
##Introduction

The Freestyle Architecture is a clean and super easy to understand Software Architecture.

It's designed to be **Modular**, **Agile** and **Easy** to understand. To help Developers write Scalable, Maintainable and Reusable Code.


<br>

The Freestyle Architecture is a way to structure the software by defining the relations between the application components of different layers.

The main goal is to organise the code base, by thinking of actions in isolation and using the code as modelling tool.

The Freestyle Architecture is very helpful for enterprise and long term projects, as these projects tends to have higher complexity with time.




##Content

- [Introduction](#Introduction)
- [Quality Attributes](#Quality-Attributes)
- [How it works](#How-it-works)
- [Layers](#Layers)
	- [Modules](#Modules)
	- [Services](#Services)
- [Module's Main Components](#Components)
	- [Routes](#Routes)
	- [Controllers](#Controllers)
	- [Tasks](#Tasks)
	- [Models](#Models)
- [Code-Samples](#Code-Samples)
- [Terminology](#Terminology)

<br>

>Business guys do not care about Code, you are the only one who care about it. So let the Code work for you!


![](http://s11.postimg.org/ay107nxlv/contemporary_paintings.jpg)





<a name="Quality-Attributes"></a>
##Quality Attributes

- Reusable Code (Modules of Business Logic).
- Simple files and folders structure.
- Fast Development (Easy to implement new features).
- Easy Maintenance (Easy to adapt changes).
- Super Scalable (Easy to modify and add features).
- Zero Technical debt (Low communication between Developers).
- Easy to Test.
- Easy Framework Upgrade (Decoupled application code from the framework code).
- Zero Code Decoupling.
- Easy to understand by any developer (less magic, more readable code).







<a name="How-it-works"></a>
##How it works

The Request life cycle:

1. `User` calls an Endpoint *(defined in a `Route` file)*
2. `Endpoint` calls it's `Controller`
3. `Controller`read the `Request` input data
4. `Controller` run one or many `Tasks` *(passing data to them if needed)*
5. `Task` performs the business logic *(Can use an external service)*
6. `Task` returns *{something}* to the `Controller`
7. `Controller` builds the response and send it back to the `User`







<a name="Layers"></a>
##Layers

The Freestyle Architecture consist of only 2 layers `Modules` and `Services`. *(Each layer contained in a folder)*.

Each layer contain some components *(components are classes like Models and Controllers)*.






<a name="Modules"></a>
###Modules

The Modules layer contains the Application specific business logic. *(Application functionalities)*.

A Module can be named to the name of a Model,
(example In case of a TO DO App a `Task` would be a Module and a `User` is another Module).

A typical `Module` would contain the following `Components`:

- Routes
- Controllers
- Requests
- Models
- Repositories
- Transformers
- Tests
- Exceptions
- Service Providers
- Contracts
- Info

Each of these `Components` MUST be logically related to each other.

**Modules Interaction**

- `Controllers` can run `Tasks` from another `Module`.
- `Models` can have relationship with `Models` from other `Modules`.
- A `Module` can depend on another `Module` and on `Services`






<a name="Services"></a>
###Services

The `Services` layer holds the reusable code between the different projects.

A `Service` can hold a business Logic, and it's the only way to interact with Third-Party *'Vendor'* Packages. *(To Access any Third-Party Package functionality, you must have a `Service`).*

`Services` SHOULD be designed to be reused across different projects. *(Think of them as third-party packages)*.

A `Service` SHOULD contain the reusable code between the `Modules`.

You can have any `Component` in a `Service` depend on the need. So unlike a `Module` every `Service` has a unique structure depend on it's functionality and role.


**Core Services**

The **Core** `Services` are the glue between the application `Modules` and the Framework. All the Module's `Components` should extend or inherit from one of the **Core** `Services`. *(It separates the application code from the Framework code).*

One of the major roles that the **Core** `Services` play, is facilitating the upgrading of the framework in the future without affecting a single line of the Application business logic.

**Services Interaction**

- A `Service` SHOULD not use any other service.
- `Services` will be used by Modules `Tasks`.






<a name="Components"></a>
##Module's Main Components

Each `Module` consist of multiple `Components`, we'll discuss only the main `Components` of a `Module`. And we'll explain the role of each one and how it can be used:









<a name="Routes"></a>
###Routes

The `Routes` are the first receivers (ports) of the Request in a `Module`.

The `Routes` files can be **API**, **Web** or anything else.

A `Route` file contain multiple `Endpoints`.

The `Endpoint ` main job is to call a particular `Controller` once a Request is made.

Each `Endpoint` SHOULD have a dedicated `Controller` for it.

An `Endpoint` SHOULD only call the `handle` Function on it's `Controller`.








<a name="Controllers"></a>
###Controllers

`Controllers` are the same as in MVC, but their responsibilities are different.

A `Controller` has three main roles:

1. reading the request data (user input)
2. running one or multiple `Tasks` (and passing data to them)
3. building a Response (could be built from the data returned by the `Task`)

`Controllers` SHOULD not have any form of business logic. (It SHOULD run a `Task` to perform a business logic).

Each `Controller` can only respond to a single `Endpoint` .

Every `Controller` SHOULD have a single function `handle`.







<a name="Tasks"></a>
###Tasks

`Tasks` are responsible of performing whatever the User is asking for (Create, Update, Query,...).

Each `Task` has single responsibility and is to handle specific Job.

A `Task` class has one function `run` and can only be called from `Controllers`.

A `Module` SHOULD have a `Task` per functionality (each functionality should be wrapped in a `Task`).

The `Task` can do anything inside it's `Module`, and can use `Services`.

A `Task` can receive and return `Data`. (`Tasks` SHOULD not return a response, the `Controller` job is to return a response).

The `Tasks` concept is pretty much close to the `Commands` concept in a Command-Oriented Architecture.





<a name="Models"></a>
###Models

`Models` are objects representing data, in the database. (same as in MVC Architecture).

Each `Model` SHOULD define the Relations between itself and any other `Model` from other `Modules` (in case a relation exist).

A `Model` SHOULD only hold code and data the represents itself.





<br>
___



<a name="Code-Samples"></a>
##Code Samples


- [Hello API](https://github.com/Mahmoudz/Hello-API) (An API Starter built with PHP on top of Laravel 5.1)





<a name="Terminology"></a>
##Terminology

`Layer` is a logical term, used as indicate to the separation between things. In reality it's just a folder.

`Component` is a class, that has specific responsibility.





<a name="Conventions"></a>
##Conventions

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119 [[RFC2119](http://tools.ietf.org/html/rfc2119)].





## Help us Improve!
Let's help Developers write better code. For an easier Developers life :)



## Credits

- [Mahmoud Zalt (Follow on Twitter)](https://twitter.com/Mahmoud_Zalt)

## License
The MIT License (MIT)










