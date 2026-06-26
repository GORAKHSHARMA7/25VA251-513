let sub1 = Number(prompt("Enter marks of Subject 1:"));
let sub2 = Number(prompt("Enter marks of Subject 2:"));
let sub3 = Number(prompt("Enter marks of Subject 3:"));
let sub4 = Number(prompt("Enter marks of Subject 4:"));
let sub5 = Number(prompt("Enter marks of Subject 5:"));

let total = sub1 + sub2 + sub3 + sub4 + sub5;
let percentage = total / 5;

let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 40) {
    grade = "D";
} else {
    grade = "Fail";
}

document.write("<h2>Result</h2>");
document.write("Subject 1 Marks: " + sub1 + "<br>");
document.write("Subject 2 Marks: " + sub2 + "<br>");
document.write("Subject 3 Marks: " + sub3 + "<br>");
document.write("Subject 4 Marks: " + sub4 + "<br>");
document.write("Subject 5 Marks: " + sub5 + "<br><br>");

document.write("<b>Total Marks:</b> " + total + "<br>");
document.write("<b>Percentage:</b> " + percentage.toFixed(2) + "%<br>");
document.write("<b>Grade:</b> " + grade);