function calculateGrade() {
    const subjectRows = document.querySelectorAll("tbody tr");
    const resultDisplay = document.getElementById("result");
    //const mtcDisplay = document.getElementById("mtc");
    //const tcDisplay = document.getElementById("tc");

    subjectRows.forEach((row, index) => {
        const marksInput = row.querySelector(".subject-marks");
        const myCreditCell = row.querySelector(".my-credit");
        const finalCreditCell = row.querySelector(".final-credit");

        marksInput.addEventListener("input", function () {
            const credit = parseInt(row.cells[1].textContent); // Get credits from the second column
            const marks = parseInt(marksInput.value);

            let myCredit = 1; // Default to the lowest credit

            if (!isNaN(marks)) {
                if (marks >= 90) {
                    myCredit = 10;
                } else if (marks >= 80 && marks <= 89) {
                    myCredit = 9;
                } else if (marks >= 70 && marks <= 79) {
                    myCredit = 8;
                } else if (marks >= 60 && marks <= 69) {
                    myCredit = 7;
                } else if (marks >= 50 && marks <= 59) {
                    myCredit = 6;
                } else if (marks >= 40 && marks <= 49) {
                    myCredit = 5;
                } else if (marks >= 30 && marks <= 39) {
                    myCredit = 4;
                } else if (marks >= 20 && marks <= 29) {
                    myCredit = 3;
                } else if (marks >= 10 && marks <= 19) {
                    myCredit = 2;
                } else if (marks >= 1 && marks <= 9) {
                    myCredit = 1;
                }// Add more conditions as needed

                const finalCredit = credit * myCredit;
                myCreditCell.textContent = myCredit;
                finalCreditCell.textContent = finalCredit;

                // Recalculate totalWeightedGrade and totalCredits
                let totalWeightedGrade = 0;
                let totalCredits = 0;

                subjectRows.forEach((row) => {
                    const finalCreditCell = row.querySelector(".final-credit");
                    const credit = parseInt(row.cells[1].textContent);
                    totalWeightedGrade += parseInt(finalCreditCell.textContent);
                    totalCredits += credit;
                });

                if (totalWeightedGrade > 0) {
                    const finalGrade = (totalWeightedGrade) / totalCredits;
                    resultDisplay.textContent = `Your cgpa is: ${finalGrade.toFixed(2)}`;
                   // mtcDisplay.textContent = `Your overall twg is: ${totalWeightedGrade.toFixed(2)}`;
                   // tcDisplay.textContent = `Your overall tc is: ${totalCredits}`;
                } else {
                    resultDisplay.textContent = "Please enter valid marks.";
                }
            }
        });
    });
}

// Calculate grade when the page loads
calculateGrade();
