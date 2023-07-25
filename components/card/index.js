import deletionButton from '../deletionButton';
import editButton from '../editButton';
import navigateButton from '../navigateButton';
import viewButton from '../viewButton';
import ElementTypeConstants from '../../constants/ElementType';
import './index.css';


export default (type, id, title, content, details) => {
    const card = document.createElement('div');
    card.classList = 'card';
    card.innerHTML = `
        <span class="card-icon material-icons-outlined"></span>
        <div class="card-content">
            <p class="details">${details}</p>
            <p class="title">${title}</p>
        </div>
        <div class="card-actions"></div>`;

    if (type === ElementTypeConstants.FOLDER) {
        card.querySelector('span.card-icon').innerHTML = 'folder';
        
        const navigateButtonComponent = navigateButton(id, title);
        card.querySelector('div.card-actions').append(navigateButtonComponent);
    } else if (type === ElementTypeConstants.NOTE) {
        card.querySelector('span.card-icon').innerHTML = 'description';

        card.querySelector('div.card-content').insertAdjacentHTML('beforeEnd', `<p class="subtitle">${content}</p>`);

        const viewButtonComponent = viewButton(id);
        card.querySelector('div.card-actions').append(viewButtonComponent);
    }

    const editButtonComponent = editButton(id, type, title, content);
    card.querySelector('div.card-actions').append(editButtonComponent);

    const deletionButtonComponent = deletionButton(id, title);
    card.querySelector('div.card-actions').append(deletionButtonComponent);

    return card;
};
