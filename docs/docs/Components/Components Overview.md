---
sidebar_position: 1
---

# Components Overview

In the Container layer, Porto organizes code into `Components`, which are classes with specific roles and responsibilities. All code you develop is structured within these Components, ensuring that each class function has a clear purpose. 

Porto incorporates the well-known MVC components such as `Models`, `Views`, and `Controllers`, and enhances them with powerful additions like `Actions` and `Tasks`.

## Components Diagram

![](/img/diagrams/porto_container_interactions.svg)


## Components Types

Every Container consists of a number of Components, in **Porto** the Components are split into two Types: `Main Components` and `Optional Components`.

- **Main Components**: the essential Components that you will need for your Container. These Components are mandatory and are meant to be used to achieve the main functionality of your Container. 

- **Optional Components**: these are Components that you can use to add additional functionality to your Container. They are optional and you can choose to use them or not, depending on your requirements.

By using these Components, you can create a modular and reusable codebase, making it easier to maintain and modify your code in the future.


## Actions & Tasks

In Porto SAP, `Actions` and `Tasks` are the key components that ensure the cleanliness and maintainability of your code. These components interact with the remaining components commonly found in typical web frameworks.

The convention is to append the component type to the fully descriptive name, such as **Action** or **Task**. Here are some examples:

> - Actions examples: RegisterUserAction, ListProductsAction, MakeOrderAction...
> - Tasks examples: ValidatePaymentTask, UpdateInventoryTask, DeliverOrderTask...

These examples illustrate how Actions and Tasks are named in the Porto architecture. This standardized approach not only maintains consistency across your codebase but also simplifies maintenance, as the organization and purpose of each piece of code are clearly defined from the outset.


<img src="/Porto/img/porto_container_2.png" alt="Porto Components" style={{width: '80%'}} />

