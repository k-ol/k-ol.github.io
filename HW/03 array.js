// Пользователь вводит три предложения которые добавляются в массив
// Этот массив соединяется со вторым массивом
// Вывести общее количество символов в финальном массиве
var result,
    arrSentence = [],
    arr2 = [1,5,true,NaN,'try',null,undefined,[1,2,[3,true],8,'mother, father'],'mother, father'];

arrSentence[arrSentence.length] = prompt('Введите предложение -' + (arrSentence.length + 1),'');
arrSentence[arrSentence.length] = prompt('Введите предложение -' + (arrSentence.length + 1),'');
arrSentence[arrSentence.length] = prompt('Введите предложение -' + (arrSentence.length + 1),'');

arrSentence = arrSentence.concat(arr2); 
arrSentence = arrSentence.flat(Infinity);
result = arrSentence.join('');
console.log(result.length);