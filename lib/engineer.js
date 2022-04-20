const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email);
        this.username = username;
    }

    getUsername() {
        console.log(this.username);
    }

    getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;