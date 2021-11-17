
const { expect } = require('@jest/globals');
const Employee = require('../Employee')

test('Does this Class Work', ()=>{
    const emp = new Employee('parisa', 1, 'test@test.com');

    expect(emp.name).toBe('parisa');
    expect(emp.id).toBe(1);
    expect(emp.email).toBe('test@test.com');
    expect(emp.getName()).toBe('parisa')
    expect(emp.getId()).toBe(1)
    expect(emp.getEmail()).toBe('test@test.com')
    expect(emp.getRole()).toBe('Employee')
});

// const emp = {
//     name: 'parisa', 
//     id: 1,
//     email: 'test@test.com'
// }