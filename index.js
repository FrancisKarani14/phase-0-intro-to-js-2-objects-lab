// Write your solution in this file!
const employee = {
  name: "Alice Smith",
  streetAddress: "123 Main St"
};


function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
 
  return { ...employeeObj, [key]: value };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
  
  employeeObj[key] = value;
  return employeeObj; 
}


function deleteFromEmployeeByKey(employeeObj, key) {
  
  const { [key]: _, ...newEmployee } = employeeObj;
  return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
 
  delete employeeObj[key];
  return employeeObj; 
}



module.exports = {
  employee, 
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey
};