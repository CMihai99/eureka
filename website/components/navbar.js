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
        <a href="index.html" title="Home">
          <img src="/website/resources/icon.svg" class="nav-icon">
        </a>
      </div>

      <div class="nav navbar-nav">
        <li>
          <div class="nav-item">
            <a href="/website/html/commands.html" title="Commands">
              <img src="/website/resources/commands.svg">
              Commands
            </a>
          </div>
        </li>

        <li>
          <div class="nav-item">
            <a href="/website/html/resources/docs.html" title="Documentation">
              <img src="/website/resources/documentation.svg">
              Documentation
            </a>
          </div>
        </li>

        <li>
          <div class="nav-item">
            <a href="/website/html/support.html" title="Community Server" target="_blank">
              <img src="/website/resources/discord.svg">
              Community Server
            </a>
          </div>
        </li>
      </div>

      <div class="rightside-navbar">
        <div class="nav navbar-nav">
          <li>
            <div class="nav-item">
              <a href="https://github.com/CMihai99/eureka" title="Github" target="_blank">
                <img src="/website/resources/github.svg">
              </a>
            </div>
          </li>
        </div>
      </div>
    </nav>
    `;
  }
}

// Register component
customElements.define("navbar-component", navbar);
