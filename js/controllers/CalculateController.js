import { Controller } from 'stimulus';

export default class CalculateController extends Controller {
  static targets = ['result', 'gender', 'weight', 'height', 'age', 'activity'];

  selectGender;
  selectActivity;
  weight = this.weightTarget.innerHTML;
  height = this.heightTarget.innerHTML;
  age = this.ageTarget.innerHTML;

  buttonsGender = this.genderTarget.querySelectorAll('.calculating__button');
  buttonsActivity = this.activityTarget.querySelectorAll('.calculating__button');
  inputs = this.element.querySelectorAll('.input-field__input');

  connect() {
    this.resultTarget.innerHTML = '____';
    this.inputs.forEach((input) => {
      input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d.]/g, '');
      })
    });
    this.buttonsGender.forEach((button) => {
      button.addEventListener('click', this.selectedGender);
    });
    this.buttonsActivity.forEach((button) => {
      button.addEventListener('click', this.selectedActivity);
    });
  }

  disconnect() {
    this.inputs.forEach((input) => {
      input.removeEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d.]/g, '');
      })
    });
    this.buttonsGender.forEach((button) => {
      button.removeEventListener('click', this.selectedGender);
    });
    this.buttonsActivity.forEach((button) => {
      button.removeEventListener('click', this.selectedActivity);
    });
  }

  selectedGender = (e) => {
    this.buttonsGender.forEach((item) => {
      item.classList.remove('active');
    });
    e.target.classList.add('active');
    this.selectGender = e.target;
  };

  selectedActivity = (e) => {
    this.buttonsActivity.forEach((item) => {
      item.classList.remove('active');
    });
    e.target.classList.add('active');
    this.selectActivity = e.target;

    this.calculate(this.selectGender, this.selectActivity);
  };

  calculate = (gender, activity) => {
    let genderId = gender.getAttribute('data-gender');
    let activityId = activity.getAttribute('data-activity');
    if (genderId === 'female') {
      this.resultTarget.innerHTML = Math.round((447.6 + (9.2 * this.weight) + (3.1 * this.height) - (4.3 * this.age)) * activityId);
    } else {
      this.resultTarget.innerHTML = Math.round((88.36 + (13.4 * this.weight) + (4.8 * this.height) - (5.7 * this.age)) * activityId);
    }
  };
}
