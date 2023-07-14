import './index.css';
import header from '../header';
import content from '../content';

export default async () => {
  const headerComponent = header();
  const contentComponent = await content();

  const main = document.createElement('div');
  const leftContainer = document.createElement('div');
  leftContainer.id = 'left-column';

  leftContainer.append(headerComponent);

  const rightContainer = document.createElement('div');
  rightContainer.id = 'right-column';
  rightContainer.append(contentComponent);

  main.append(leftContainer);
  main.append(rightContainer);

  return main;
};
