const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('Does this Class Work', () => {
    const eng = new Engineer('testName', 1, 'test@test.com', 'testGit');

    expect(eng.name).toBe('testName');
    expect(eng.id).toBe(1);
    expect(eng.email).toBe('test@test.com');
    expect(eng.github).toBe('testGit');
    
    expect(eng.getName()).toBe('testName');
    expect(eng.getId()).toBe(1);
    expect(eng.getEmail()).toBe('test@test.com');
    expect(eng.getGitHub()).toBe('testGit');

    expect(eng.getRole()).toBe('Engineer');
});