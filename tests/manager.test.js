const Manager = require("../lib/Manager");

describe('Manager', () =>{

    it('Should have name, id, email, and office number attributes after instantiation.', () => {

        const dean = new Manager('Dean', 20, 'dean_o@gmail.com', 42);

        expect(dean.name).toBe('Dean');
        expect(dean.id).toBe(20);
        expect(dean.email).toBe('dean@gmail.com');
        expect(dean.OfficeNumber).toBe(42)

    });

    it('should get the name, email, id, and role using methods', () => {

        const hank = new Manager('Hank', 19, 'theBAT@gmail.com', 69);

        expect(hank.getName()).toBe('Hank');
        expect(hank.getId()).toBe(19);
        expect(hank.getEmail()).toBe('theBAT@gmail.com');
        expect(hank.officeNumber()).toBe(69)
        expect(hank.getRole()).toBe('Manager');

    });

});