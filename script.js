document.addEventListener("DOMContentLoaded", function () {
    fetch("YOUR_DEPLOYED_SCRIPT_URL")
    .then(response => response.json())
    .then(data => {
        let table = document.getElementById("responseTable");
        table.innerHTML = ""; // Clear previous data

        data.forEach(row => {
            let newRow = table.insertRow();
            newRow.insertCell(0).textContent = row.timestamp;
            newRow.insertCell(1).textContent = row.name;
            newRow.insertCell(2).textContent = row.email;
            newRow.insertCell(3).textContent = row.message;
        });
    })
    .catch(error => console.error("Error fetching data:", error));
});
