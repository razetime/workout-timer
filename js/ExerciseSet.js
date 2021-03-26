class ExerciseSet {
    constructor() {
        this.name = "Insert set name here";
        this.reps = 1;
        this.timers = [];
        this.currTimer = 0;
        this.id = "set-" + Date.now();
        this.draw();
    }
    addTimer() {
        this.timers.push(new Timer("Insert name", this, "1:00", "0:05"));
    }
    draw() {
        this.bodyHTML = `<div class="set" id="${this.id}">
        <div class="container">
            <button class="add-timer-${this.id}">Add Timer</button>
        </div>
        </div>`
        this.body = document.getElementById(this.id);
        document.getElementById("sets").innerHTML += this.body;
        document.getElementById(`add-timer-${this.id}`).addEventListener('click', (event) => {
            this.addTimer();
        })

    }
    triggerNext() {
        if ((this.currTimer + 1) == this.timers.length) {
            nextSet();
        } else {
            this.currTimer++;
        }
    }
}


class Timer {
    constructor(set, duration, delay) {
        this.name = name;
        this.set = set; // parent set object
        this.duration = duration;
        this.delay = delay;
        this.id = "timer-" + Date.now();
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