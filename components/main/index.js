import './index.css';
import headerComponent from '../header';
import contentComponent from '../content';

const headerTemplate = headerComponent();
const contentTemplate = contentComponent();

const template = `
  <header>
    ${headerTemplate}
  </header>
  <div id="right-column">
    ${contentTemplate}
  </div>`;

export default () => template;
