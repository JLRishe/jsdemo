var arr = ["a", "b", "c"];

//  .lengthで要素の数を求める
console.log(arr.length);     // 3

arr[7] = "ほげ";
arr[8] = { a: "ぴよ", b: "ふが" };

console.log(arr.length);     // 9

// 　色々なメソッドが備えてある
var newArr = arr.slice(2, 6);

console.log(newArr.length);  // 4
console.log(newArr);         // c,,,

