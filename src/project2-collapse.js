import { LitElement, html, css } from "lit";
const imageURL = new URL(
  "../assets/placeholder badge icon.png",
  import.meta.url
).href;

class Project2Collapse extends LitElement {
  static get tag() {
    return "card-list";
  }

  static properties = {
    badgeHeader: { type: String },
    badgeName: { type: String },
    badgeUrl: { type: String },
    badgeDescription: { type: String },
    badgeImage: { type: String },
    badgeCreator: { type: String },
    timeToComplete: { type: String },
    stepsName: { type: String },
    stepsDescription: { type: String },
    stepsTime: { type: String },
  };

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: left;
      background-color: var(--project2-collapse-background-color);
    }

    main {
      flex-grow: 1;
    }

    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      max-width: 960px;
      margin: 0 auto;
      padding: 0 1rem;
      background: #9cb9ee;
    }

    .list-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      padding: 1rem;
    }
    .list-item-header {
      display: flex;
    }

    h2 {
      font-family: "Roboto", sans-serif;
      font-size: 1.5rem;
      margin: 0 0 0 8px;
    }

    summary {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      padding: 1rem;
      cursor: pointer;
    }

    .details {
      font-size: 20px;
      margin: 16px;
      border: 3px solid #555;
    }
    .details summary {
      font-size: 20px;
      font-weight: bold;
    }

    .badgeImage {
      width: 50px;
      height: 50px;
    }

  `;

  constructor() {
    super();
    this.badgeHeader = "Badge Header";
    this.badgeName = "Badge Name";
    this.badgeUrl = "Badge Url";
    this.badgeDescription = "Badge Description";
    this.badgeImage = imageURL;
    this.badgeCreator = "Badge Creator";
    this.timeToComplete = "0";
    this.stepsName = "Steps Name";
    this.stepsDescription = "Steps Description";
    this.stepsTime = "0";
  }

  render() {
    return html`
      <main>
      <div class="item">
                <collapse-card 
                    badgeHeader=${this.badgeHeader}
                    badgeName=${this.badgeName}
                    badgeUrl=${this.badgeUrl}
                    badgeDescription=${this.badgeDescription}
                    badgeImage=${this.badgeImage}
                    badgeCreator=${this.badgeCreator}
                    timeToComplete=${this.timeToComplete}
                    stepsName=${this.stepsName}
                    stepsDescription=${this.stepsDescription}
                    stepsTime=${this.stepsTime}
                    >   
                </collapse-card>
            </div>
      </main>
    `;
  }
}

customElements.define(Project2Collapse.tag, Project2Collapse);
