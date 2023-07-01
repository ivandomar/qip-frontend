import './index.css';

export default (selector) => document.querySelector(selector).innerHTML =
  `<section id="landing">
    <h1>qip your notes anywhere!</h1>
    <img alt="qip logo" src="/images/qip-logo.svg" />
  </section>`;
