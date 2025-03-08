function addData() {
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let mobile = document.getElementById("numberInput").value;
    let address = document.getElementById("addressInput").value;

    if (name === "" || email === "" || mobile === "" || address === "") {
        alert("Please fill in all fields.");
        return;
    }

    let table = document.getElementById("outputTable").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${mobile}</td>
        <td>${address}</td>
        <td>
            <button class="btn btn-warning btn-sm" onclick="editRow(this)">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>
        </td>`;

    
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("numberInput").value = "";
    document.getElementById("addressInput").value = "";

    
    let modal = bootstrap.Modal.getInstance(document.getElementById("addModal"));
    modal.hide();
}

function editRow(button) {
    let row = button.closest("tr");
    let cells = row.getElementsByTagName("td");

    document.getElementById("nameInput").value = cells[0].innerText;
    document.getElementById("emailInput").value = cells[1].innerText;
    document.getElementById("numberInput").value = cells[2].innerText;
    document.getElementById("addressInput").value = cells[3].innerText;

    row.remove();

    
    let modal = new bootstrap.Modal(document.getElementById("addModal"));
    modal.show();
}

function deleteRow(button) {
    button.closest("tr").remove();
}