const Engineer = require('../lib/Engineer');

describe('Engineer', () =>{

    it('Has name, id, email, and github attributes.', () => {

        const dean = new Engineer('Dean', 20, 'dean_o@gmail.com', 'dean2001');

        expect(dean.name).toBe('Dean');
        expect(dean.id).toBe(20);
        expect(dean.email).toBe('dean_o@gmail.com');
        expect(dean.github).toBe('dean2001')

    });

    it('Has name, email, id, and role attributes.', () => {

        const hank = new Engineer('Hank', 19, 'theBAT@gmail.com', 'hank2002');

        expect(hank.getName()).toBe('Hank');
        expect(hank.getId()).toBe(19);
        expect(hank.getEmail()).toBe('theBAT@gmail.com');
        expect(hank.getGitHub()).toBe('hank2002')
        expect(hank.getRole()).toBe('Engineer');

    });

});