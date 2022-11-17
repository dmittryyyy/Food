import { Application } from 'stimulus';
import polyfills from './polyfills';
import { clickAutoBlur } from './normalizers';

import {
  TabController,
  SliderController,
  CalculateController,
  ModalController,
} from './controllers';

polyfills();
clickAutoBlur();

const application = Application.start();
application.register('tab', TabController);
application.register('slider', SliderController);
application.register('calculate', CalculateController);
application.register('modal', ModalController);

document.addEventListener('turbo:click', () => {
  document.body.classList.add('turbolinks--loading');
});

const addOverlay = (body) => body.classList.add('turbolinks--loading');

document.addEventListener('turbo:before-render', (event) => addOverlay(event.detail.newBody));
window.addEventListener('popstate', () => addOverlay(document.body));

document.addEventListener('turbo:render', () => {
  window.requestAnimationFrame(() => document.body.classList.remove('turbolinks--loading'));
});
