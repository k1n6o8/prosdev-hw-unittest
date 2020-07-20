const functions = {
  gradeClassifier: (grade) => {
    if(grade <=100 && grade >= 95.00)
        return "O - Outstanding";
    else if (grade < 95.00  && grade >= 90.00)
        return "V - Very Good";
    else if (grade < 90.00  && grade >= 85.00)
        return "G - Good";
    else if (grade < 85.00  && grade >= 80.00)
        return "S - Satisfactory";
    else if (grade < 80.00  && grade >= 75.00)
        return "N - Needs Improvement";
    else if (grade < 75.00 && grade >= 0.00)
        return "D - Did not Meet Expectations";
    else
        return "Invalid Input"
  }
}

module.exports = functions;
