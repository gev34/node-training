const {calculateTip,add} = require('../src/math')

test('Should caclucate total with tip',()=> {
    const total = calculateTip(10,.3)
    expect(total).toBe(13)
})

test('Should caclucate total with default tip',()=> {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})
test('Should add two numbers',(done) => {
    add(1,2).then((sum) => {
        expect(sum).toBe(3)
        done()
    })
})
test('Should add two numbers with async/await',async() => {
   const sum = await add(1,2)
    expect(sum).toBe(3)
    
})