---
sidebar_position: 9
---

# Exceptions

Exceptions are a form of output that should be expected (like an API exception) and well defined. They are a way to handle errors in a well-defined and expected manner.

## Principles

- There are container Exceptions (live in Containers) and general Exceptions (live in Ship).
- Tasks, Sub-Tasks, Models, and any class in general can throw a very specific Exception.
- The caller MUST handle all expected Exceptions from the called class.
- Actions MUST handle all Exceptions, making sure they don't leak to upper Components and cause unexpected behaviors.
- Exceptions names SHOULD be as specific as possible, and they SHOULD have clear descriptive messages.
