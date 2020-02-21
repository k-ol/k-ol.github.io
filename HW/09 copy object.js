//1.Напишите функцию, которая сравнивает два объекта(ключ и значение одинаковые) 
//и копирует их в новый объект, где свойства будут значениями, а значения ключами.
let myObj1 = {
    gender : 'man',
    age : 20,
    color : 'red',
    arr : [3,45],
    myHelp : function(a){ },
    help : function(b){ }
};
let myObj2 = {
    line: 4,
    age : 20,
    gender : 'woman',
    arr : [3,45],
    color : 'red',
    help : function(b){ }
};

function comparisonObj(obj1,obj2){
    let rezObj ={};
    for (let elObj1 in obj1) {
        if (elObj1 in obj2) {  // есть ли ключ в объекте 2 (зря не ходить по объекту)
            for (let elObj2 in obj2) {
                if (elObj1 === elObj2 && obj1[elObj1] === obj2[elObj2]){
                    rezObj[obj1[elObj1]] = elObj1;
                }
            }
        }
    }
    return rezObj;
}
console.log(comparisonObj(myObj1,myObj2));