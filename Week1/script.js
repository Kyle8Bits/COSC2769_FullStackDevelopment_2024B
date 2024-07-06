document.addEventListener('DOMContentLoaded', () => {
    // Select all 'td' elements with the class 'busy'
    const busyCells = document.querySelectorAll('.calendar td.busy');

    // Add a click event listener to each 'busy' cell using forEach and arrow function
    busyCells.forEach(cell => {
        cell.addEventListener('click', () => {
            // Display an alert with the content of the 'busy' cell
            alert("Details: " + cell.textContent.trim());
        });
    });
});