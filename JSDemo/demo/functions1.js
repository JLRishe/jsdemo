function myFunc(a) {
    console.log("a = " + a);

    console.log("Argument count: " + arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }

    console.log();
}

myFunc(1, 2, 3);
myFunc("い", "ろ", "は");
myFunc();