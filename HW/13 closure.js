// Задание на замыкание и MV
// 1) напишите функцию, которая принимает 1 параметр.
// при первом вызове, она его запоминает, при втором,- - суммирует переданый параметр с тем, что передали первый раз и тд
// sum(3) = 3
// sum(5) = 8
// sum(228) = 236
let sum = (function () {
    let remember = 0;
    return function (addSum){
        remember += addSum;
        return remember;
    }
})();
console.log(sum(3));
console.log(sum(5));
console.log(sum(228));