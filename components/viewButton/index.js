import Swal from 'sweetalert2';
import elementService from '../../services/elementService.';
import './index.css';

const handleClick = (elementId) => {
    elementService.get(elementId)
        .then(({ data: { element_type_id, title, content } }) => {
            Swal.fire({
                iconHtml: element_type_id == 1
                    ? '<span class="card-icon material-icons-outlined">folder</span>'
                    : '<span class="card-icon material-icons-outlined">description</span>',
                title: title,
                text: content,
                buttonsStyling: false,
                confirmButtonText: '<span class="card-icon material-icons-outlined">check</span>',
                customClass: { confirmButton: 'view-confirm-button' },
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

export default (elementId, elementTitle) => {
    const button = document.createElement('button');
    button.classList = 'card-view-action';
    button.title = 'view note';
    button.innerHTML = '<span class="material-icons-outlined">visibility</span>';
    button.onclick = () => handleClick(elementId, elementTitle);

    return button;
};
