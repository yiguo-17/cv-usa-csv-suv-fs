const getDate = function(row) {
  return row[3]
}



if (typeof getDate === 'undefined') {
  getDate = undefined;
}


module.exports = getDate;
