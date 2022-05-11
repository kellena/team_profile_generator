const Engineer = require("../lib/engineer");

describe("Testing Engineer Methods", () => {

    const engineer = new Engineer("Dean Venture", "0202", "dVenture@venture.com", "brother2");

    it("Returns Engineer Name", () => {
        const name = engineer.getName();
        expect(name).toBe("Dean Venture");
    });

    it("Returns Engineer ID", () => {
        const id = engineer.getId();
        expect(id).toBe("0202");
    });

    it("Returns Engineer Email", () => {
        const email = engineer.getEmail();
        expect(email).toBe("dVenture@venture.com")
    });

    it("Returns Engineer GitHub", () => {
        const github = engineer.getGithub();
        expect(github).toBe("brother2")
    });

    it("Returns Engineer Role", () => {
        const role = engineer.getRole()
        expect(role).toBe("Engineer")
    });
    
});