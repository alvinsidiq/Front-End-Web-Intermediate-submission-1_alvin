import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';
import Socmed from '../icon/icon';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class FooterApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  
  render() {
    return html`
      <footer class="home-footer1">
       
      
        <div class="home-container3">
          <span class="home-text">
            ${msg(`© 2023 myCompany, All Rights Reserved.`)}
          </span>
          <socmed-icon class="home-icon-group1"></socmed-icon>
        </div>
      </footer>
    `;
  }
}
  
customElements.define('footer-tamplate', FooterApp);
