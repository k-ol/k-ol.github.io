class User {
    say () {
        console.log('Hi');
    }
}
class Person extends User {
    say11(){
        this.say();
    }
}

let li = new Person ();
li.say();
li.say11();