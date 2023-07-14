import Swal from 'sweetalert2'
import creationForm from '../creationForm';
import './index.css';

export default () => {
    const header = document.createElement('div');
    header.innerHTML = '<h1 id="logo">qip</h1>';

    const creationFormComponent = creationForm();

    const addButton = document.createElement('button');
    addButton.id = 'add-button';
    addButton.innerHTML = '<span class="material-icons-outlined">add</span>';
    addButton.onclick = () => Swal.fire({
        title: 'Create new element',
        html: creationFormComponent,
        showConfirmButton: false,
      });

    header.append(addButton);

    return header;
};
