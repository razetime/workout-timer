export class Timer {
    constructor(name, set, duration, delay) {
        this.name = name;
        this.set = set; // parent set object
        this.duration = duration;
        this.delay = delay;
        this.id = "timer-" + this.name + (new Date()).UTC();
        this.pauseDuration = duration;
        this.draw();
    }
    draw() {
        this.body = document.createElement("div");
        this.body.id = this.id;
        this.timer = document.createElement("p");
        this.timer.innerText = this.duration;
        this.body.appendChild(this.timer);
        this.set.body.appendChild(this.body);
    }
    start() {
        let dur = this.pauseDuration.split(":");
        let totalTime = dur[0] * 60 + dur[1];
        this.intervalID = setInterval(function() {
            let mins = totalTime / 60;
            let secs = totalTime % 60;
            this.timer.innerText = `${mins}:${secs}`;
            if (--totalTime <= 0) {
                clearInterval(this.intervalID);
                this.timer.innerText = "0:0";
                this.set.triggerNext();
            }
        }, 1000);
    }
    stop() {
        clearInterval(this.intervalID);
        this.pauseDuration = this.timer.innerText;
    }
    reset() {
        clearInterval(this.intervalID);
        this.timer.innerText = this.duration;
    }
}