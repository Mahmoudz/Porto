---
sidebar_position: 7
---

# Containers Dependencies

## Containers Communication

- A **Container** may depend on one or many other Containers.
    - **Within a Section:** Containers can depend on each other directly as long as they are within the same section.
    - **Between Sections:** Use event-driven communication to avoid direct dependencies. This approach aids in future microservices splitting. Consider using message queuing systems like Kafka or RabbitMQ.
- **Actions-Task Communication:** Actions may call tasks from other Containers.
- **Model Interaction:** Models from different Containers may have relationships.
- **Dependency Management:** To enhance maintainability, it's recommended to explicitly define dependencies according to your preference. However, automatic dependency injection can be a viable option.
- **Alternate Communication Methods:** Consider any alternative communication method commonly employed in microservices architecture, such as message brokers, RPC (Remote Procedure Call), or RESTful APIs.


<div style={{display: 'flex', justifyContent: 'space-between'}}>
    <img src="/Porto/img/porto_components_2.png" alt="Porto Components" style={{width: '20%'}} />
    <img src="/Porto/img/porto_components_2.png" alt="Porto Components" style={{width: '20%'}} />
</div>