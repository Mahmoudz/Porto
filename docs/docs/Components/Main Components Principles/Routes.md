---
sidebar_position: 1
---

# Routes

Routes are responsible for mapping all incoming HTTP requests to their controller's functions. When an HTTP request hits the Application, the Endpoints match with the URL pattern and make the call to the corresponding Controller function.

### Principles

- There are three types of Routes, API Routes, Web Routes, and CLI Routes.
- The API Routes files SHOULD be separated from the Web Routes files, each in its folder.
- The Web Routes folder will contain only the Web Endpoints (accessible by web browsers); And the API Routes folder will contain only the API Endpoints (accessible by any consumer app).
- Every Container SHOULD have its Routes.
- Every Route file SHOULD contain a single Endpoint.
- The Endpoint job is to call a function on the corresponding Controller once a request of any type is made (It SHOULD NOT do anything else).
