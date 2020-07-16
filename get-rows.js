const getRow = require('./get-row.js');


const getRows = function(csv) {
  const rows = [];
  const rowStrings = csv.split('\n');
  for (const rowString of rowStrings) {
    rows.push(getRow(rowString));
  }

  return rows;
}



if (typeof getRows === 'undefined') {
  getRows = undefined;
}


module.exports = getRows;
