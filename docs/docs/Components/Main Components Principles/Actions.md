---
sidebar_position: 4
---

# Actions

Actions represent the Use Cases of the Application (i.e., the actions that can be performed by a user or software in the application).

## Principles

- Every Action should be responsible for performing a single use case in the application.
- An Action may retrieve data from Tasks and pass data to another Task.
- An Action may call multiple Tasks, and can call Tasks from other Containers within the same Section.
- Actions may return data to the Controller.
- Actions should not return a response (the Controller's job is to return a response).
- An Action should not call another Action. Instead, if you need to reuse a big chunk of business logic in multiple Actions, and this chunk is calling some Tasks, you can create a SubAction.
- Actions are mainly used from Controllers. However, they can be used from Event Listeners, Commands, and/or other Classes, but they should not be used from Tasks.
- Every Action should have only a single function named `run()`.
- The Action main function `run()` can accept a Request Object in the parameter.
- Actions are responsible for handling all expected Exceptions.

### Note

Ideally, your Action file should be as clean as possible, with no code of its own. It should simply be an array that outlines a series of Tasks to be carried out in sequence, following the pipeline design pattern. However, if you prefer to add some business logic inside, that's fine, but it should be done carefully.

### Pseudo Code Example

```JS
class MyAction {

    public function run() {
        return [MyTask1, MyTask2, MyTask3]];
    }
}

```
