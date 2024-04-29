// Sample employee data with age property
let employees = [
    { id: 1, firstName: "Sam", lastName: "Adam", department: "IT", salary: "$100000.00", age: 45 },
    { id: 2, firstName: "John", lastName: "Jacob", department: "Sales", salary: "$90000.00", age: 35 }
];

// Function to calculate the position based on age
function getPosition(age) {
    return age > 40 ? "Sr. Employee" : "Jr. Employee";
}

// Function to calculate the salary based on age and position


// Function to display employees in the table with formatted names, positions, and salaries
function displayEmployees() {
    const tableBody = document.getElementById("employeeTable");
    tableBody.innerHTML = "";

    employees.forEach(employee => {
        const capitalizedFirstName = capitalizeFirstLetter(employee.firstName);
        const capitalizedLastName = capitalizeFirstLetter(employee.lastName);
        const position = getPosition(employee.age);
        const salary = calculateSalary(employee.age, position);
        
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${capitalizedFirstName}</td>
            <td>${capitalizedLastName}</td>
            <td>${employee.department}</td>
            <td>$${employee.salary}</td>
            <td>${position}</td>
            <td>$${salary}</td>
            <td><input type="checkbox" data-id="${employee.id}"></td>
        `;
        tableBody.appendChild(row);
    });
}

// Add event listener to highlight text on hover
document.getElementById("employeeTable").addEventListener("mouseover", function(event) {
    if (event.target.tagName === "TD") {
        event.target.classList.add("highlight-on-hover");
    }
});

// Remove highlight when mouse leaves the cell
document.getElementById("employeeTable").addEventListener("mouseout", function(event) {
    if (event.target.tagName === "TD") {
        event.target.classList.remove("highlight-on-hover");
    }
});

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Display employees when the page loads
displayEmployees();
