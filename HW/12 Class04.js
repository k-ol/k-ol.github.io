// Создайте класс Animals, который умеет создавать животных, 
// добавлять их в массив, удалять из массива по имени животного. 
// Класс WatchAnimals, у которого есть методы watchCreate и watchDelete, 
// которые вызываются при добавлении и удалении животных из массива 
// и запускают методы showCreate и showDelete из класса Show. 
// эти методы выводят в консоль добавленные или удалённый объект 
// соответственно.
class Show {
    showCreate(animal) {
        console.log('Добавленный объект : ' + JSON.stringify(animal));
    }
    showDelete(animal) {
        console.log('Удаленный объект : ' + JSON.stringify(animal));
    }
}
class WatchAnimals extends Show {
    watchCreate(animal){
        this.showCreate(animal);
    }
    watchDelete(animal){
        this.showDelete(animal);
    }
}
class Animals extends WatchAnimals {
    constructor(animal){
        super();
        this.name = animal;
    }
    animalCreate(arrAnimal){
        arrAnimal.push(this);
        this.watchCreate(this);
    }
    animalDelete(name, arrAnimal) {
        for (let i = 0; i < arrAnimal.length; i++){
            if (arrAnimal[i].name === name) {
                this.watchDelete(arrAnimal[i]);
                arrAnimal.splice(i,1);
            } 
        }
    }
}
let handler, zoo = [];
handler = new Animals('Fox');       // создаю объект - животное Fox
handler.animalCreate(zoo);          // добавляю объект - животное Fox в массив zoo
handler = new Animals('Wolf');      // создаю объект - животное Wolf
handler.animalCreate(zoo);          // добавляю объект - животное в массив zoo
handler.animalDelete('Fox', zoo);   // удаляю объект - животное Fox из массива zoo
console.log(zoo);