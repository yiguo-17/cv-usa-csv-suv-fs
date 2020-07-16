const getRow = function(str) {
  return str.split(',')
}



if (typeof getRow === 'undefined') {
  getRow = undefined;
}


module.exports = getRow;
