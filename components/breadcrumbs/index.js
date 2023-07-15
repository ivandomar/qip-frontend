import './index.css';

export default () => {
    const breadcrumbContainer = document.createElement('div');
    breadcrumbContainer.id = 'breadcrumb-container';

    const backButton = document.createElement('button');
    backButton.id = 'back-button';
    backButton.innerHTML = '<span class="material-icons-outlined">arrow_back_ios</span>';
    
    const breadcrumb1 = document.createElement('p');
    breadcrumb1.id = 'root-breadcrumb';
    breadcrumb1.classList = 'breadcrumb-item';
    breadcrumb1.innerHTML = 'root';

    const breadcrumbSeparator1 = document.createElement('p');
    breadcrumbSeparator1.classList = 'breadcrumb-separator';
    breadcrumbSeparator1.innerHTML = '>';
    
    const breadcrumb2 = document.createElement('p');
    breadcrumb2.classList = 'breadcrumb-item';
    breadcrumb2.innerHTML = 'my folder';

    const breadcrumbSeparator2 = document.createElement('p');
    breadcrumbSeparator2.classList = 'breadcrumb-separator';
    breadcrumbSeparator2.innerHTML = '>';
    
    const breadcrumb3 = document.createElement('p');
    breadcrumb3.id = 'current-breadcrumb';
    breadcrumb3.classList = 'breadcrumb-item';
    breadcrumb3.innerHTML = 'another folder';
    
    breadcrumbContainer.append(backButton);
    breadcrumbContainer.append(breadcrumb1);
    breadcrumbContainer.append(breadcrumbSeparator1);
    // breadcrumbContainer.append(breadcrumb2);
    // breadcrumbContainer.append(breadcrumbSeparator2);
    breadcrumbContainer.append(breadcrumb3);

    return breadcrumbContainer;
};
