export class Timer {
  constructor(name, set, duration, delay) {
    this.name = name;
    this.set = set;
    this.duration = duration;
    this.delay = delay;
    this.id = this.name + (new Date()).UTC();
    this.draw();
  }
  draw() {

  }
}