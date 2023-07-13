import './index.css';
import Swal from 'sweetalert2'

export default () => {
    const header = document.createElement('div');
    header.innerHTML = '<h1 id="logo">qip</h1>';

    // const addFormRef = 

    const addForm = document.createElement('form');
    addForm.id = 'add-form';
    addForm.innerHTML = `
        <label>
            <input type="radio" name="type" value="1" />
            Folder
        </label>
        <label>
            <input type="radio" name="type" value="2" />
            Note
        </label>
        <br />
        <input type="text" name="title" placeholder="Title" />
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
