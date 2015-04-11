var obj1 = {
    myVal: "B",
    method: function () {
        console.log(this.myVal);
    }
};

var fun = obj1.method;

obj1.method();
// call, apply
fun.call(obj1);
fun.apply(obj1);
