employeePromiseApi.get(3)    
.then(function (employee) {
    return employee.getEmployeeIds();
})
.then(function (ids) {
    if (ids.length > 0) {
        return employeePromiseApi.get(ids[0]);
    }
})
.then(function (employee) {
    if (employee) {
        console.log(employee.name);
    }
});

console.log("社員をクエリーしています...");
console.log();