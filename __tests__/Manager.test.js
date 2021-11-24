const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('Does this Class Work', ()=>{
    const emp = new Manager('555-555-555');

    expect(emp.officeNumber).toBe('555-555-555');
    expect(emp.getOfficeNumber()).toBe('555-555-555');
    expect(emp.getRole()).toBe('Manager');
});