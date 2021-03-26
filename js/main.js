window.addEventListener('DOMContentLoaded', (event) => {
    let sets = [];
    let currSet = 0;
    document.getElementById('add').addEventListener('click', (event) => {
        sets.push(new ExerciseSet(1));
    });
});