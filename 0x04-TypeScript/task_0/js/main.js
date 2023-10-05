var student1 = {
    firstName: "Cyrus",
    lastName: "Chege",
    age: 20,
    location: "Nairobi"
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
    location: "Kisumu"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var tableBody = document.createElement("tbody");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    var locationCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});
table.appendChild(tableBody);
document.body.appendChild(table);
