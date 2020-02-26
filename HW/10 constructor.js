//Создайте конструктор Student, в котором два приватных свойства и публичный метод, 
//который выводит эти свойства. Любой созданный объект должен иметь доступ 
//к этому методу через прототип. Создайте два объекта из конструктора, 
//которые имеют уникальный метод (для каждого объекта 1 уникальный метод)

function Student() {
    let x = 45;
    let y = 'Yes';
    this.getXY = function(a){
         console.log('Параметр = ' + a + ': Prop1 ='+  x +': Prop2 = '+ y );
    }
}
function SayStudent1() {
    this.unicOne = function(){
        console.log('Я уникальный метод 1 экземпляра');
    }
}
SayStudent1.prototype = new Student();

function SayStudent2() {
    this.unicTwo = function(){
        console.log('Я уникальный метод 2 экземпляра');
    }
}
SayStudent2.prototype = new Student();

let stud1 = new SayStudent1();
let stud2 = new SayStudent2();

stud1.getXY(50);
stud2.getXY(10);
stud1.unicOne();   
stud2.unicTwo();  
console.log(stud1);
console.log(stud2);

