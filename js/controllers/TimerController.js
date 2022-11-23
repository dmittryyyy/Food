import { Controller } from 'stimulus';

export default class TimerController extends Controller {
  static targets = ['days', 'hours', 'minutes', 'seconds'];

  deadline = new Date(2023, 12, 12);
  timerId;

  connect() {
    this.calculate();
    setInterval(this.countTimer, 1000);
  }

  calculate = (num) => {
    return [(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }

  countTimer = () => {
    const diff = this.deadline - new Date();

    if(diff <= 0) {
      clearInterval(this.timerId);
    }

    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    this.daysTarget.textContent = days < 10 ? '0' + days : days;
    this.hoursTarget.textContent = hours < 10 ? '0' + hours : hours;
    this.minutesTarget.textContent = minutes < 10 ? '0' + minutes : minutes;
    this.secondsTarget.textContent = seconds < 10 ? '0' + seconds : seconds;

    this.daysTarget.dataset.title = this.calculate(days, ['день', 'дня', 'дней']);
    this.hoursTarget.dataset.title = this.calculate(hours, ['час', 'часа', 'часов']);
    this.minutesTarget.dataset.title = this.calculate(minutes, ['минута', 'минуты', 'минут']);
    this.secondsTarget.dataset.title = this.calculate(seconds, ['секунда', 'секунды', 'секунд']);
  }
}
