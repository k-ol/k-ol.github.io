// напишите 3 конструктора. В первом конструкторе есть три метода: 
// run, go, say. Во втором два метода: run,go, но с другим функционалом. 
// В третьем конструкторе только статический метод, который создает 
// объекты из конструктора, имя которого указано в параметрах.



function Constr2() {};
Constr2.prototype.run = function(){return 'run'};
Constr2.prototype.go  = function(){return 'go'};


function Constr1() {};
Constr1.prototype = Object.create(Constr2.prototype);
Constr1.prototype.constructor = Constr1;
Constr1.prototype.say = function(){return 'say-say'}; 
Constr1.prototype.run = function(){return 'run-run'}; 
Constr1.prototype.go  = function(){return 'go-go'};   

function Constr3(){}; // конструктор 3
Constr3.crObj = function(nameConstr) { 
    let obj = Object.create(nameConstr.prototype);
    nameConstr.prototype.constructor = Constr3; 
    return obj;
}

// проверка работы
let obj1 = Constr3.crObj(Constr1);
let obj2 = Constr3.crObj(Constr2);
console.log(obj1.run());
console.log(obj2.run());
console.log(obj1);
console.log(obj2);