function Human() {};
function Student() {};
function Animal() {};

Human.prototype.go = function () {console.log('I can go')};
Human.prototype.say = function () {console.log('I can say')};

Student.prototype = Object.create(Human.prototype)
Student.prototype.constructor = Student;

Animal.prototype = Object.create(Student.prototype)
Animal.prototype.constructor = Animal;

Student.prototype.eat = function () {console.log(1)};
Animal.prototype.fly = function () {console.log(2)};

let obj = new Animal();
obj.go();
console.log(obj);

obj1 = Object.create(obj);
console.log(obj1);