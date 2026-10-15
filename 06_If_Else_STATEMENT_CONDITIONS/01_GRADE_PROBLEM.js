
// | Score Range | Grade | Performance |
// | 91–100 | A | Excellent |
// | 81–90 | B | Very Good |
// | 71–80 | C | Good |
// | 61–70 | D | Average |
// | 50–60 | E | Needs Improvement |
// | 0–49 | F | Fail |

let score = 65; // Example score

 if (score >= 90 && score <= 100) {
    console.log("Grade: A, Performance: Excellent");
}
else if (score >= 80 && score < 90) {
    console.log("Grade: B, Performance: Very Good");
}
else if (score >= 70 && score < 80) {
    console.log("Grade: C, Performance: Good");
}
else if (score >= 60 && score < 70) {
    console.log("Grade: D, Performance: Average");
}
else if (score >= 50 && score < 60) {
    console.log("Grade: E, Performance: Needs Improvement");
}
else if (score >= 0 && score <= 49) {
    console.log("Grade: F, Performance: Fail");
}
else {
    console.log("Invalid score. Please enter a score between 0 and 100.");
}

