// напишите 3 конструктора. В первом конструкторе есть три метода: 
// run, go, say. Во втором два метода: run,go, но с другим функционалом. 
// В третьем конструкторе только статический метод, который создает 
// объекты из конструктора, имя которого указано в параметрах.

function Constr1() {};
Constr1.prototype.run = function(){return 'run'};
Constr1.prototype.go  = function(){return 'go'};
Constr1.prototype.say = function(){return 'say'};

function Constr2() {};
Constr2.prototype.run = function(){return 'run-run'};
Constr2.prototype.go  = function(){return 'go-go'};

function Constr3(){};
Constr3.crObj = function(nameConstr) {
    let obj = Object.create(nameConstr.prototype);// или return new nameConstr();
    nameConstr.prototype.constructor = Constr3;
    return obj;
}

let obj1 = Constr3.crObj(Constr1);
let obj2 = Constr3.crObj(Constr2);
console.log(obj1.run());
console.log(obj2.run());
console.log(obj1);
console.log(obj2);