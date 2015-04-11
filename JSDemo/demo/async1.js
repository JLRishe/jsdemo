employeeApi.get(3, function (err, employee) {
    if (!err) {
        console.log(employee.name);
    } else {
        // エラーを処理する
    }
});

console.log("社員をクエリーしています...");
console.log();