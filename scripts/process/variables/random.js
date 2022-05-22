
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function generateRandom(min, max, cant=10) {
    let numbers = {};
    for (let i = 0; i <= cant; i++) {
        let num = randomIntFromInterval(min, max);
        if (numbers.hasOwnProperty(num)) {
            numbers[num].name = num; 
            numbers[num].cant++; 
        } else {
            numbers[num] = {
                name: num,
                cant: 1
            };
        }
    }
    return numbers;
}

console.log(generateRandom(1, 1000, 10));



