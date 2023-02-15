var selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
        }
        else{
            updateRecord(formData);
        }
        resetForm();
}

//Retorna os Dados
function readFormData() {
    var formData = {};
    formData["codProduto"] = document.getElementById("codProduto").value;
    formData["nomeProduto"] = document.getElementById("nomeProduto").value;
    formData["quant"] = document.getElementById("quant").value;
    formData["precoProduto"] = document.getElementById("precoProduto").value;
    return formData;
}

//Recebe os Dados
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.codProduto; 
    cell2 = newRow.insertCell(1);  
        cell2.innerHTML = data.nomeProduto;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.quant;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.precoProduto;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Editar Dados
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("codProduto").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nomeProduto").value = selectedRow.cells[1].innerHTML;
    document.getElementById("quant").value = selectedRow.cells[2].innerHTML;
    document.getElementById("precoProduto").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.codProduto;
    selectedRow.cells[1].innerHTML = formData.nomeProduto;
    selectedRow.cells[2].innerHTML = formData.quant;
    selectedRow.cells[3].innerHTML = formData.precoProduto;
}

//Deletar Dados
function onDelete(td) {
    if (confirm('Tem certeza que quer apagar?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Resetar Dados
function resetForm() {
    document.getElementById('codProduto').value = '';
    document.getElementById('nomeProduto').value = '';
    document.getElementById('quant').value = '';
    document.getElementById('precoProduto').value = '';
    selectedRow = null;
}