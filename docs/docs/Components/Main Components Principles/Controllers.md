---
sidebar_position: 3
---

# Controllers

Controllers are responsible for validating the request, serving the request data, and building a response. Validation and response happen in separate classes but are triggered from the Controller.

## Principles

- Controllers SHOULD NOT know anything about business logic or any business object.
- A Controller SHOULD only do the following jobs:
  1. Reading Request data (user input)
  2. Calling an Action (and passing request data to it)
  3. Building a Response (usually builds the response based on the data collected from the Action call)
- Controllers SHOULD NOT have any form of business logic (It SHOULD call an Action to perform the business logic).
- Controllers SHOULD NOT call Container Tasks. They MAY only call Actions (And then Actions can call Container Tasks).
- Controllers CAN be called by Routes Endpoints only.
- Every Container UI folder (Web, API, CLI) will have its Controllers.
