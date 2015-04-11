employeePromiseApi.get(55)    <!----存在しない社員
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
})
.catch(function (err) {
    console.log("エラー： " + err.message);
});

console.log("社員をクエリーしています...");
console.log();