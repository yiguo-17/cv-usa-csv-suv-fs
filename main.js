const fs = require('fs');
const getRows = require('./get-rows');
const getTotal = require('./get-total-cases-by-day.js');
const getNew = require('./get-new-cases-by-day.js');
const totalCasesChange = require('./totalCasesChange.js');
const newCasesChange = require('./newCasesChange.js')
const dataRaw = fs.readFileSync('./owid-covid-usa-data.csv',{encoding:'utf-8'});
const data = getRows(dataRaw);
const command = process.argv[2];
const date = process.argv[3];
const dateLatter = process.argv[4];
if(command === 'total'){
    //get the total case in the given day.
    console.log(getTotal(date,data));
} else if(command === 'new'){
    //get the newly found case in the given day.
    console.log(getNew(date,data));
} else if(command ==='track'){
    //get the total cases difference in the given days.
    console.log(totalCasesChange(data,date,dateLatter))
} else if(command ==='rate'){
    //get the newly found cases difference in the given days.
    console.log(newCasesChange(data,date,dateLatter))
} else if (command !== 'rate') {
    console.log('Please try one of our options:');
    console.log('total [date] -> total cases in the given day');
    console.log('new [date] -> new cases in the given day');
    console.log('date format : YYYY-MM-DD.')
}