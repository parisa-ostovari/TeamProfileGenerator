const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('Does this Class Work', ()=>{
    const emp = new Intern('UC Merced');

    expect(emp.school).toBe('UC Merced');
    expect(emp.getSchool()).toBe('UC Merced');
    expect(emp.getRole()).toBe('Intern');
});