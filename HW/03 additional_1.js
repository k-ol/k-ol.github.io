var arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];
var result = arr.filter(arr => Boolean(arr));
console.log(result);