import Swal from 'sweetalert2';
import './index.css';
import breadcrumbs from '../breadcrumbs';
import card from '../card';
import elementService from '../../services/elementService';
import ElementTypeConstants from '../../constants/ElementType';

export default async () => {
    const contentSection = document.createElement('section');
    contentSection.id = 'main-content';

    const breadcrumbsComponent = breadcrumbs();
    contentSection.append(breadcrumbsComponent);

    try {
        const { data: { elements } } = await elementService.getByParent(null);

        if (elements.length) {
            elements.sort((a, b) => {
                if (a.element_type_id != b.element_type_id) {
                    return a.element_type_id == ElementTypeConstants.FOLDER ? -1 : 1;
                }

                const titleA = String(a.title);
                const titleB = String(b.title);

                return titleA.localeCompare(titleB);
            }).map((element) => {
                const { id, element_type_id, title, content, updated_at } = element;
    
                const cardComponent = card(
                    element_type_id,
                    id,
                    title,
                    element_type_id === ElementTypeConstants.FOLDER ? null : content,
                    updated_at
                );
    
                contentSection.append(cardComponent);
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
