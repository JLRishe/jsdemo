function makeFunc(num) {
    return function() {
        console.log(num);
    };
}

for (var i = 0; i < 5; i++) {
    setTimeout(makeFunc(i), (i + 1) * 1000);
}
