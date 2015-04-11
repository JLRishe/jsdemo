employeeApi.get(3, function (err, employee) {
    if (!err) {
        employee.getEmployeeIds(function (err2, ids) {
            if (!err) {
                if (ids.length > 0) {
                    employeeApi.get(ids[0], function (err3, employee2) {
                        if (!err3) {
                            console.log(employee2.name);
                        } else {
                            // エラーを処理する
                        }
                    });
                }
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