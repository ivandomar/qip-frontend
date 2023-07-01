import './index.css';
import CardComponent from '../card';

const cardTemplate = CardComponent('folder', 1, 'Exemplo 1', 'This is a quite shor note content', '01.07.2023 às 18h45');

export default () => `<section id="main-content">
    ${cardTemplate}
    ${cardTemplate}
    ${cardTemplate}
    ${cardTemplate}
    ${cardTemplate}
</section>`;
