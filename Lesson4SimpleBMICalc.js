const calculateBMI = (weight, height) => {
    const bmi = weight / (height * height);
    console.log(bmi);
};

// Example usage with direct arguments:
calculateBMI(70, 1.75);  // Output: 22.857142857142858
calculateBMI(50, 1.60);  // Output: 19.53125
