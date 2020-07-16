const getNew = require('./get-new-cases-by-day.js');
const newCaseChange = function(data,date1,date2){
    const newCase1 = getNew(date1);
    const newCase2 = getNew(date2);
    return newCase2-newCase1;
}

module.exports = newCaseChange;