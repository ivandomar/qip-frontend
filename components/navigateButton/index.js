import locationService from "../../services/locationService";

const handleClick = (elementId, elementTitle) => {
    locationService.navigate(elementId, elementTitle);

    location.reload();
};

export default (elementId, elementTitle) => {
    const button = document.createElement('button');
    button.title = 'enter folder';
    button.innerHTML = '<span class="material-icons-outlined">subdirectory_arrow_right</span>';
    button.onclick = () => handleClick(elementId, elementTitle);

    return button;
};
