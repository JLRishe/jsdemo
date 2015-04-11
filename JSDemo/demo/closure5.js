// letをつかいます
for (var i = 0; i < 5; i++) {
    let j = i;
    setTimeout(function () {
        console.log(j);
    }, (j + 1) * 1000);
}


/* 
 *  Chrome, FireFoxでは、letをループの
 *  外側で使えば十分だけど、
 *  IE11では正しい結果がでません。　　　　　　　
 */
/*
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, (i + 1) * 1000);
}
*/