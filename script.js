// Array to store leave requests
let leaveRequests = [];

// Function to handle leave request submission
document.getElementById("leaveRequestForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get form values
  const empName = document.getElementById("empName").value;
  const leaveType = document.getElementById("leaveType").value;
  const leaveDays = document.getElementById("leaveDays").value;

  // Create a leave request object
  const leaveRequest = {
    empName: empName,
    leaveType: leaveType,
    leaveDays: leaveDays,
    status: "Pending"
  };

  // Add the leave request to the array
  leaveRequests.push(leaveRequest);

  // Clear the form
  document.getElementById("leaveRequestForm").reset();

  // Update the table to show the new leave request
  updateLeaveRequestsTable();
});

// Function to update the leave requests table
function updateLeaveRequestsTable() {
  const tableBody = document.querySelector("#leaveRequestsTable tbody");
  tableBody.innerHTML = ""; // Clear the table body
  
  leaveRequests.forEach((request, index) => {
    const row = document.createElement("tr");
    
    row.innerHTML = `
      <td>${request.empName}</td>
      <td>${request.leaveType}</td>
      <td>${request.leaveDays}</td>
      <td>${request.status}</td>
      <td>
        <button class="approve" onclick="approveRequest(${index})">Approve</button>
        <button class="reject" onclick="rejectRequest(${index})">Reject</button>
      </td>
    `;
    
    tableBody.appendChild(row);
  });
}

// Function to approve a leave request
function approveRequest(index) {
  leaveRequests[index].status = "Approved";
  updateLeaveRequestsTable();
}

// Function to reject a leave request
function rejectRequest(index) {
  leaveRequests[index].status = "Rejected";
  updateLeaveRequestsTable();
}
