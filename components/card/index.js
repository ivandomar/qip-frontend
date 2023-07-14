import deletionButton from '../deletionButton';
import './index.css';


export default (type, id, title, content, details) => {
    const card = document.createElement('div');
    card.classList = 'card';
    card.innerHTML = `
        <span class="card-icon material-icons-outlined">
        ${
            type === 'folder' ? 'folder' : ''
        }
        ${
            type === 'note' ? 'description' : ''
        }
        </span>
        <div class="card-content">
            <p class="details">${details}</p>
            <p class="title">${title}</p>
            ${
                type === 'note'
                    ? `<p class="subtitle">${content}</p>`
                    :''
            }
        </div>
        <div class="card-actions">
        ${
            type === 'folder'
            ? `<button title="enter folder" onclick="alert(${id})">
                <span class="material-icons-outlined">subdirectory_arrow_right</span>
            </button>`
            : ''
        }
        ${
            type === 'note'
                ? `<button title="view full note content" onclick="alert(${id})">
                <span class="material-icons-outlined">visibility</span>
                </button>`
                : ''
        }
        <button title="edit note" onclick="alert(${id})">
            <span class="material-icons-outlined">edit</span>
        </button>
    </div>`;

    const deletionButtonComponent = deletionButton(id, title);

    card.querySelector('div.card-actions').append(deletionButtonComponent);

    return card;
};
