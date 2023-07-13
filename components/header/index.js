import './index.css';
import Swal from 'sweetalert2'

export default () => {
    const header = document.createElement('div');
    header.innerHTML = '<h1 id="logo">qip</h1>';

    // const addFormRef = 

    const addForm = document.createElement('form');
    addForm.innerHTML = `
        <input type="radio" name="type" value="1">Folder</input>
        <input type="radio" name="type" value="2">Note</input>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="content" placeholder="Content" />
    `;

    const addButton = document.createElement('button');
    addButton.id = 'add-button';
    addButton.innerHTML = '<span class="material-icons-outlined">add</span>';
    addButton.onclick = () => Swal.fire({
        title: 'Create new element',
        html: addForm
      });

    header.append(addButton);

    return header;
};
