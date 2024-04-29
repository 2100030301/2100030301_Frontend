document.addEventListener("DOMContentLoaded", function() {
    var homeLink = document.getElementById("home-link");
    var employeeLink = document.getElementById("employee-link");
    var homeContent = document.getElementById("home");
    var employeeContent = document.getElementById("employee");

    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        showContent(homeContent);
        hideContent(employeeContent);
    });

    employeeLink.addEventListener("click", function(event) {
        event.preventDefault();
        showContent(employeeContent);
        hideContent(homeContent);
    });

    function showContent(element) {
        element.style.display = "block";
    }

    function hideContent(element) {
        element.style.display = "none";
    }
});
