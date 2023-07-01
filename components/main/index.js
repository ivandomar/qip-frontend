import './index.css';
import headerComponent from '../header';
import contentComponent from '../content';

const headerTemplate = headerComponent();
const contentTemplate = contentComponent();

const template = `
  ${headerTemplate}
  ${contentTemplate}`;

export default () => template;
