import './index.css';
import Swal from 'sweetalert2'

export default () => {
    const header = document.createElement('div');
    header.innerHTML = '<h1 id="logo">qip</h1>';

    // const addFormRef = 

    const addForm = document.createElement('form');
    addForm.id = 'add-form';
    addForm.onsubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        alert(formData.get('type'));
    }
    addForm.onchange = ({ target }) => {
        if (target.name === 'type') {
            const contentInput = addForm.querySelector("input[name='content']");

            if (target.value === '1') {
                console.log(contentInput, '1');
                contentInput.removeAttribute('required', false);
                contentInput.setAttribute('disabled', true);
            } else if (target.value === '2') {
                console.log(contentInput, '2');
                contentInput.setAttribute('required', true);
                contentInput.removeAttribute('disabled');             
            }
        }
    };
    addForm.innerHTML = `
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
        <button type="submit" id="send-button"><span class="material-icons-outlined">send</span></button>
    `;

    const addButton = document.createElement('button');
    addButton.id = 'add-button';
    addButton.innerHTML = '<span class="material-icons-outlined">add</span>';
    addButton.onclick = () => Swal.fire({
        title: 'Create new element',
        html: addForm,
        showConfirmButton: false,
      });

    header.append(addButton);

    return header;
};
