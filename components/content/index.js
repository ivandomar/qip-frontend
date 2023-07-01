import './index.css';
import CardComponent from '../card';

const cardTemplate = CardComponent();

export default () => `<section id="main-content">${cardTemplate}</section>`;
