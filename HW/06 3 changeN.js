// 3) Найти и заменить в тексте: число 1 на one, 2 на two, 3 на three

var text ='1 3 Lorem 1 ipsum dolor 3 sit amet 2, 2.2 consectetur 3adipisicing 1elit1. 33 Distinctio 1. vol1uptate 11optio in labore 22fuga aliquam33 officia 2';
console.log(text);
var words = ['one', 'two', 'three'];
var arrText = text.split(' ');
for (var i = 1 ; i < 4 ; i++) {
    for (var j = 0 ; j < arrText.length ; j++) {
        if (arrText[j] === String(i)) {
            arrText[j] = arrText[j].replace(String(i), words[i-1]);
        } else if (arrText.slice(0,3) === i + ' ' || i + ',' ) {
            arrText[j] = arrText[j].replace(String(i), words[i-1]);            
        } else if (arrText.slice(0,4) === i + '. ') {
            arrText[j] = arrText[j].replace(String(i), words[i-1]);
        }
   }
}
text = arrText.join(' ') 
console.log(text);
