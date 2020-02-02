var arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];
var result = arr.filter(element => Boolean(element));
console.log(result);