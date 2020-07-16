const getNewCases = function(row) {
  return row[5]
}




if (typeof getNewCases === 'undefined') {
  getNewCases = undefined;
}


module.exports = getNewCases;
