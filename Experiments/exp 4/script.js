function calculateResult() {
    let numSubjects = parseInt(document.getElementById("numSubjects").value);

    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Enter valid number of subjects");
        return;
    }

    let totalMarks = 0;

    for (let i = 1; i <= numSubjects; i++) {

        let mark = parseFloat(prompt(`Enter marks for Subject ${i}`));

        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert("Invalid marks!");
            return;
        }

        totalMarks += mark;
    }

    let average = totalMarks / numSubjects;

    let grade;
    if (average >= 90) grade = "A";
    else if (average >= 75) grade = "B";
    else if (average >= 60) grade = "C";
    else if (average >= 40) grade = "D";
    else grade = "F";

    
    let result = average >= 40 ? "PASS" : "FAIL";

    document.getElementById("resultBox").innerHTML = `
        <h2>Result</h2>
        <p>Total: ${totalMarks}</p>
        <p>Average: ${average.toFixed(2)}</p>
        <p>Grade: ${grade}</p>
        <p>Status: ${result}</p>
    `;
    document.getElementById("resultBox").classList.remove("d-none");
}