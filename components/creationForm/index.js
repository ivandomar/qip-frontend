import Swal from 'sweetalert2'
import elementService from '../../services/elementService';
import locationService from '../../services/locationService';
import './index.css';

const handleCreationSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const currentLocation = locationService.getCurrentLocation();

    elementService.create(
        currentLocation ? currentLocation.id : null,
        Number(formData.get('type')),
        formData.get('title'),
        formData.get('content') ? formData.get('content') : null,
    ).then(({ data: { title } }) => {
        Swal.fire({
            icon: 'success',
            toast: true,
            timer: 3000,
            position: 'top',
            title: `${title} succesfully created`,
            showConfirmButton: false,
            background: '#242424',
            didClose: () => location.reload(),
        });
    })
    .catch((error) => alert(error.message));
};

const handleFormChange = (form, target) => {
    if (target.name === 'type') {
        const contentInput = form.querySelector("input[name='content']");

        if (target.value === '1') {
            contentInput.removeAttribute('required', false);
            contentInput.setAttribute('disabled', true);
        } else if (target.value === '2') {
            contentInput.setAttribute('required', true);
            contentInput.removeAttribute('disabled');             
        }
    }
};

export default () => {
    const form = document.createElement('form');
    form.id = 'add-form';
    form.onsubmit = handleCreationSubmit;

    form.onchange = (event) => handleFormChange(form, event.target);

    form.innerHTML = `
        <label>
            <input type="radio" name="type" value="1"  required />
            Folder
        </label>
        <label>
            <input type="radio" name="type" value="2" />
            Note
        </label>
        <br />
        <input type="text" name="title" placeholder="Title" required />
        <br />
        <input type="text" name="content" placeholder="Content" />
        <br />
        <div id="add-form-actions">
            <button type="button" id="cancel-button"><span class="material-icons-outlined">close</span></button>
            <button type="submit" id="send-button"><span class="material-icons-outlined">send</span></button>
        </div>
    `;

    return form;
};
