const eventSelect = document.getElementById("event");
const cutSelect = document.getElementById("cut");
const genderSelect = document.getElementById("gender");
const tableBody = document.querySelector("#dataTable tbody");

// Populate dropdowns
function populateDropdown(select, values, label) {
    select.innerHTML = `<option value="">All ${label}</option>`;
    values.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    });
}

// Render table
function renderTable(data) {
    tableBody.innerHTML = "";
    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.event}</td>
            <td>${item.time}</td>
            <td>${item.cut}</td>
            <td>${item.gender}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Filter data
function filterData() {
    const event = eventSelect.value;
    const cut = cutSelect.value;
    const gender = genderSelect.value;

    if (!event && !cut && !gender) {
    tableBody.innerHTML = "";
    return;
    }

    const filtered = tableData.filter(item =>
        (event === "" || item.event === event) &&
        (cut === "" || item.cut === cut) &&
        (gender === "" || item.gender === gender)
    );

    renderTable(filtered);
}

// Init
function init() {
    populateDropdown(
        eventSelect,
        [...new Set(tableData.map(d => d.event))],
        "Events"
    );

    populateDropdown(
        cutSelect,
        [...new Set(tableData.map(d => d.cut))],
        "Cuts"
    );

    populateDropdown(
        genderSelect,
        [...new Set(tableData.map(d => d.gender))],
        "Genders"
    );

    eventSelect.addEventListener("change", filterData);
    cutSelect.addEventListener("change", filterData);
    genderSelect.addEventListener("change", filterData);

    tableBody.innerHTML = "";
}

init();
