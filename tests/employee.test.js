const Employee = require('../lib/Employee');


describe('Employee', () =>{

    it('Has name, id, and email attributes.', () => {

        const hank = new Employee('Hank', 19, 'theBAT@gmail.com');

        expect(hank.name).toBe('hank');
        expect(hank.id).toBe(19);
        expect(hank.email).toBe('theBat@gmail.com');

    });

    it('Has name, email, id, and role attributes.', () => {

        const dean = new Employee('Dean', 20, 'prog_rock_rules@gmail.com');

        expect(dean.getName()).toBe('Dean');
        expect(dean.getId()).toBe(20);
        expect(dean.getEmail()).toBe('prog_rock_rules@gmail.com');
        expect(dean.getRole()).toBe('Employee');

    });

});