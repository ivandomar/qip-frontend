import './index.css';
import Swal from 'sweetalert2'

// Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'error',
//     confirmButtonText: 'Cool'
//   })

export default () => {
    const header = document.createElement('div');

    header.innerHTML = `
    <h1 id="logo">qip</h1>
    <button id="add-button">
        <span class="material-icons-outlined">add</span>
    </button>
    `;

    return header;
};
