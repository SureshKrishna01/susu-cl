import { data } from "./data.js";

const tableBody = document.getElementById("table-body");
const addCollegeForm = document.getElementById("add-college-form");




for (const college of data) {
  const row = document.createElement("tr");

  row.innerHTML = `
   <td>${college.code == undefined ||college.code ==""  ? '':college.code}</td>
    <td>${college.name == undefined ||college.name =="" ? '':college.name}</td>
    <td>${college.address == undefined ||college.address =="" ? '':college.address}</td>
    <td>${college.course == undefined ||college.course =="" ? '':college.course}</td>
    <td>${college.avgCutOff == undefined ||college.avgCutOff =="" ? '':college.avgCutOff}</td>
  `;

  tableBody.appendChild(row);
}

// Add event listeners to the form.
addCollegeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const code = event.target.elements.namedItem("code").value;
  const name = event.target.elements.namedItem("name").value;
  const address = event.target.elements.namedItem("address").value;
  const course = event.target.elements.namedItem("course").value;

  // Add the college to the data array.
  data.push({
    
    code: code,
    name: name,
    address: address,
    course: course
  });

  // Clear the form.
  event.target.reset();

  // Update the table.
  updateTable();
});

// Function to update the table.
function updateTable() {
  tableBody.innerHTML = "";

  for (const college of data) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${college.SN}</td>
      <td>${college.code}</td>
      <td>${college.name}</td>
      <td>${college.address}</td>
      <td>${college.course}</td>
    `;

    tableBody.appendChild(row);
    tableBody.classList.add("responsive");
    // data.push(college);

  }
}