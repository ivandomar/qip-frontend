import './index.css';
import Swal from 'sweetalert2'

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })

export default () => `
    <h1 id="logo">qip</h1>
    <button id="add-button">
        <span class="material-icons-outlined">add</span>
    </button>
`;
