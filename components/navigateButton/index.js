import './index.css';

const handleClick = (elementId, elementTitle) => {
    alert(elementId, elementTitle);
};

export default (elementId, elementTitle) => {
    const button = document.createElement('button');
    // button.classList = 'card-view-action';
    button.title = 'enter folder';
    button.innerHTML = '<span class="material-icons-outlined">subdirectory_arrow_right</span>';
    button.onclick = () => handleClick(elementId, elementTitle);

    return button;
};
