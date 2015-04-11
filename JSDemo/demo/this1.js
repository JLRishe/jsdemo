var obj1 = {
    myVal: "B",
    method: function() {
        console.log(this.myVal);
    }
};
var obj2 = {
    myVal: "C",
    method: obj1.method
};
var fun = obj1.method;

obj1.method();
obj2.method();
fun();