employeeApi.get(3, function (err, employee) {
    if (!err) {
        employee.getEmployeeIds(function (err2, ids) {
            if (!err) {
                console.log(ids);
            } else {
                // エラーを処理する
            }
        });
    } else {
        // エラーを処理する
    }
});

console.log("社員をクエリーしています...");
console.log();