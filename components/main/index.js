import './index.css';
import headerComponent from '../header';

const headerTemplate = headerComponent();

const template = `
  ${headerTemplate}
  <section id="landing">
    <h1>qip your notes anywhere!</h1>
    <img alt="qip logo" src="/images/qip-logo.svg" />
  </section>`;

export default () => template;
