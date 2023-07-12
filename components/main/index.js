import './index.css';
import headerComponent from '../header';
import contentComponent from '../content';

export default async () => {
  const headerTemplate = headerComponent();
  const contentTemplate = await contentComponent();

  const main = document.createElement('div');
  const leftContainer = document.createElement('div');
  leftContainer.id = 'left-column';

  leftContainer.append(headerTemplate);

  const rightContainer = document.createElement('div');
  rightContainer.id = 'right-column';
  rightContainer.append(contentTemplate);

  main.append(leftContainer);
  main.append(rightContainer);

  return main;
};
