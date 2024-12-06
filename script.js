// Handle the leave form submission
document.getElementById("leaveForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("employeeName").value.trim();
    const leaveType = document.getElementById("leaveType").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const reason = document.getElementById("reason").value.trim();

    // Validate inputs
    if (!name || !leaveType || !startDate || !endDate || !reason) {
        alert("Please fill out all fields.");
        return;
    }

    // Create a new row in the table
    const tableBody = document.getElementById("leaveTableBody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${leaveType}</td>
        <td>${startDate}</td>
        <td>${endDate}</td>
        <td>${reason}</td>
    `;

    tableBody.appendChild(row);

    // Clear form fields
    document.getElementById("leaveForm").reset();

    // Show success message
    alert("Leave application submitted successfully!");
});
