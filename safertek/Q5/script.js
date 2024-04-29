// Sample employee data
let employees = [
    { id: 1, firstName: "Sam", lastName: "Adam", department: "IT", salary: "100000.00" },
    { id: 2, firstName: "John", lastName: "Jacob", department: "Sales", salary: "90000.00" }
];

// Function to display employees in the table
function displayEmployees() {
    const tableBody = document.getElementById("employeeTable");
    tableBody.innerHTML = "";

    employees.forEach(employee => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.department}</td>
            <td>$${employee.salary}</td>
            <td><input type="checkbox" data-id="${employee.id}"></td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to add a new employee
function addEmployee(employee) {
    employees.push(employee);
    displayEmployees(); // Update the table
}

// Function to edit an existing employee
function editEmployee(employeeId, updatedEmployee) {
    const index = employees.findIndex(employee => employee.id === employeeId);
    if (index !== -1) {
        employees[index] = updatedEmployee;
        displayEmployees(); // Update the table
    }
}

// Add event listener to Add button
document.getElementById("addButton").addEventListener("click", () => {
    const employee = prompt("Enter employee details (Id, FirstName, LastName, Department, Salary) separated by commas:");
    if (employee) {
        const [id, firstName, lastName, department, salary] = employee.split(',').map(item => item.trim());
        const newEmployee = { id: parseInt(id), firstName, lastName, department, salary };
        addEmployee(newEmployee);
    }
});

// Add event listener to Edit button
document.getElementById("editButton").addEventListener("click", () => {
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedBoxes.length !== 1) {
        alert("Please select exactly one employee to edit.");
        return;
    }
    const employeeId = parseInt(checkedBoxes[0].getAttribute("data-id"));
    const employee = prompt("Enter updated employee details (FirstName, LastName, Department, Salary) separated by commas:");
    if (employee) {
        const [firstName, lastName, department, salary] = employee.split(',').map(item => item.trim());
        const updatedEmployee = { id: employeeId, firstName, lastName, department, salary };
        editEmployee(employeeId, updatedEmployee);
    }
});

// Add event listener to Delete button
document.getElementById("deleteButton").addEventListener("click", () => {
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedBoxes.length === 0) {
        alert("Please select at least one employee to delete.");
        return;
    }
    const confirmDelete = confirm("Are you sure you want to delete the selected employee(s)?");
    if (confirmDelete) {
        checkedBoxes.forEach(checkbox => {
            const employeeId = parseInt(checkbox.getAttribute("data-id"));
            // Delete employee with employeeId from the database
            employees = employees.filter(employee => employee.id !== employeeId);
        });
        displayEmployees(); // Update the table
    }
});

// Display employees when the page loads
displayEmployees();
