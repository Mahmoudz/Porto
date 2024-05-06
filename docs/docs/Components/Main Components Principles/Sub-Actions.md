---
sidebar_position: 10
---

# Sub-Actions

Sub-Actions are designed to eliminate code duplication in Actions. They allow Actions to share a sequence of Tasks, while Tasks allow Actions to share a piece of functionality.

## Principles

- Sub-Actions MUST call Tasks. If a Sub-Action is doing all the business logic without the help of at least one Task, it probably shouldn't be a Sub-Action but a Task instead.
- A Sub-Action MAY retrieve data from Tasks and pass data to another Task.
- A Sub-Action MAY call multiple Tasks (they can even call Tasks from other Containers).
- Sub-Actions MAY return data to the Action.
- Sub-Action SHOULD NOT return a response (the Controller's job is to return a response).
- Sub-Action SHOULD NOT call another Sub-Action (try to avoid that as much as possible).
- Sub-Action SHOULD be used from Actions. However, they can be used from Events, Commands, and/or other Classes, but they SHOULD NOT be used from Controllers or Tasks.
- Every Sub-Action SHOULD have only a single function named `run()`.
