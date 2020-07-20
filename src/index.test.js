const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Scenario', () => {
    
  it('When grade is between 100 and 95.00, then "O - Outstanding" is displayed', () => {
    // Arrange
    var grade = 95.00
    // Act
    var result = gradeClassifier(grade)
    // Assert
    expect(result).toBe("O - Outstanding")
  });
    
    it('When grade is between 94.99 and 90.00, then "V - Very Good" is displayed', () => {
        // Arrange
        var grade = 94.00
        // Act
        var result = gradeClassifier(grade)
        // Assert
        expect(result).toBe("V - Very Good")
      });
    
    it('When grade is between 89.99 and 85.00, then "G - Good" is displayed', () => {
        // Arrange
        var grade = 89.00
        // Act
        var result = gradeClassifier(grade)
        // Assert
        expect(result).toBe("G - Good")
      });
    
    it('When grade is between 84.99 and 80.00, then "S - Satisfactory" is displayed', () => {
        // Arrange
        var grade = 84.00
        // Act
        var result = gradeClassifier(grade)
        // Assert
        expect(result).toBe("S - Satisfactory")
      });
    
    it('When grade is between 79.99 and 75.00, then "N - Needs Improvement" is displayed', () => {
        // Arrange
        var grade = 79.00
        // Act
        var result = gradeClassifier(grade)
        // Assert
        expect(result).toBe("N - Needs Improvement")
      });
    
    it('When grade is between 74.99 and below, then "D - Did not Meet Expectation" is displayed', () => {
        // Arrange
        var grade = 74.00
        // Act
        var result = gradeClassifier(grade)
        // Assert
        expect(result).toBe("D - Did not Meet Expectations")
      });
    
    it('When input is non-numeric or a negative number, then "Invalid Input" is displayed', () => {
        // Arrange
        var grade = "A"
        // Act
        var result = gradeClassifier(grade)
        // Assert
        expect(result).toBe("Invalid Input")
      });
});
