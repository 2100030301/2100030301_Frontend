document.addEventListener("DOMContentLoaded", function() {
  // Sample employee data
  var employees = [
      { id: 1, firstName: "John", lastName: "Doe", gender: "Male", age: 30, salary: 50000, department: "IT" },
      { id: 2, firstName: "Jane", lastName: "Smith", gender: "Female", age: 35, salary: 60000, department: "HR" },
      { id: 3, firstName: "Tom", lastName: "Jones", gender: "Male", age: 40, salary: 70000, department: "Finance" },
      // Add more employees as needed
  ];

  var tbody = document.querySelector("#employee-table tbody");

  // Loop through employees array and create table rows
  employees.forEach(function(employee) {
      var row = document.createElement("tr");
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
});
