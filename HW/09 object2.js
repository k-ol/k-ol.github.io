//2. Пользователь вводит строку, разбиваем ее на элементы массива. 
//Создаём объект и наполняем его элементами из масива: 
//нечётные- ключи, чётные- значения
let str;
str = prompt('Введите строку','');
//str ='Lorem ipsum              dolor sit amet amet amet consectetur adipisicing elit elit';
if (str) {
    let arr = str.split(' ');
    arr = arr.filter(x => x !='');// удаляю лишние пробелы (можно и не делать)
    let myObj = {};
    let arrLength = arr.length;//нужно привыкать
    for (let i=0;i<arrLength;i+=2){
        myObj[arr[i]] = arr[i+1];
    }
    console.log(myObj);
    //при одинаковых нечетных (ключах) сохранится последнее значение (предыдущие теряются)
} else {
    alert('Тогда пока!');
}


