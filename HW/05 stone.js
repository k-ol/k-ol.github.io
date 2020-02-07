// Игра Камень, ножницы, бумага
// Написать игру к,н,б. Для хода компьютера используйте Math.round()
// Делает ход компьютер, делает ход игрок(prompt), выводим результат.
// Не забудьте, что может-быть ничья.
// Проверки на отмену и некорректные данные тоже нужны.
var compStep, userStep,
    list = ['камень','ножницы','бумага'],
    model =[[ 0,-1, 1], [ 1, 0,-1], [-1, 1, 0]];
    compStep = Math.floor(Math.random()/0.33333);
    userStep = prompt('Ваш ход:\nкамень - 0\nножницы - 1\nбумага - 2','');
    if (!userStep) {
      alert('Пока');
    } else {
        userStep = Number(userStep);
        switch (model[compStep][userStep]) {
          case 1: alert('Победа - Я: '+ list[compStep]+' / Вы - '+list[userStep]);
            break;
          case 0: alert('Ничья - оба: '+ list[compStep]);
            break;    
          case -1: alert('Поражение - Я: '+ list[compStep]+' / Вы - '+list[userStep]);
            break;         
          default : alert('Некоректные данные');
        } 
    }
