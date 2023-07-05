import './index.css';
import CardComponent from '../card';

export default () => {
    const cardTemplate1 = CardComponent('folder', 1, 'Very importante notes', null, '01.07.2023 às 11h12');
    const cardTemplate2 = CardComponent('folder', 2, 'random thoughts', null, '01.07.2023 às 14h36');
    const cardTemplate4 = CardComponent('note', 4, 'ideas', 'invent some awesome stuff to get rich', '03.07.2023 às 9h18');
    const cardTemplate3 = CardComponent('note', 3, 'shopping list', 'bread and breakfast', '29.06.2023 às 17h05');
    const cardTemplate5 = CardComponent('note', 5, 'to do list', 'buy clothes, write blog, workout, cook dinner, wash the dishes, bath, sleep', '01.07.2023 às 10h39');

    const content = document.createElement('section');
    content.id = 'main-content';
    content.append(cardTemplate1);
    content.append(cardTemplate2);
    content.append(cardTemplate3);
    content.append(cardTemplate4);
    content.append(cardTemplate5); 

    return content;
};
