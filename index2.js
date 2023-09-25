function getNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  // Calculate tax (payee) based on salary
  let taxRate, nhifRate, nssfRate;

  if (grossSalary <= 24000) {
    taxRate = 0.1;
    nhifRate = 0.0275;
    nssfRate = 0.06;   
  } else if (grossSalary <= 32333) {
    taxRate = 0.25;
    nhifRate = 0.0275
    nssfRate = 0.06;
  } else if (grossSalary > 32333) {
    taxRate = 0.3;
    nhifRate = 0.0275;
    nssfRate = 0.06;
  }

  
  const tax = grossSalary * taxRate;

  
  const nhifDeductions = grossSalary * nhifRate;

  
  const nssfDeductions = grossSalary * nssfRate;

  
  const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
// Use toFixed() when you want to round a number to a specific number of decimal places.
  return {
    grossSalary: grossSalary.toFixed(2),
    tax: tax.toFixed(2),
    nhifDeductions: nhifDeductions.toFixed(2),
    nssfDeductions: nssfDeductions.toFixed(2),
    netSalary: netSalary.toFixed(2),
  };
}


const basicSalary = parseFloat(prompt("Enter the basic salary:"));
const benefits = parseFloat(prompt("Enter the benefits:"));

if (!isNaN(basicSalary) && !isNaN(benefits)) {
  const salaryDetails = getNetSalary(basicSalary, benefits);
  console.log("Gross Salary: $" + salaryDetails.grossSalary);
  console.log("Tax (Payee): $" + salaryDetails.tax);
  console.log("NHIF Deductions: $" + salaryDetails.nhifDeductions);
  console.log("NSSF Deductions: $" + salaryDetails.nssfDeductions);
  console.log("Net Salary: $" + salaryDetails.netSalary);
} else {
  console.log('Invalid input. Please enter valid numbers for basic salary and benefits.');
}
