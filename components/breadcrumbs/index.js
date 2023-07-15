import locationService from '../../services/locationService';
import './index.css';

export default () => {
    const breadcrumbContainer = document.createElement('div');
    breadcrumbContainer.id = 'breadcrumb-container';

    if (locationService.getLastIndex()) {
        const backButton = document.createElement('button');
        backButton.id = 'back-button';
        backButton.innerHTML = '<span class="material-icons-outlined">arrow_back_ios</span>';
        breadcrumbContainer.append(backButton);
    }

    const rootBreadcrumb = document.createElement('p');
    rootBreadcrumb.id = 'root-breadcrumb';
    rootBreadcrumb.classList = 'breadcrumb-item';
    rootBreadcrumb.innerHTML = 'root';
    
    breadcrumbContainer.append(rootBreadcrumb);
    
    const navigationStack = locationService.getStack();

    navigationStack.map((navigationStackItem, index) => {
        const breadcrumbSeparator = document.createElement('p');
        breadcrumbSeparator.classList = 'breadcrumb-separator';
        breadcrumbSeparator.innerHTML = '>';

        const breadcrumb = document.createElement('p');
        breadcrumb.classList = 'breadcrumb-item';
        breadcrumb.innerHTML = navigationStackItem.title;

        if (index === locationService.getLastIndex()) {
            breadcrumb.id = 'current-breadcrumb';
        }
        
        breadcrumbContainer.append(breadcrumbSeparator);
        breadcrumbContainer.append(breadcrumb);
    });

    return breadcrumbContainer;
};
