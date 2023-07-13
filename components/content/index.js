import Swal from 'sweetalert2';
import './index.css';
import CardComponent from '../card';
import elementService from '../../services/elementService.';

export default async () => {
    const contentSection = document.createElement('section');
    contentSection.id = 'main-content';

    try {
        const { data: { elements } } = await elementService.getByParent(null);

        if (elements.length) {
            elements.map((element) => {
                const { id, element_type_id, title, content, created_at } = element;
    
                const cardTemplate = CardComponent(
                    element_type_id === 1 ? 'folder' : 'note',
                    id,
                    title,
                    element_type_id === 1 ? null : content,
                    created_at
                );
    
                contentSection.append(cardTemplate);
            });
        } else {
            const placeholder = document.createElement('p');
            placeholder.id = 'placeholder';
            placeholder.innerText = 'This folder is empty =\'(';

            contentSection.append(placeholder);
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
        });
    }

    return contentSection;
};
