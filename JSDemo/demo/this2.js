var obj1 = {
    myVal: "B",
    method: function () {
        console.log(this.myVal);
    }
};

// bind
var fun = obj1.method.bind(obj1);

obj1.method();       // B
fun();               // B