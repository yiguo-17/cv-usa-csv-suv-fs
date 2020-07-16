const getNewCases = require('./get-new-cases.js');


describe('getNewCases', () => {
  it(`returns the total cases from the given row array`, () => {
    const row1 = ['USA','North America','United States','2020-01-09',0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,,,,,,,,0.0,331002647.0,35.608,38.3,15.413,9.732,54225.446,1.2,151.089,10.79,19.1,24.6,,2.77,78.86]
    const row2 = ['USA','North America','United States','2020-03-07',338.0,105.0,14.0,2.0,1.021,0.317,0.042,0.006,4138.0,,0.013,,,,'units unclear (incl. non-PCR)',20.37,331002647.0,35.608,38.3,15.413,9.732,54225.446,1.2,151.089,10.79,19.1,24.6,,2.77,78.86]
    const row3 = ['USA','North America','United States','2020-04-06',337635.0,25398.0,9647.0,1146.0,1020.037,76.731,29.145,3.462,1958186.0,152008.0,5.916,0.459,139064.0,0.42,'units unclear (incl. non-PCR)',72.69,331002647.0,35.608,38.3,15.413,9.732,54225.446,1.2,151.089,10.79,19.1,24.6,,2.77,78.86]

    expect(getNewCases(row1)).toBe(0);
    expect(getNewCases(row2)).toBe(105);
    expect(getNewCases(row3)).toBe(25398);
  })
})
