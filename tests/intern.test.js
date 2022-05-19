const Intern = require("../lib/Intern");

describe('Intern', () =>{

    it('Has name, id, email, and school attributes.', () => {

        const dean = new Intern('Dean', 20, 'dean_o@gmail.com', 'Learning Beds');

        expect(dean.name).toBe('Dean');
        expect(dean.id).toBe(20);
        expect(dean.email).toBe('dean_o@gmail.com');
        expect(dean.school).toBe('Learning Beds')

    });

    it('Has the name, email, id, and role.', () => {

        const hank = new Intern('Hank', 19, 'theBat@gmail.com', 'Learning Beds');

        expect(hank.getName()).toBe('Hank');
        expect(hank.getId()).toBe(19);
        expect(hank.getEmail()).toBe('theBat@gmail.com');
        expect(hank.getSchool()).toBe('Learning Beds')
        expect(hank.getRole()).toBe('Intern');

    });

});