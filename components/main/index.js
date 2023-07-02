import './index.css';
import headerComponent from '../header';
import contentComponent from '../content';

const headerTemplate = headerComponent();
const contentTemplate = contentComponent();

const template = `
  <div id="left-column">
    ${headerTemplate}
  </div>
  <div id="right-column">
    ${contentTemplate}
  </div>`;

export default () => template;
