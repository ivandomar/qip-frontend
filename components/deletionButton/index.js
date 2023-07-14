import Swal from 'sweetalert2';
import './index.css';

const handleClick = (elementId, elementTitle) => {
    Swal.fire({
        icon: 'question',
        title: `Do you really want to remove ${elementTitle}?`,
        showDenyButton: true,
        reverseButtons: true,
        buttonsStyling: false,
        confirmButtonText: 'YES',
        denyButtonText: 'NO',
        customClass: { denyButton: 'deletion-button deletion-deny-button', confirmButton: 'deletion-button deletion-confirm-button' },
    });
};

export default (elementId, elementTitle) => {
    const button = document.createElement('button');
    button.classList = 'card-delete-action';
    button.title = 'delete note';
    button.innerHTML = '<span class="material-icons-outlined">delete</span>';
    button.onclick = () => handleClick(elementId, elementTitle);

    return button;
};
