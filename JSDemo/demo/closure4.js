var arr = [0, 1, 2, 3, 4];

arr.forEach(function (i) {
    setTimeout(function () {
        console.log(i);
    }, (i + 1) * 1000);
});
