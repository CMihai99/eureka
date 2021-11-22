// ===-----------------------------------------------------------------------------------===
// Copyright (c) 2021 Calinescu Mihai
//
// For copying notice, see https://github.com/CMihai99/eureka/blob/main/COPYING.
// For licenses we use, see https://github.com/CMihai99/eureka/tree/main/LICENSES.
// ===-----------------------------------------------------------------------------------===

class navbar extends HTMLElement {
  // connectedCallback is used to add a navigation-bar to the page.
  // It runs each time your custom element is inserted into the DOM.
  connectedCallback() {
    this.innerHTML =
    `
    <nav class="navbar">
      <div class="navbar-header">
      <a href="index.html"><img src="/website/resources/icon.svg" class="nav-icon"></a>
      </div>

      <div class="nav navbar-nav">
        <li>
          <div class="nav-item" data-toggle="dropdown">
            <a href="/website/html/commands.html">
              <img src="/website/resources/commands.svg">
              Commands
            </a>
          </div>
        </li>

        <li>
          <div class="nav-item" data-toggle="dropdown">
            <a href="/website/html/docs.html">
              <img src="/website/resources/documentation.svg">
              Documentation
            </a>
          </div>
        </li>

        <li>
          <div class="nav-item" data-toggle="dropdown">
            <a href="/website/html/support.html">
              <img src="/website/resources/discord.svg">
              Community Server
            </a>
          </div>
        </li>
      </div>
    </nav>
    `;
  }
}

// Register component
customElements.define("navbar-component", navbar);
