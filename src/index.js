// sudo npm i -g eslint
// npx eslint --init
const moment = require('moment');

const birthDate = moment('1989-10-28').format('YYYY-MM-DD'); 
console.log(birthDate);

let today_date = moment();
let years = today_date.diff(birthDate, 'years');

console.log(years);




