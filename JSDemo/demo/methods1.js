var myObj = {
    square: function(num) {
        return num * num;
    }
};

myObj.triple = function(num) {
    return num * 3;
};

console.log(myObj.square(5));    // 25
console.log(myObj.triple(7));    // 21
