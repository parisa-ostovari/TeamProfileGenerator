const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('Does this Class Work', ()=>{
    const int = new Intern ('testName', 1, 'test@test.com', 'testSchool');

    expect(int.name).toBe('testName');
    expect(int.id).toBe(1);
    expect(int.email).toBe('test@test.com');
    expect(int.school).toBe('testSchool');
    
    expect(int.getName()).toBe('testName');
    expect(int.getId()).toBe(1);
    expect(int.getEmail()).toBe('test@test.com');
    expect(int.getSchool()).toBe('testSchool');

    expect(int.getRole()).toBe('Intern');
});