---
sidebar_position: 6
---

# Models

Models provide an abstraction for data and represent the data in the database. They are the M in MVC.

## Principles

- A Model SHOULD NOT contain business logic, but only the code and data that represents itself (such as relationships with other models, hidden fields, table name, and fillable attributes).
- A single Container MAY contain multiple Models.
- A Model MAY define the relationships between itself and other Models (if such relationships exist).
