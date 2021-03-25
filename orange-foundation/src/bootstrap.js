import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom';

class OrangeFoundation extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define('orange-foundation', OrangeFoundation);