// 1) Дан массив из элементов разных типов данных. Вывести в консоль тип данных элементов - значение(null выводит null);
var arr = ['man', 2, 0, Infinity ,'', undefined, NaN, null, true,[]];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] === null ? null : typeof arr[i]); 
}

