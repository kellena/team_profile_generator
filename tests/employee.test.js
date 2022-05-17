const Employee = require('../lib/Employee');


describe('Employee', () =>{

    it('Has name, id, and email attributes.', () => {

        const dean = new Employee('Dean', 20, 'dean_o@gmail.com');

        expect(dean.name).toBe('Dean');
        expect(dean.id).toBe(20);
        expect(dean.email).toBe('dean_o@gmail.com');

    });

    it('Has name, email, id, and role attributes.', () => {

        const hank = new Employee('Hank', 19, 'theBAT@gmail.com');

        expect(hank.getName()).toBe('Hank');
        expect(hank.getId()).toBe(19);
        expect(hank.getEmail()).toBe('theBAT@gmail.com');
        expect(hank.getRole()).toBe('Employee');

    });

});