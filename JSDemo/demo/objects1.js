var myObj = {
    prop1: "ほげ",
    prop2: 2
};

myObj.prop3 = "ぴよ";
myObj["prop4"] = 3;
myObj["prop     5"] = 4;

var name = "prop6";
myObj[name] = "ふが";

console.log(myObj["prop1"] + " " + myObj.prop6);
