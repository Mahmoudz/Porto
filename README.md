# Porto (Software Architectural Pattern)

<div align="center">
    <img src="/docs/static/img/porto-logo.png" width="80%"/>
</div>

## Welcome to Porto

Every codebase starts clean and ends tangled. Features pile up, boundaries blur, and the quick monolith becomes something nobody wants to touch, while the usual escape, breaking it into microservices, tends to scatter the mess rather than fix it.

**Porto** is a scalable software architectural pattern that heads this off by organizing your code into self-contained, reusable units from day one. Business logic lives in **Containers**; infrastructure lives in the **Ship** layer. The structure stays the same whether you run a single monolith or a fleet of microservices, so you scale by moving containers around, not by rewriting. Those same single-responsibility boundaries that keep humans oriented also make the codebase easy for AI tools to navigate and contribute to.

Porto now ships in two editions that share one philosophy. Pick based on **who writes the code**:

- **Porto SAP** is for code that people read, review, and extend by hand, with AI assisting. Built for high-trust, security-critical systems. Read the docs at [porto.zalt.me/docs/Intro](https://porto.zalt.me/docs/Intro).

- **Porto AI** *(private testing)* is for codebases written and maintained primarily by autonomous AI agents: fewer files, fewer tokens, faster autonomous delivery. Read the docs at [porto.zalt.me/ai/Intro](https://porto.zalt.me/ai/Intro).

> "Simplicity is the ultimate sophistication." - Leonardo da Vinci

<br>
<br>
<br>

<p align="center">
	<a href="https://porto.zalt.me">
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

## Support

I appreciate your support. [Github Sponsor](https://github.com/sponsors/Mahmoudz).

<p>
    <img src="/docs/static/img/porto_ship_1.png" width="100%">
</p>
