import Swal from 'sweetalert2';
import elementService from '../../services/elementService.';
import './index.css';

const handleClick = (elementId) => {
    elementService.get(elementId)
        .then(({ data: { element_type_id, title, content } }) => {
            Swal.fire({
                iconHtml: element_type_id == 1
                    ? '<span class="material-icons-outlined">folder</span>'
                    : '<span class="material-icons-outlined">description</span>',
                title: title,
                text: content,
                buttonsStyling: false,
                confirmButtonText: '<span class="material-icons-outlined">check</span>',
                customClass: { confirmButton: 'view-confirm-button', icon: 'view-dialog-icon', popup: 'view-dialog' },
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            });
        });
};

export default (elementId) => {
    const button = document.createElement('button');
    button.classList = 'card-view-action';
    button.title = 'view note';
    button.innerHTML = '<span class="material-icons-outlined">visibility</span>';
    button.onclick = () => handleClick(elementId);

    return button;
};
