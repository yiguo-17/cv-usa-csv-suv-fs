const getTotal = require('./get-total-cases-by-day.js');
const totalCaseChange = function(data,date1,date2){
    const total1 = getTotal(date1) ;
    const total2 = getTotal(date2);
    return total2 -total1;
}

module.exports = totalCaseChange;
