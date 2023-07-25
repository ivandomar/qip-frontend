import Swal from 'sweetalert2'
import elementService from '../../services/elementService';
import ElementTypeConstants from '../../constants/ElementType';
import './index.css';

const handleEditionSubmit = (event, id, title) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    elementService.edit(
        id,
        formData.get('title'),
        formData.get('content') ? formData.get('content') : null,
    ).then(() => {
        Swal.fire({
            icon: 'success',
            toast: true,
            timer: 3000,
            position: 'top',
            title: `${title} succesfully edited`,
            showConfirmButton: false,
            background: '#242424',
            didClose: () => location.reload(),
        });
    })
    .catch((error) => alert(error.message));
};

export default (id, type, title, content) => {
    const form = document.createElement('form');
    form.id = 'edit-form';
    form.onsubmit = (event) => handleEditionSubmit(event, id, title);

    form.innerHTML = `
        <input type="text" name="title" placeholder="Title" value="${title}" required />
        <br />
        <input
            type="text"
            name="content"
            placeholder="Content"
            value="${type === ElementTypeConstants.NOTE ? content : ''}"
            ${type === ElementTypeConstants.NOTE ? 'required' : ''}
            ${type === ElementTypeConstants.FOLDER ? 'disabled' : ''}
        />
        <br />
        <div id="edit-form-actions">
            <button type="submit" id="send-button"><span class="material-icons-outlined">send</span></button>
        </div>
    `;

    return form;
};
