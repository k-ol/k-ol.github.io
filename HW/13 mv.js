// Задание на MV
// 2) Создайте 2 класса: Первый принимает "пароль", проверяет его и если пароль верный, 
// дергает метод showCorrect второго класса, которые выводит в консоль "Пароль верный",
// если пароль не верный, дергает метод второго класса showIncorrect и выводит "Пароль неверный". 
// Методы второго класса лучше сделать статическими. Используйте ES6 для красоты

class Show {
    static showCorrect() {
        console.log("Пароль верный");
    }
    static showIncorrect() {
        console.log("Пароль неверный");
    }
}
class Password {
    static verPassword(passWord) {
        passWord === 'd12' ? Show.showCorrect(): Show.showIncorrect();
    }
}
Password.verPassword(prompt());