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
            elements.sort((a, b) => {
                if (a.element_type_id != b.element_type_id) {
                    return a.element_type_id == 1 ? -1 : 1;
                }

                const titleA = String(a.title);
                const titleB = String(b.title);

                return titleA.localeCompare(titleB);
            }).map((element) => {
                const { id, element_type_id, title, content, created_at } = element;
    
                const cardTemplate = CardComponent(
                    element_type_id,
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
