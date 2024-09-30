function calculateGrossSalary() {
    // Get the input values
    var basicSalary = parseFloat(document.getElementById('basicSalary').value) || 0;
    var houseRent = parseFloat(document.getElementById('houseRent').value) || 0;
    var taxDeduction = parseFloat(document.getElementById('taxDeduction').value) || 0;

    // Calculate the gross salary
    var grossSalary = basicSalary + houseRent - taxDeduction;

    // Set the gross salary value in the input field
    document.getElementById('grossSalary').value = grossSalary.toFixed(2);
}
