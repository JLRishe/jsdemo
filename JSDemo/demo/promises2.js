employeePromiseApi.get(3)
.then(function (employee) {
    return employee.getEmployeeIds();
})
.then(function (ids) {
    console.log(ids);
});

console.log("社員をクエリーしています...");
console.log();
