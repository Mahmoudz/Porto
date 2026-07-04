---
sidebar_position: 3
---

# Pluggable UIs (Web, API & CLI)

**Porto** treats the interface as a detail, not the center of your application. A web request, an API call, a CLI command, and a scheduled job are just different doors into the same business logic, so adding one never means rewriting the others.

In **Porto**, `Actions` are the central organizing principle, not the Controller. A Web Route, an API Route, a CLI Command, and an Event Subscriber can all trigger the same Action, each through its own thin Controller or Handler, without duplicating a single line of business logic. See the [Components Overview](/docs/Components/Components%20Overview) for the full request-to-action flow, including how Controllers, Data Transformers, and Handlers feed into Actions and Tasks.

This means you can build your application's business logic first and attach interfaces as you need them. Ship an API today, add a CLI tool for internal ops next month, and bolt on a web dashboard later, all without touching the Actions and Tasks you already wrote and tested.

It also means the UIs stay separated from each other. A change to your API layer (versioning, a new response shape, rate limiting) has zero blast radius on your Web or CLI layer, because they never depended on each other in the first place, only on the same Actions underneath.

With **Porto**, your business logic is not tied to how it's accessed. Build it once, expose it however your users and your infrastructure need it.
