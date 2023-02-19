/*eslint-env browser*/

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

var addForm = document.getElementById('addForm');
var employees = document.getElementById('employees');



// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

var count = 0;
var employeeCount = document.getElementById("empCount");


// ADD EMPLOYEE

addForm.addEventListener('submit', (e) => {
    
    // PREVENT FORM SUBMISSION
    
     e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    
     const newrow = employees.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    
    const idCell = newrow.insertCell(0);
    const nameCell = newrow.insertCell(1);
    const extensionCell = newrow.insertCell(2);
    const emailCell = newrow.insertCell(3);
    const departmentCell = newrow.insertCell(4);
    const deleteCell = newrow.insertCell(5);
    

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    
    idCell.appendChild(document.createTextNode(id));
    nameCell.appendChild(document.createTextNode(name));
    extensionCell.appendChild(document.createTextNode(extension));
    emailCell.appendChild(document.createTextNode(email));
    departmentCell.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm delete';
    deleteButton.appendChild(document.createTextNode('X'));
    deleteCell.appendChild(deleteButton);

    // RESET THE FORM
    
    addForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    
    count++;
    employeeCount.textContent = count;

});

// DELETE EMPLOYEE

employees.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Please confirm that you want to delete this employee from the system?')) {
            const newrow  = e.target.parentNode.parentNode;
            employees.deleteRow(newrow .rowIndex);
            count--;
            employeeCount.textContent = count;
        }
    }
});