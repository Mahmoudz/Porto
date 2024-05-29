---
sidebar_position: 6
---

# Components Interaction

Components in Porto like in many other architectures can interact with each other. However, we should be mindful of the dependencies across containers and especially across sections, if you intend to split into micro-services with ease.

## Components Interaction Diagram

![](/img/diagrams/porto_container_interactions.svg)



## Request Life Cycle

The Request Life Cycle is the process through which an API call navigates through the main components of a Porto application. The following steps describe a basic API call scenario:

1. The User calls an `Endpoint` in a `Route` file.
2. `Endpoint` calls a `Middleware` to handle the Authentication.
3. `Endpoint` calls its corresponding `Controller` function.
4. The `Request` object, which is automatically injected in the `Controller`, applies the request validation and authorization rules.
5. `Controller` calls an `Action` and passes the data from the `Request` object to it.
6. `Action` executes the business logic, by calling multiple `Tasks`.
7. `Tasks` execute reusable subsets of the business logic, with each `Task` responsible for a single portion of the main `Action`.
8. `Action` prepares the final result to be returned to the `Controller`, and may collect data from the `Tasks` if needed.
9. `Controller` builds the response using a `View` or `Transformer`, and sends it back to the User.

> **Views:** should be used in case the App serves HTML pages.
>
> **Transformers:** should be used in case the App serves JSON or XML data.



It is important to note that the `Request` object handles request validation (and optionally, authorization rules, unless they are handled by middlewares.), while the `Action` executes the business logic by calling `Tasks`. The `Tasks` are used to execute reusable subsets of the business logic, with each `Task` responsible for a single portion of the main `Action`. The `View` or `Transformer` is used to build the response that is sent back to the User.

Everything triggered before the controller pertains to the interface with the external system, such as the web or potentially blockchain in the future. Meanwhile, everything after the controller relates to your business logic, which remains reusable regardless of the external system.


