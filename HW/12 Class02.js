// Создайте класс Animals, который умеет создавать животных, 
// добавлять их в массив, удалять из массива по имени животного. 
// Класс WatchAnimals, у которого есть методы watchCreate и watchDelete, 
// которые вызываются при добавлении и удалении животных из массива 
// и запускают методы showCreate и showDelete из класса Show. 
// эти методы выводят в консоль добавленные или удалённый объект 
// соответственно.

class Show {
    showCreate(animal) {
        console.log('Добавленное животное: ' + animal);
    }
    showDelete(animal) {
        console.log('Удаленное животное: ' + animal);
    }
}
class WatchAnimals extends Show {
    watchCreate(animal){
        this.showCreate(animal)
    }
    watchDelete(animal){
        this.showDelete(animal)
    }
}
class Animals extends WatchAnimals {
    constructor(animal, arrAnimal){
        super(animal);
    }
    animalCreate(animal, arrAnimal){
        arrAnimal.push(animal);
        this.watchCreate(animal);
    }
    animalDelete(animal, arrAnimal) {
        if (arrAnimal.indexOf(animal) != -1) {
            this.watchDelete(arrAnimal.splice(arrAnimal.indexOf(animal),1));
        }
    }
}
let zoo = [];
let zoo1 = [];
let handler = new Animals();
handler.animalCreate('Fish', zoo);
handler.animalCreate('Fox', zoo);
handler.animalCreate('Bear', zoo);
handler.animalCreate('Wolf', zoo);
handler.animalDelete('Fish', zoo);
handler.animalDelete('Fish', zoo);
zoo.push('bee')
handler.animalCreate('Car', zoo1);
handler.animalCreate('Fox', zoo1);
handler.animalCreate('Bear', zoo1);
handler.animalCreate('Wolf', zoo);
handler.animalDelete('Fish', zoo1);
console.log(zoo);
console.log(zoo1);
console.log(handler);