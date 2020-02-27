//Создайте конструктор Student, в котором два приватных свойства и публичный метод, 
//который выводит эти свойства. Любой созданный объект должен иметь доступ 
//к этому методу через прототип. Создайте два объекта из конструктора, 
//которые имеют уникальный метод (для каждого объекта 1 уникальный метод)

function Student() {
    var x = 45;
    var y = 'Yes';
    this.x1 = x;
    this.y1 = y;
}
Student.prototype.getXY = function(){
    console.log('Prop11 =' + this.x1 +' Prop22 = '+ this.y1);
}   
var stud1 = new Student();
var stud2 = new Student();
stud1.unicOne = function() {
    console.log('Метод 1');
}
stud2.unicTwo = function() {
    console.log('Метод 2');
}
stud1.getXY();
stud2.getXY();
stud1.unicOne();   
stud2.unicTwo();  
console.log(stud1);
console.log(stud2);