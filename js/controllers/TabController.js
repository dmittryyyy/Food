import { Controller } from 'stimulus';

export default class TabController extends Controller {
  static targets = ['tabs', 'menu'];

  tabs;
  menuItem = this.element.querySelectorAll('.preview__list-item');

  connect() {
    this.tabs = Array.from(this.tabsTarget.children);
    this.menuItem.forEach((item) => {
      item.addEventListener('click', this.onClick);
    });
  }

  onClick = (e) => {
    this.menuItem.forEach((item) => {
      item.classList.remove('active');
    });
    e.target.classList.add('active');
    this.showTab(e.target);
  };

  showTab = (menu) => {
    this.tabs.forEach((item, i) => {
      item.classList.remove('show');
      if (menu.getAttribute('data-tab-index') == i) {
        item.classList.add('show');
      }
    });
  };
}
