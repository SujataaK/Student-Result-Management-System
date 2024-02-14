// script.js

// Function to add a new result to the table
function addResult() {
    // Get input values from the form
    var name = document.getElementById("name").value;
    var nepali = parseInt(document.getElementById("nepali").value);
    var english = parseInt(document.getElementById("english").value);
    var math = parseInt(document.getElementById("math").value);
    var science = parseInt(document.getElementById("science").value);
    var computer = parseInt(document.getElementById("computer").value);

    // Validate input values
    if (isNaN(nepali) || isNaN(english) || isNaN(math) || isNaN(science) || isNaN(computer)) {
        // Display an alert if any input is not a valid number
        alert("Please enter valid marks for all subjects.");
        return;
    }

    // Calculate total and percentage
    var total = nepali + english + math + science + computer;
    var percentage = (total / 500) * 100;

    // Determine pass or fail based on the percentage
    var result = percentage >= 40 ? "Pass" : "Fail";

    // Create a new row in the table
    var table = document.getElementById("resultTable");
    var row = table.insertRow(1);

    // Insert cells with values into the new row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    // Populate the cells with the input values and results
    cell1.innerHTML = name;
    cell2.innerHTML = nepali;
    cell3.innerHTML = english;
    cell4.innerHTML = math;
    cell5.innerHTML = science;
    cell6.innerHTML = computer;
    cell7.innerHTML = percentage.toFixed(2) + "%";
    cell8.innerHTML = result;

    // Clear input fields after adding a result
    document.getElementById("name").value = "";
    document.getElementById("nepali").value = "";
    document.getElementById("english").value = "";
    document.getElementById("math").value = "";
    document.getElementById("science").value = "";
    document.getElementById("computer").value = "";
}
