// ===-----------------------------------------------------------------------------------===
// Copyright (c) 2021 Calinescu Mihai
//
// For copying notice, see https://github.com/CMihai99/eureka/blob/main/COPYING.
// For licenses we use, see https://github.com/CMihai99/eureka/tree/main/LICENSES.
// ===-----------------------------------------------------------------------------------===

class footer extends HTMLElement {
  // connectedCallback is used to add a footer to the page.
  // It runs each time your custom element is inserted into the DOM.
  connectedCallback() {
    this.innerHTML =
    `
    <footer>
      <div class="section">
        <h3>Eureka</h3>

        <ul>
          <li>
            <a href="/website/html/invite.html">Add to server</a>
          </li>
          <li>
            <a href="/website/html/commands.html">Commands</a>
          </li>
        </ul>
      </div>

      <div class="section">
        <h3>Resources</h3>

        <ul>
          <li>
            <a href="/website/html/contact.html">Contact</a>
          </li>
          <li>
            <a href="/website/html/partners.html">Partners</a>
          </li>
        </ul>
      </div>

      <div class="section">
        <h3>Legal</h3>

        <ul>
          <li>
            <a href="/website/html/tos.html">Terms of Service</a>
          </li>
          <li>
            <a href="/website/html/privacy.html">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
    `;
  }
}

// Register component
customElements.define("footer-component", footer);
