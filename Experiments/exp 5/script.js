let employees = [];

function addEmployee() {
    let name   = document.getElementById("empName").value.trim();
    let id     = parseInt(document.getElementById("empId").value);
    let salary = parseFloat(document.getElementById("empSalary").value);
    let dept   = document.getElementById("empDept").value.trim();
    if (!name || isNaN(id) || isNaN(salary) || !dept) {
        showAddMessage("⚠️ Please fill in all fields correctly.", "error");
        return;
    }
    let exists = employees.find(function(emp) { return emp.id === id; });
    if (exists) {
        showAddMessage("⚠️ Employee ID " + id + " already exists.", "error");
        return;
    }
    let newEmployee = { name: name, id: id, salary: salary, department: dept };
    employees.push(newEmployee);
    showAddMessage("✅ " + name + " added! Total employees: " + employees.length, "success");
    clearInputs();
}

function displayAllEmployees() {
    if (employees.length === 0) {
        showResult('<div class="empty-state">📭 No employees found. Add some employees first!</div>');
        return;
    }
    let html = '<p class="result-title">📋 All Employees (' + employees.length + ' records)</p>';
    html += '<table class="emp-table"><thead><tr><th>ID</th><th>Name</th><th>Department</th><th>Salary (₹)</th></tr></thead><tbody>';
    for (let emp of employees) {
        let salaryClass = emp.salary > 50000 ? "badge-high" : "badge-low";
        html += '<tr><td>' + emp.id + '</td><td>' + emp.name + '</td><td>' + emp.department + '</td>';
        html += '<td class="' + salaryClass + '">₹' + emp.salary.toLocaleString('en-IN') + '</td></tr>';
    }
    html += '</tbody></table>';
    showResult(html);
}

function filterHighSalary() {
    let highEarners = employees.filter(function(emp) {
        return emp.salary > 50000;
    });
    if (highEarners.length === 0) {
        showResult('<div class="empty-state">🔍 No employees with salary > ₹50,000.</div>');
        return;
    }
    let html = '<p class="result-title">💰 Salary > ₹50,000 (' + highEarners.length + ' found)</p>';
    html += '<table class="emp-table"><thead><tr><th>ID</th><th>Name</th><th>Department</th><th>Salary (₹)</th></tr></thead><tbody>';
    for (let emp of highEarners) {
        html += '<tr><td>' + emp.id + '</td><td>' + emp.name + '</td><td>' + emp.department + '</td>';
        html += '<td class="badge-high">₹' + emp.salary.toLocaleString('en-IN') + '</td></tr>';
    }
    html += '</tbody></table>';
    showResult(html);
}

function calculateTotalSalary() {
    if (employees.length === 0) {
        showResult('<div class="empty-state">📭 No employees added yet.</div>');
        return;
    }
    let totalSalary = employees.reduce(function(total, emp) {
        return total + emp.salary;
    }, 0);
    let html = '<p class="result-title">🧮 Total Monthly Salary Payout</p>';
    html += '<div class="stat-card"><div class="stat-label">Total (' + employees.length + ' employees)</div>';
    html += '<div class="stat-value">₹' + totalSalary.toLocaleString('en-IN') + '</div></div>';
    showResult(html);
}

function calculateAverageSalary() {
    if (employees.length === 0) {
        showResult('<div class="empty-state">📭 No employees added yet.</div>');
        return;
    }
    let totalSalary = employees.reduce(function(total, emp) {
        return total + emp.salary;
    }, 0);
    let avg = parseFloat((totalSalary / employees.length).toFixed(2));
    let html = '<p class="result-title">📊 Average Salary</p>';
    html += '<div class="stat-card"><div class="stat-label">Average Monthly Salary</div>';
    html += '<div class="stat-value">₹' + avg.toLocaleString('en-IN') + '</div></div>';
    showResult(html);
}

function countByDepartment() {
    let dept = document.getElementById("deptInput").value.trim();
    if (!dept) { alert("Please enter a department name."); return; }
    let deptEmployees = employees.filter(function(emp) {
        return emp.department.toLowerCase() === dept.toLowerCase();
    });
    let html = '<p class="result-title">🏢 Department: ' + dept + '</p>';
    if (deptEmployees.length === 0) {
        html += '<div class="empty-state">No employees in "' + dept + '" department.</div>';
    } else {
        html += '<div class="stat-card"><div class="stat-label">Employees in ' + dept + '</div>';
        html += '<div class="stat-value">' + deptEmployees.length + '</div></div><br>';
        html += '<table class="emp-table"><thead><tr><th>ID</th><th>Name</th><th>Salary (₹)</th></tr></thead><tbody>';
        for (let emp of deptEmployees) {
            html += '<tr><td>' + emp.id + '</td><td>' + emp.name + '</td>';
            html += '<td>₹' + emp.salary.toLocaleString('en-IN') + '</td></tr>';
        }
        html += '</tbody></table>';
    }
    showResult(html);
}

function showResult(html) {
    let resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = html;
    resultArea.classList.remove("hidden");
    resultArea.scrollIntoView({ behavior: "smooth", block: "start" });
}
function showAddMessage(text, type) {
    let msg = document.getElementById("addMessage");
    msg.textContent = text;
    msg.className = "message " + type;
    msg.classList.remove("hidden");
    setTimeout(function() { msg.classList.add("hidden"); }, 3500);
}
function clearInputs() {
    document.getElementById("empName").value   = "";
    document.getElementById("empId").value     = "";
    document.getElementById("empSalary").value = "";
    document.getElementById("empDept").value   = "";
    document.getElementById("empName").focus();
}
