const getRow = require('./get-row.js');


describe('getRow', () => {
  it(`given a row string, splits it on commas to return an array of cells`, () => {
    const str1 = 'cell,cell,cell'
    const row1 = [ 'cell','cell','cell', ]

    const str2 = 'cell,cell,cell,cell,cell,cell'
    const row2 = ['cell', 'cell', 'cell', 'cell', 'cell', 'cell',]


    const str3 = 'cell,cell,cell,cell,cell,cell,cell,cell,cell,cell,cell,cell'
    const row3 = [
      'cell',
      'cell',
      'cell',
      'cell',
      'cell',
      'cell',
      'cell',
      'cell',
      'cell',
      'cell',
      'cell',
      'cell',
    ]

    expect(getRow(str1)).toEqual(row1);
    expect(getRow(str2)).toEqual(row2);
    expect(getRow(str3)).toEqual(row3);
  })
})
