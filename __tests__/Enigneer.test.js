const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('Does this Class Work', ()=>{
    const emp = new Engineer('parisa-ostovari');

    expect(emp.github).toBe('parisa-ostovari');
    expect(emp.getGitHub()).toBe('parisa-ostovari');
    expect(emp.getRole()).toBe('Engineer');
});