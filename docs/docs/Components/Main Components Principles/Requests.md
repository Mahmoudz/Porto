---
sidebar_position: 2
---

# Requests

Requests mainly serve the user input in the application. They are very useful to automatically apply the Validation and Authorization rules.

## Principles

- A Request MAY hold the Validation/Authorization rules.
- Requests SHOULD only be injected in Controllers. Once injected, they automatically check if the request data matches the validation rules, and if the request input is not valid, an Exception will be thrown.
- Requests MAY also be used for authorization; they can check if the user is authorized to make a request.
