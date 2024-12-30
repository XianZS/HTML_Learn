function addRow() {
    let myTable = document.getElementById('myTable');
    console.log(myTable);
    // 获取插入位置
    let length = myTable.rows.length;
    let newRow = myTable.insertRow(length);
    console.log("newRow : ", newRow);
    let addName = newRow.insertCell(0);
    let addIdNumber = newRow.insertCell(1);
    let addAge = newRow.insertCell(2);
    console.log("addName : ", addName, "addIdNumber : ", addIdNumber, "addAge : ", addAge);
    let addThings = getAddRow();
    addName.innerHTML = addThings[0];
    addIdNumber.innerHTML = addThings[1];
    addAge.innerHTML = addThings[2];
}

function getAddRow() {
    let newName = document.getElementById('newName');
    let newIdNumber = document.getElementById("newIdNumber");
    let newAge = document.getElementById('newAge');
    console.log("newName : ", newName, "newIdNumber : ", newIdNumber, "newAge : ", newAge);
    let x = [newName.value, newIdNumber.value, newAge.value]
    newName.value = null;
    newIdNumber.value = null;
    newAge.value = null;
    return x;
}