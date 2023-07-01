import './index.css';

export default (type, id, title, content, details) => {
  return `<div class="card">
    <p class="details">${details}</p>
    <p class="title">${title}</p>
    <p class="subtitle">${content}</p>
    <div class="card-actions">
      ${
        type === 'folder' ?
          `<button title="enter folder">
            <span class="material-icons-outlined">subdirectory_arrow_right</span>
          </button>`
          : ''
      }
      ${
        type === 'note' ?
          `<button title="view full note content">
            <span class="material-icons-outlined">visibility</span>
          </button>`
          : ''
      }
      <button title="edit note">
        <span class="material-icons-outlined">edit</span>
      </button>
      <button title="delete note" class="card-delete-action">
        <span class="material-icons-outlined">delete</span>
      </button>
    </div>
  </div>`;
};
