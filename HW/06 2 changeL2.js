// 2) Дано предложение. Найти слова, содержащие буквы в верхнем регистре. 
// В этих словах заменить маленький буквы на большие, а большие на маленькие.
//  'hello MY name is JavaScript and I like your code styLe'
function myLoverUpperCase(word) {
    var tempWord =word.split('');
    var word = '';
    for (var i = 0; i < tempWord.length; i++){
        if (/[A-Z]{1}/.test(tempWord[i])){
            word += tempWord[i].toLowerCase(); 
        } else if (/[a-z]{1}/.test(tempWord[i])){
            word += tempWord[i].toUpperCase();
        } else word += tempWord[i]; //например апостроф
    }
    return word;
}

var str = 'hello MY name is JavaScript and I like your code styLe';
var arrStr = str.split(' ');
for (var index = 0; index < arrStr.length; index++){
    if (/[A-Z]+/.test(arrStr[index])){
        arrStr[index] = myLoverUpperCase(arrStr[index]);
    }  
}
console.log(arrStr.join(' '));