import ReactDOM from "react-dom/client";

import App from "../../App";

class MultiStepFormElement extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/src/index.css"); // <-- this path must match your actual output

    shadowRoot.appendChild(linkElem);

    // Render the component
    const mountPoint = document.createElement("div");
    shadowRoot.appendChild(mountPoint);
    ReactDOM.createRoot(mountPoint).render(<App />);
  }
}

customElements.define("multi-step-form", MultiStepFormElement);
