import { Controller } from '@hotwired/stimulus';

export default class SliderController extends Controller {
  static targets = ['container', 'sliders', 'total', 'current', 'next', 'prev'];

  static values = {
    slideIndex: {
      type: Number,
      default: 1,
    },
    position: 0,
    showSlide: {
      type: Number,
      default: 1,
    },
    scrollSlide: {
      type: Number,
      default: 1,
    },
    widthSlide: Number,
    movePosition: Number,
  };

  connect() {
    this.replaceNumSlider();
    this.widthSlideValue = this.containerTarget.offsetWidth / this.showSlideValue;
    this.movePositionValue = this.scrollSlideValue * this.widthSlideValue;
    this.widthSlide();
  }

  replaceNumSlider = () => {
    if (this.slidersTarget.children.length < 10) {
      this.totalTarget.innerHTML = `0${this.slidersTarget.children.length}`;
      this.currentTarget.innerHTML = `0${this.slideIndexValue}`;
    } else {
      this.totalTarget.innerHTML = this.slidersTarget.children.length;
      this.currentTarget.innerHTML = this.slideIndexValue;
    }
  };

  widthSlide = () => {
    const item = document.querySelectorAll('.offer__slide');
    item.forEach((item) => {
      item.style.minWidth = this.widthSlideValue + 'px';
    });
  };

  next = () => {
    this.positionValue -= this.movePositionValue;
    this.slideIndexValue++;
    if (this.positionValue <= this.widthSlideValue * -this.slidersTarget.children.length) {
      this.positionValue = 0;
      this.slideIndexValue = 1;
    }
    this.changedPosition();
    this.replaceNumSlider(this.slideIndexValue);
  };

  prev = () => {
    this.positionValue += this.movePositionValue;
    this.slideIndexValue--;
    if (this.positionValue > 0) {
      this.positionValue = this.widthSlideValue * -(this.slidersTarget.children.length - 1);
      this.slideIndexValue = this.slidersTarget.children.length;
    }
    this.changedPosition();
    this.replaceNumSlider(this.slideIndexValue);
  };

  changedPosition = () => {
    this.slidersTarget.style.transform = `translateX(${this.positionValue}px)`;
  };
}
