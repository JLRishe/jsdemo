var Promise = Q.Promise;

$(function () {
    "use strict";

    var $result = $("#result"),
        $entry = $("#scriptEntry"),
        $samplesSelect = $("#loadScript");

    function convert(val) {
        if (typeof val === "undefined") {
            return "undefined";
        }
        if (val === null) {
            return null;
        }
        return val.toString();
    }

    var log = function () {
        var value = Array.prototype.slice.call(arguments).map(convert).join(" ") + "\r\n";
        $result.val($result.val() + value);
    };

    var consoleMock = {
        log: log,
        error: log,
        clear: function () {
            $result.val("");
        }
    };

    var logError = function (e) {
        consoleMock.error(e.name + ": " + e.message);
    }

    var setTimeoutMock = function (f, l) {
        return setTimeout(function () {
            try {
                f();
            } catch (e) {
                logError(e);
            }
        }, l);
    };

    $samplesSelect.on("change", function () {
        $.ajax("/demo/" + $(this).val(), { dataType: "text", cache: false }).then(function (d) {
            consoleMock.clear();
            $entry.val(d);
        });
    });

    var samples = [
        { name: "Functions", prefix: "functions", count: 2 },
        { name: "Objects", prefix: "objects", count: 1 },
        { name: "Methods", prefix: "methods", count: 1 },
        { name: "Arrays", prefix: "arrays", count: 1 },
        { name: "setTimeout", prefix: "setTimeout", count: 1 },
        { name: "Scope", prefix: "scope", count: 5 },
        { name: "this", prefix: "this", count: 6 },
        { name: "Closures", prefix: "closure", count: 5 },
        { name: "Async", prefix: "async", count: 3 },
        { name: "Promises", prefix: "promises", count: 4 }
    ];

    function makeSelection(display, value) {
        return $("<option>").attr("value", value).text(display);
    }

    samples.forEach(function (group) {
        if (group.count === 1) {
            $samplesSelect.append(makeSelection(group.name, group.prefix + "1.js"));
        } else {
            for (var i = 1; i <= group.count; i++) {
                $samplesSelect.append(makeSelection(group.name + " " + i, group.prefix + i + ".js"));
            }
        }
    });

    /*Promise.delay = function (l) {
        return new Promise(function (resolve) {
            setTimeout(resolve, l);
        });
    }*/

    var employees = {
        "3": { name: "岡田太郎", directs: [5, 6, 8] },
        "9": { name: "山田はなこ", directs: [3] },
        "5": { name: "服部半蔵", directs: [] },
        "6": { name: "石原俊子", directs: [] },
        "8": { name: "松川大輔", directs: [] }
    };

    var delay = Q.delay.bind(Q);

    var makeEmployee = function (emp) {
        return {
            name: emp.name,
            getEmployeeIds: function () {
                return delay(1000).then(function () {
                    return emp.directs;
                });
            }
        };
    };

    var employeePromises = {
        get: function (id) {
            return delay(1000).then(function () {
                var emp = employees[id];
                if (emp) {
                    return makeEmployee(emp);
                }

                throw new Error("該当する社員が見つかりませんでした。");
            });
        }
    };

    var makeCallbackEmployee = function (emp) {
        return {
            name: emp.name,
            getEmployeeIds: function (cb) {
                emp.getEmployeeIds().then(function(ids) {
                    cb(null, ids);
                }, cb);
            }
        };
    };

    var employeeCallbacks = {
        get: function (id, cb) {
            employeePromises.get(id).then(function (emp) {
                cb(null, makeCallbackEmployee(emp));
            }, cb);
        }
    };

    $("#execute").click(function () {
        consoleMock.clear();
        try {
            var scr = $entry.val(),
                f = new Function("console", "setTimeout", "employeeApi", "employeePromiseApi", "'use strict';" + scr);
            f(consoleMock, setTimeoutMock, employeeCallbacks, employeePromises);
        } catch (e) {
            logError(e);
        }
    });

});
