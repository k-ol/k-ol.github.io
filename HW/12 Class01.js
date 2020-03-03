// Создайте класс Animals, который умеет создавать животных, 
// добавлять их в массив, удалять из массива по имени животного. 
// Класс WatchAnimals, у которого есть методы watchCreate и watchDelete, 
// которые вызываются при добавлении и удалении животных из массива 
// и запускают методы showCreate и showDelete из класса Show. 
// эти методы выводят в консоль добавленные или удалённый объект 
// соответственно.

class Show {
    showCreate(animal) {
        console.log('Добавленное животное: ' + animal );
    }
    showDelete(animal) {
        console.log('Удаленное животное: ' + animal );
    }
}
class WatchAnimals extends Show {
    watchCreate(animal){
        this.arrAnimal.push(animal);
        this.showCreate(animal);
    }
    watchDelete(animal) {
        if (this.arrAnimal.indexOf(animal) != -1) {
            this.showDelete(this.arrAnimal.splice(this.arrAnimal.indexOf(animal),1));
        }
    }
}
class Animals extends WatchAnimals {
    constructor(animal, arrAnimal){
        super(animal);
        this.name = animal;
        this.arrAnimal = arrAnimal;
    }
}
let zoo = [];
let animal = new Animals('ChangeZoo',zoo);
animal.watchCreate('Fish');
animal.watchCreate('Fox');
animal.watchCreate('Fox');
animal.watchCreate('Bear');
animal.watchCreate('Wolf');
animal.watchDelete('Fish');
console.log(animal);
console.log(zoo);