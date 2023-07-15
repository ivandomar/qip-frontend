import Swal from 'sweetalert2';
import elementService from '../../services/elementService';
import editionForm from '../editionForm';
import './index.css';

const handleClick = (elementId, elementType, elementTitle, elementContent) => {
    const editionFormComponent = editionForm(elementId, elementType, elementTitle, elementContent);

    Swal.fire({
        title: 'Edit element',
        html: editionFormComponent,
        showConfirmButton: false,
    });
};

export default (elementId, elementType, elementTitle, elementContent) => {
    const button = document.createElement('button');
    button.classList = 'card-edit-action';
    button.title = 'edit note';
    button.innerHTML = '<span class="material-icons-outlined">edit</span>';
    button.onclick = () => handleClick(elementId, elementType, elementTitle, elementContent);

    return button;
};
