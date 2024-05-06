---
sidebar_position: 2
---

# Containers Layer

The Container layer is the heart of the **Porto** architecture. Here is where the application-specific business logic lives, including all the Application features and functionalities. You'll spend 90% of your time working in this layer, developing new features, and maintaining existing ones.

One of the main benefits of using **Porto** is that it manages the complexity of a problem by breaking it down into smaller, more manageable Containers. Each Container is designed to encapsulate a specific piece of functionality, making it easier to develop, test, and maintain.

By organizing your code in this way, **Porto** helps you to create a more modular and reusable codebase. This makes it easier to scale and maintain your application over time, as well as reducing the amount of code duplication across different parts of your application.

Inside each container, you'll find a collection of components, particularly Actions and Tasks, which form the backbone of the Porto architecture.

Overall, the Containers layer is the key to building a maintainable and scalable application architecture with **Porto**.

<img src="/Porto/img/porto_container_3.png" alt="Porto Components" style={{width: '55%'}} />

Upon opening a container, you should quickly locate what you need. Each box in the preceding image represents a code file, clearly labeled for easy identification. Business logic resides in `Tasks`, each containing a single public function. By examining a file's descriptive name, you can infer its contents, enabling swift navigation through your code.

<details>
<summary>Example 1: TODO App</summary>

For example, in a TODO App, the 'Task', 'User', and 'Calendar' objects would each live in a different Container, with its own Routes, Controllers, Models, Exceptions, and more. Each Container is responsible for receiving requests and returning responses from whichever supported UI (Web, API, etc.).

While it's advised to use a Single Model per Container, in some cases, you may need more than one Model, and that's perfectly fine. You could also have Value Objects, which are similar to Models but don't get represented in the DB on their tables but as data on the Models. These objects get built automatically after their data is fetched from the DB, such as Price, Location, Time, and more.

It's important to keep in mind that two Models mean two Repositories, two Transformers, and more. Unless you want to use both Models always together, split them into two Containers.

If you have high dependencies between two Containers, placing them in the same Section would make reusing them easier in other projects.

</details>

<details>
<summary>Example 2: Social Media App</summary>

In a social media application, you might have different Containers for 'Post', 'User', 'Comment', and 'Like'. Each of these Containers would handle its own logic, routes, controllers, models, exceptions, and more.

For instance, the 'Post' Container might handle creating posts, deleting posts, and retrieving post details. The 'Comment' Container could handle adding comments to a post, deleting comments, and retrieving comments for a post.

Just like in the first example, it's perfectly fine to have more than one Model in a Container if needed. However, remember that each Model would require its own Repository, Transformer, etc. If two Models are highly interdependent, consider placing them in the same Container for easier reuse.

</details>


## Containers Structure

To ensure consistency and ease of maintenance, all containers MUST adhere to the same structure. While they may house different component types, the overall structure must remain uniform. This approach facilitates code navigation, allowing maintainers to quickly locate the components they need.

### Basic Containers Structure

```markdown
ContainerA

├── Actions
├── Tasks
├── Models
└── UI
    ├── WEB
    │   ├── Routes
    │   ├── Controllers
    │   └── Views
    ├── API
    │   ├── Routes
    │   ├── Controllers
    │   └── Transformers
    └── CLI
        ├── Routes
        └── Commands

ContainerB

├── Actions
├── Tasks
├── Models
└── UI
    ├── WEB
    │   ├── Routes
    │   ├── Controllers
    │   └── Views
    ├── API
    │   ├── Routes
    │   ├── Controllers
    │   └── Transformers
    └── CLI
        ├── Routes
        └── Commands
```

> If you're not familiar with separating your code into Modules / Domains or if you prefer not to use that approach, you can create your entire Application in a single Container. However, this is not recommended and may not be as scalable or maintainable for larger projects over time.

## Sections

Section are another very important aspect in the Porto architecture.

A **Section** is a group of related containers. It can be a **service** _(micro or bigger)_, or a sub-system within the main system, or anything else.

_Think of a Section as a rows of containers on a cargo ship. Well organized containers in rows, speeds up the loading and unloading of related containers for a specific customer._

The basic definition of a Section is a folder that contains related Containers. However the benefits are huge. (A section is equivalent to a bounded context from the Domain-driven design) Each section represents a portion of your system and is completely isolated from other sections.

A Section can be deployed separately. This architecture allows for a loose coupling between Sections, enabling a more scalable and flexible system. `Events` and `Commands` can be used to communicate between different Sections, allowing for easy expansion and modification of the system over time.

> A **Section** is a block of bays on a cargo ship. A 'bay' refers to a designated storage area on a cargo ship where containers are placed.

<details>
<summary>Example 1: E-commerce App</summary>

In a typical e-commerce application, you might have several sections, each corresponding to a different aspect of the business:

- **Inventory Section**: This section could contain Containers like 'Product', 'Stock', and 'Supplier'. The 'Product' Container might handle listing products and showing product details, while the 'Stock' Container could manage stock levels, and the 'Supplier' Container could manage supplier information and relationships.

- **Shipping Section**: This section might have Containers like 'Delivery', 'Courier', and 'Tracking'. The 'Delivery' Container could handle scheduling deliveries, the 'Courier' Container could manage courier information, and the 'Tracking' Container could provide real-time tracking information for deliveries.

- **Order Section**: This section could include Containers like 'Cart', 'Order', and 'Invoice'. The 'Cart' Container might manage adding and removing items from the cart, the 'Order' Container could handle placing orders and updating order status, and the 'Invoice' Container could generate invoices for completed orders.

- **Payment Section**: This section might have Containers like 'PaymentMethod', 'Transaction', and 'Refund'. The 'PaymentMethod' Container could manage different payment methods, the 'Transaction' Container could handle processing payments, and the 'Refund' Container could manage refund requests.

- **Catalog Section**: This section could contain Containers like 'Category', 'Brand', and 'Review'. The 'Category' Container might manage product categories, the 'Brand' Container could manage brand information, and the 'Review' Container could handle customer reviews for products.

Each of these sections could potentially be a micro-service by itself and could be extracted and deployed on its own server based on the traffic it receives.

</details>

<details>
<summary>Example 2: Racing Game</summary>

If you're building a racing game like Need for Speed, you may have the following two sections: the Race Section and the Lobby Section, where each section contains a Car Container and a Car Model inside it, but with different properties and functions.
In this example the Car Model of the Race section can contain the business logic for accelerating and controlling the car, while the Car Model of the Lobby Section contains the business logic for customizing the car (color, accessories..) before the race.

Sections allows separating large Model into smaller ones. And they can provide boundaries for different Models in your system.

If you prefer simplicity or you have only single team working on the project, you can have no Sections at all (where all Containers live in the containers folder) which means your project is a single section. In this case if the project grew quickly and you decided you need to start using sections, you can make a new project also with a single section, this is known as Micro-Services. In Micro-Services each section "project portion" live in its own project (repository) and they can communicate over the network usually using the HTTP protocol.

</details>
