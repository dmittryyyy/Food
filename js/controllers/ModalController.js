import { Controller } from 'stimulus';

export default class ModalController extends Controller {
  static targets = ['modal'];

  connect() {
    document.addEventListener('keyup', this.onKeyUp);
  }

  disconnect() {
    document.removeEventListener('keyup', this.onKeyUp);
  }

  open = () => {
    this.modalTarget.classList.add('open');
    document.querySelector('body').style.overflow = 'hidden';
  }

  close = () => {
    this.modalTarget.classList.remove('open');
    document.querySelector('body').style.overflow = 'auto';
  }

  onKeyUp = (e) => {
    if (e.code === 'Escape') {
      this.close();
    }
  }
}
