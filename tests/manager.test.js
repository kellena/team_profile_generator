const Manager = require("../lib/manager");

describe("Testing Manager Methods", () => {

  const manager = new Manager("Doc Venture", "0101", "docSexy@venture.com", "1337");

    it("Returns Manager Name", () => {
        const name = manager.getName();
        expect(name).toBe("Doc Venture");
    });

    it("Returns Manager ID", () => {
        const id = manager.getId();
        expect(id).toBe("0101");
    });

    it("Returns Manager Email", () => {
        const email = manager.getEmail();
        expect(email).toBe("docSexy@venture.com")
    });

    it("Returns Manager Office Number", () => {
        const officeNumber = manager.officeNumber;
        expect(officeNumber).toBe("1337")
    });

    it("Returns Manager Role", () => {
        const role = manager.getRole()
        expect(role).toBe("Manager")
    });

});