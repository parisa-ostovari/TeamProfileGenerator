const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('Does this Class Work', ()=>{
    const mana = new Manager ('testName', 1, 'test@test.com', 'testNumber');

    expect(mana.name).toBe('testName');
    expect(mana.id).toBe(1);
    expect(mana.email).toBe('test@test.com');
    expect(mana.officeNumber).toBe('testNumber');
    
    expect(mana.getName()).toBe('testName');
    expect(mana.getId()).toBe(1);
    expect(mana.getEmail()).toBe('test@test.com');
    expect(mana.getOfficeNumber()).toBe('testNumber');

    expect(mana.getRole()).toBe('Manager');
});