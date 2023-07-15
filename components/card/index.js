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
        <span class="card-icon material-icons-outlined">
        ${
            type === ElementTypeConstants.FOLDER ? 'folder' : ''
        }
        ${
            type === ElementTypeConstants.NOTE ? 'description' : ''
        }
        </span>
        <div class="card-content">
            <p class="details">${details}</p>
            <p class="title">${title}</p>
            ${
                type === ElementTypeConstants.NOTE
                    ? `<p class="subtitle">${content}</p>`
                    :''
            }
        </div>
        <div class="card-actions">
            <template class="card-action-placeholder"></template>
        </div>`;

    if (type === ElementTypeConstants.NOTE) {
        const viewButtonComponent = viewButton(id);
        card.querySelector("template.card-action-placeholder").replaceWith(viewButtonComponent);
    } else if (type === ElementTypeConstants.FOLDER) {
        const navigateButtonComponent = navigateButton(id, title);
        card.querySelector("template.card-action-placeholder").replaceWith(navigateButtonComponent);
    }

    const editButtonComponent = editButton(id, type, title, content);
    card.querySelector('div.card-actions').append(editButtonComponent);

    const deletionButtonComponent = deletionButton(id, title);
    card.querySelector('div.card-actions').append(deletionButtonComponent);

    return card;
};
