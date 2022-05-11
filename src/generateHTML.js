function generateTeamCards(teamArray){

    function generateManager (employee){

        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${employee.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-user-tie mr-2"></i>${employee.getRole()}</h3>
            </div>

            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${employee.officeNumber()}</li>
                </ul>
            </div>
        </div>`

    }

    function generateEngineer (employee){

        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${employee.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-user mr-2"></i>${employee.getRole()}</h3>
            </div>

            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: ${employee.getGitHub()}</li>
                </ul>
            </div>
        </div>`

    }

    function generateIntern (employee){
        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${employee.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${employee.getRole()}</h3>
            </div>

            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">School: ${employee.getSchool()}</li>
                </ul>
            </div>
        </div>`

    }

    const employeeArray = [];

    employeeArray.push(teamArray
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );

    employeeArray.push(teamArray
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );

    employeeArray.push(teamArray
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
    
    return employeeArray.join("");
}