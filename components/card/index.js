import deletionButton from '../deletionButton';
import editButton from '../editButton';
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
        ${
            type === ElementTypeConstants.FOLDER
            ? `<button title="enter folder" onclick="alert(${id})">
                <span class="material-icons-outlined">subdirectory_arrow_right</span>
            </button>`
            : ''
        }
        ${
            type === ElementTypeConstants.NOTE
                ? `<button title="view note"></button>`
                : ''
        }
    </div>`;

    if (type === ElementTypeConstants.NOTE) {
        const viewButtonComponent = viewButton(id);
        card.querySelector("div.card-actions button[title='view note']").replaceWith(viewButtonComponent);
    }

    const editButtonComponent = editButton(id, type, title, content);
    card.querySelector('div.card-actions').append(editButtonComponent);

    const deletionButtonComponent = deletionButton(id, title);
    card.querySelector('div.card-actions').append(deletionButtonComponent);

    return card;
};
