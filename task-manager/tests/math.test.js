const {calculateTip} = require('../src/math')

test('Should caclucate total with tip',()=> {
    const total = calculateTip(10,.3)
    expect(total).toBe(13)
})

test('Should caclucate total with default tip',()=> {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})