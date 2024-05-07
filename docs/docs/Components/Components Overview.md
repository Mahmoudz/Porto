---
sidebar_position: 1
---

# Components Overview

In the Container layer, Porto organizes code into `Components`, which are classes with specific roles and responsibilities. All code you develop is structured within these Components, ensuring that each class function has a clear purpose. 

Porto incorporates the well-known MVC components such as `Models`, `Views`, and `Controllers`, and enhances them with powerful additions like `Actions` and `Tasks`.

## Components Diagram

![](/img/diagrams/porto_container_interactions.svg)


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

