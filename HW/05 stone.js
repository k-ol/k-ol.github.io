// Игра Камень, ножницы, бумага
// Написать игру к,н,б. Для хода компьютера используйте Math.round()
// Делает ход компьютер, делает ход игрок(prompt), выводим результат.
// Не забудьте, что может-быть ничья.
// Проверки на отмену и некорректные данные тоже нужны.
var compStep, userStep,
    list = ['камень','ножницы','бумага'],
    model =[[2, 1, 3], [3, 2, 1], [1, 3, 2]];
    compStep = Math.floor(Math.random()/(1/3));
    userStep = prompt('Ваш ход:\nкамень - 1\nножницы - 2\nбумага - 3','');
if (userStep === null) {
  alert('Пока');
} else {
    userStep -= 1;
    switch (model[compStep][userStep]) {
      case 3: alert('Победа - Я: '+ list[compStep]+' / Вы - '+list[userStep]);
        break;
      case 2: alert('Ничья - оба: '+ list[compStep]);
        break;    
      case 1: alert('Поражение - Я: '+ list[compStep]+' / Вы - '+list[userStep]);
        break;         
      default : alert('Некоректные данные');
    } 
}
