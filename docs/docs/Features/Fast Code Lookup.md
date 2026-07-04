---
sidebar_position: 5
---

# Fast Code Lookup

**Porto** is designed so that finding a piece of business logic is a lookup, not an investigation. No stepping through call stacks, no guessing which of five similarly named files owns the behavior you're after.

Every feature in **Porto** lives in an `Action`, named after exactly what it does: `RegisterUserAction`, `ValidateUserAddressAction`, `MakeOrderAction`. Looking for where user addresses get validated? Open the Address Container, look in its list of Actions, and there it is. The domain-expert naming and the one-function-per-class rule mean the name of the file already tells you what it does, you rarely need to open it just to find out. See [Components Overview](/docs/Components/Components%20Overview) for how Actions and Tasks are named and organized.

This works because Porto enforces where things go. A Container groups everything related to one business domain, and inside it, Actions represent use cases while Tasks represent the steps within them. Once you know the domain, you know the folder. Once you know the use case, you know the file.

Compare that to codebases where "find the discount logic" means grepping across a dozen loosely related files, or tracing through several layers of indirection to find where a rule actually lives. In **Porto**, the structure itself is the map.

With **Porto**, onboarding a new developer, or an AI agent, isn't about memorizing the codebase. It's about knowing the naming convention, which takes minutes, not weeks.
