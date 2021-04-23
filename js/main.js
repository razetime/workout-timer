const nextSet = () => {
    currSet++;
    sets[currSet].start();
}
window.addEventListener('DOMContentLoaded', (event) => {
    let sets = [];
    let currSet = 0;
    document.getElementById('add').addEventListener('click', (event) => {
        sets.push(new ExerciseSet(1));
        console.log(sets);
    });
    document.getElementById('start').addEventListener('click', (event) => {
        sets[currSet].start();
    });
});