const getRows = require('./get-rows.js');


describe('getRows', () => {
  it(`given a csv string, splits it on new lines to return an array of row strings`, () => {
    const csv1 = 'cell,cell,cell\ncell,cell,cell'
    const data1 = [
      ['cell', 'cell', 'cell',],
      ['cell', 'cell', 'cell',],
    ]

    const csv2 = 'cell,cell,cell\ncell,cell,cell\ncell,cell,cell\ncell,cell,cell'
    const data2 = [
      ['cell', 'cell', 'cell',],
      ['cell', 'cell', 'cell',],
      ['cell', 'cell', 'cell',],
      ['cell', 'cell', 'cell',],
    ]

    const csv3 = 'cell,cell,cell,cell,cell,cell\ncell,cell,cell,cell,cell,cell\ncell,cell,cell,cell,cell,cell\ncell,cell,cell,cell,cell,cell'
    const data3 = [
      ['cell', 'cell', 'cell', 'cell', 'cell', 'cell',],
      ['cell', 'cell', 'cell', 'cell', 'cell', 'cell',],
      ['cell', 'cell', 'cell', 'cell', 'cell', 'cell',],
      ['cell', 'cell', 'cell', 'cell', 'cell', 'cell',],
    ]

    expect(getRows(csv1)).toEqual(data1);
    expect(getRows(csv2)).toEqual(data2);
    expect(getRows(csv3)).toEqual(data3);
  })
})
