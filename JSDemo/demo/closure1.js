function makeFunc() {
    var a = 9;

    return function() {
        console.log(a);
    };
}

var f = makeFunc();

console.log("f()をよびだします。");
f();