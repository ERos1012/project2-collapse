import { LitElement } from "lit";

class CollapseCard extends LitElement {
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

  render() {
    return html`
      <div class="list-item">
        <div class="list-item-header">
          <h2>${this.badgeHeader}</h2>
        </div>
        <div class="list-item-body">
          <h3>${this.badgeName}</h3>
          <p>${this.badgeDescription}</p>
          <p>${this.badgeCreator}</p>
          <p>${this.timeToComplete}</p>
          <p>${this.stepsName}</p>
          <p>${this.stepsDescription}</p>
          <p>${this.stepsTime}</p>
        </div>
      </div>
    `;
  }
  
}

customElements.define("collapse-card", CollapseCard);
