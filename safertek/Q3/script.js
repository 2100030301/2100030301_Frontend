function navigate(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            if (page === 'employee') {
                populateEmployeeTable();
            }
        })
        .catch(error => console.error('Error:', error));
}

function populateEmployeeTable() {
    const tbody = document.getElementById('employee-body');
    const employees = [
        { id: 1, firstName: 'John', lastName: 'Doe', gender: 'Male', age: 30, salary: 50000, department: 'IT' },
        { id: 2, firstName: 'Jane', lastName: 'Smith', gender: 'Female', age: 35, salary: 60000, department: 'HR' },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'Male', age: 40, salary: 70000, department: 'Finance' }
    ];

    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.gender}</td>
            <td>${employee.age}</td>
            <td>${employee.salary}</td>
            <td>${employee.department}</td>
        `;
        tbody.appendChild(row);
    });
}
