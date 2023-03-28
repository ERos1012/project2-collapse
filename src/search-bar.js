import { LitElement, html, css } from "lit";
import "./sample-data.json";

export class SearchBar extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      .wrapper {
        border: 1px solid black;
        padding: 10px;
        display: flex;
      }
      .item {
        display: inline-flex;
      }
      input {
        font-size: 20px;
        font-weight: bold;
        border: none;
        border-bottom: 1px solid black;
        transition: all 0.3s ease-in-out;
      }
      input:focus {
        border-bottom: 2px solid blue;
        outline: 1px solid grey;
        outline-offset: 4px;
      }
      input:hover:not(:focus) {
        border-bottom: 2px solid grey;
      }

      /** accessibility enhancement to not animate the changes possibly
    for users that have motion activated disabilities **/
      @media (prefers-reduced-motion) {
        input {
          transition: none;
        }
      }
    `;
  }

  static get properties() {
    return {
      entries: { type: Array },
      result: { type: String },
    };
  }

  constructor() {
    super();
    this.entries = [];
    this.result = "";
    this.searchData();
  }

  searchData() {
    const address = new URL("../api/searchAPI", import.meta.url).href;
    fetch(address)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then((data) => {
        this.entries = data;
      });
  }

  render() {
    return html`
      <div class="wrapper">
        <input type="text" class="searchbar" placeholder="${this.topic}" />
      </div>
    `;
  }
}

customElements.define("search-bar", SearchBar);
