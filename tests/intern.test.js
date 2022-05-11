const Intern = require("../lib/intern");

describe("Testing Intern Methods", () => {

  const intern = new Intern("Hank Venture", "0303", "theBat@venture.com", "Learning Beds");

    it("Returns Intern Name", () => {
        const name = intern.getName();
        expect(name).toBe("Hank Venture");
    });

    it("Returns Intern ID", () => {
        const id = intern.getId();
        expect(id).toBe("0303");
    });

    it("Returns Intern Email", () => {
        const email = intern.getEmail();
        expect(email).toBe("theBat@venture.com")
    });

    it("Returns Intern School", () => {
        const school = intern.getSchool();
        expect(school).toBe("Learning Beds")
    });

    it("Returns Intern Role", () => {
        const role = intern.getRole()
        expect(role).toBe("Intern")
    });

});