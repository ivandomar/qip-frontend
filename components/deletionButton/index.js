import Swal from 'sweetalert2';
import elementService from '../../services/elementService.';
import './index.css';

const handleConfirmClick = (elementId, elementTitle) => {
try {
    elementService.delete(elementId);

    Swal.fire({
        icon: 'success',
        toast: true,
        timer: 3000,
        position: 'top',
        title: `${elementTitle} deleted`,
        showConfirmButton: false,
        background: '#242424',
        didClose: () => location.reload(),
    });
} catch (error) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
    });
}
};

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
        preConfirm: () => handleConfirmClick(elementId, elementTitle),
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
