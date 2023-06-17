/*
File: homework3.js
GUI Assignment: Creating an interactive dynamic multiplication table Web Page
Christian Kayego, UMass Lowell Computer Science, christian_kayego@student.uml.edu
For this is assignment, we are to create a webpage that generates a multiplication table 
that will ask users to enter numbers  that will be used as multipliers and multiplicands in 
the form of a table using rows for multipliers and columns for multiplicands. Along creating this 
web page, we are to follow specific instructions to deal with possible mistakes entered by the users 
and handle such scenarios.
Copyright (c) 2023 by Christian Kayego. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by Christian Kayego on June 14, 2023 at 7:30 AM
Sources used: https://www.w3schools.com/, https://www.youtube.com/watch?v=UB1O30fR-EE, https://stackoverflow.com/
*/


// Get form and table container elements
const form = document.getElementById('inputForm');
const tableContainer = document.getElementById('tableContainer');
const loadingMessage = document.getElementById('loadingMessage');

// Add event listener to form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const startMultiplier = parseInt(document.getElementById('startMultiplier').value);
    const endMultiplier = parseInt(document.getElementById('endMultiplier').value);
    const startMultiplicand = parseInt(document.getElementById('startMultiplicand').value);
    const endMultiplicand = parseInt(document.getElementById('endMultiplicand').value);

    // Validate input values
    if (isNaN(startMultiplier) || isNaN(endMultiplier) || isNaN(startMultiplicand) || isNaN(endMultiplicand)) {
        showError('Please enter valid numbers for all fields.');
        return;
    }

    // Generate multiplication table
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    headerRow.appendChild(document.createElement('th')); // Empty cell for top-left corner

    // Generate header row
    for (let i = startMultiplier; i <= endMultiplier; i++) {
        const headerCell = document.createElement('th');
        headerCell.textContent = i;
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);

    // Generate table rows
    for (let j = startMultiplicand; j <= endMultiplicand; j++) {
        const row = document.createElement('tr');
        const multiplicandCell = document.createElement('td');
        multiplicandCell.textContent = j;
        row.appendChild(multiplicandCell);

        for (let k = startMultiplier; k <= endMultiplier; k++) {
            const productCell = document.createElement('td');
            productCell.textContent = j * k;
            row.appendChild(productCell);
        }

        table.appendChild(row);
    }

    // Clear previous table, if any
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }

    // Append table to table container
    tableContainer.appendChild(table);
    loadingMessage.style.display = 'none'; // Hide the loading message
});

function showError(errorMessage) {
    const errorDiv = document.createElement('div');
    errorDiv.textContent = errorMessage;
    form.insertAdjacentElement('beforebegin', errorDiv);
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}