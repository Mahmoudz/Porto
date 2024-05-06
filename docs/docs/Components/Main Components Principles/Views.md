---
sidebar_position: 7
---

# Views

Views contain the HTML served by your application. Their main goal is to separate the application logic from the presentation logic. They are the V in MVC.

## Principles

- Views should only be used from the Web Controllers.
- Views should be separated into multiple files and folders based on what they display.
- A single Container may contain multiple View files.
- Views SHOULD NOT contain any business logic or data manipulation. They are only responsible for presentation.
