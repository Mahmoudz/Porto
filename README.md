# Porto (Software Architectural Pattern)

<div align="center">
    <img src="/docs/static/img/porto-logo.png" width="80%"/>
</div>

## Welcome to Porto

**Porto** is a modern software architectural pattern that provides a comprehensive set of guidelines, principles, and patterns to organize code for high maintainability and reusability. Its primary aim is to facilitate the development of scalable software, enabling developers to start with a clean monolith and easily transition to microservices. Furthermore, Porto's strict adherence to the single responsibility principle enhances its compatibility with AI tools like GitHub Copilot, which thrive on clear, well-defined classes.

> "Simplicity is the ultimate sophistication." - Leonardo da Vinci

<br>
<br>
<br>

<p align="center">
	<a href="https://mahmoudz.github.io/Porto/docs/Intro/">
	   <img src="/assets/documentation-button.png" width="300px" alt="Porto SAP Documentation"/>
	</a>
</p>

<br>
<br>

---

### Clear Layers

App code is divided into **Containers** and **Ship** layers. Containers encapsulate the business logic, while Ship handles all infrastructure-related code, enabling easy scaling on demand by transitioning from monolithic to microservices.

<br>

<div align="center">
    <img src="/docs/static/img/diagrams/porto_layers.svg" />
</div>

---

### Clean Components

Business logic in **Containers** is organized into **Actions** and **Tasks**. Actions initiate sequences of Tasks, each with one public function `run()` for a single responsibility, thereby enhancing maintainability and enabling code reusability.

<br>

<div align="center">
    <img src="/docs/static/img/diagrams/porto_container_interactions.svg" />
</div>

---

## Author

<table>
    <tbody>
            <tr>
                <td style="text-align: center; vertical-align: top">
                <img alt="author image" width="125" height="125" src="https://github.com/mahmoudz.png?s=150">
                <br/>
                <strong>Mahmoud Zalt</strong>
                <br/>
                GitHub: <a href="https://github.com/Mahmoudz">Mahmoudz</a>
                <br/>
                Twitter: <a href="https://github.com/Mahmoudz">@mahmoudz</a>
                <br/>
                LinkedIn: <a href="https://www.linkedin.com/in/mahmoudzalt/">mahmoudzalt</a>
                <br/>
                Portfolio: <a href="https://zalt.me">zalt.me</a>
                <br/>
                </td>
            </tr>
        </tbody>
</table>

## Donations

I appreciate your support. [Github Sponsor](https://github.com/sponsors/Mahmoudz).

<p>
    <img src="/docs/static/img/porto_ship_1.png" width="100%">
</p>
