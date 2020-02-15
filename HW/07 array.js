// Даны два массива. Сравнить массивы и вывести одинаковые элементы в отдельный массив. 
// Если одинаковый элемент число, которое делится на пять без остатка, 
// добавить в финальный массив FIVE, вместо числа. 
// Если одинаковый элемент строка, в которой больше 5 символов, добавить 
// в финальный массив FSTR вместо элемента. Остальные совпадающие элементы, 
// просто добавить в массив.

function myChange(arr) {
    var newArr = arr.map(function (x) {
        if (typeof x === 'string' && x.length > 5) {
            return 'FSTR';
        } else if (typeof x === 'number' && x % 5 === 0) {
            return 'FIVE';
        } else {
            return x;
        }
    });
    return newArr;
}

function repeatDel(arr) {
    var newArr = [];
    arr.forEach(function (x) {
        if (!newArr.includes(x)) {
            newArr.push(x);
        }
    });
    return newArr;
}

var arrOne = [2, true, NaN, 'jjjjjjjjjj', null, 11, Infinity, '5', 10, 25, 'ggggggggggggggg', undefined, null, 'ggg', 34, '20', false],
    arrTwo = [2, true, 2, NaN, 11, 'ggggggggggggggg', null, 70, Infinity, true, '5', 10, 'jjjjjjjjjj', 25, undefined, 45, 95, null, 11, '55', 'ggg', 34, 2, '20'];
arrTwo = repeatDel(arrTwo);// удалить повторяющиеся элементы в массиве2
arrThree = arrTwo.filter(x => arrOne.includes(x));// пересечение
arrThree = myChange(arrThree); //замена
console.log(arrThree);
