const Employee = require("../lib/employee");

describe("Testing Employee Methods", () => {

    const employee = new Employee("Johnny Quest", "4242", "jQuest@venture.com");

    it("Returns Employee Name", () => {
        const name = employee.getName();
        expect(name).toBe("Johnny Quest");
    });

    it("Returns Employee ID", () => {
        const id = employee.getId();
        expect(id).toBe("4242");
    });

    it("Returns Employee Email", () => {
        const email = employee.getEmail();
        expect(email).toBe("jQuest@venture.com")
    });

    it("Returns Employee Role", () => {
        const role = employee.getRole()
        expect(role).toBe("Employee")
    });

});