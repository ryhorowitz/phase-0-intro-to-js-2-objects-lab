// Write your solution in this file!
const employee = {
  name: 'bob',
  streetAddress: '123 fake st'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
  return {
    ...employee,
    [key]: value
  }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value
  return employee
}
function deleteFromEmployeeByKey(employee, key){
  const newEmp = {
    ...employee
  }
  delete newEmp[key]
  return newEmp
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
  const newEmp = employee
  delete newEmp[key]
  return employee
}