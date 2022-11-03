import { Controller } from 'stimulus';

export default class TabController extends Controller {
  static targets = ['tabs', 'menu'];

  showTab = (e) => {
    const tabs = Array.from(this.tabsTarget.children);
    const menu = Array.from(this.menuTarget.children);
    menu.forEach((item) => {
      item.classList.remove('active');
    });
    tabs.forEach((item, i) => {
      e.target.parentNode.classList.add('active');
      item.classList.remove('preview__card--show');
      if (e.target.getAttribute('data-tab-index') == i) {
        item.classList.add('preview__card--show');
      }
    });
  };
}
