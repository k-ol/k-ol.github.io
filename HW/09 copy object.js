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
    for (let el_obj1 in obj1) {
        for (let el_obj2 in obj2){
            if (el_obj1 === el_obj2 && obj1[el_obj1] === obj2[el_obj2]){
                rezObj[obj1[el_obj1]] = el_obj1;
            }
        }
    }
    return rezObj;
}
console.log(comparisonObj(myObj1,myObj2));