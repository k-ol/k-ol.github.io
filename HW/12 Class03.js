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
    constructor(animal){
        super();
        this.name = animal;
    }
    animalCreate(arrAnimal){
        arrAnimal.push(this.name);
        this.watchCreate(this.name);
    }
    animalDelete(name, arrAnimal) {
        if (arrAnimal.indexOf(name) != -1) {
            this.watchDelete(arrAnimal.splice(arrAnimal.indexOf(name),1));
        }
    }
}
let hendler, zoo = [];
handler = new Animals('Fox');     
handler.animalCreate(zoo);          
handler = new Animals('Fish');
handler.animalCreate(zoo);
console.log(zoo);
handler.animalDelete('Fox', zoo);
console.log(zoo);
console.log(handler);