---
sidebar_position: 5
---

# Tasks

Tasks are classes that hold shared business logic between multiple Actions across different Containers.

## Principles

- Every Task SHOULD have a single responsibility (job).
- A Task MAY receive and return Data. (Task SHOULD NOT return a response, the Controller's job is to return a response).
- A Task SHOULD NOT call another Task. Because that will take us back to the Services Architecture, which can lead to a big mess.
- A Task SHOULD NOT call an Action. Because your code wouldn't make any logical sense then!
- Tasks SHOULD only be called from Actions. (They could be called from Actions of other Containers as well!).
- A Task SHOULD NOT be called from the Controller. Because this leads to non-documented features in your code.


### Pseudo Code Example

```JS
class MyTask {

    public function run() {
        // your business logic 
    }
}

```

## Implementation Tips

To optimize the handling and transformation of data across Tasks, the use of a pipeline design pattern is highly recommended. In a pipeline design pattern, data smoothly traverses from one Task to another, enabling a structured and efficient flow. This approach ensures that each Task acts as a distinct stage in the processing pipeline, maintaining the single responsibility principle while effectively passing data along without creating dependencies or direct interactions that lead to complexity in the architecture. Implementing Tasks in this manner can significantly enhance modularity and maintainability of your code.

In such cases, an `Action` would call the `Tasks` in sequence, simply needing to define an array of tasks like so:

```js
Action1 = [MyTask1, MyTask2, MyTask3]
```