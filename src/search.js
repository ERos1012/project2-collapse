import { LitElement, html, css } from "lit";
import "./sample-data.json";

export class Search extends LitElement {
  static get tag() {
    return "search-component";
  }

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
    const address = new URL('../api/searchAPI', import.meta.url).href;
    fetch(address).then((response) => {
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
        ${this.characters.map(
          (character) => html`
            <div class="item">
                <!-- put card visuals here -->
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define(Search.tag, Search);