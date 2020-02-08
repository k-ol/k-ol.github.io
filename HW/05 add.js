// Как бонус: сделайте оптимально и игру, которая закончится только после нажатия отмена
var compStep, userStep,
    list = ['камень','ножницы','бумага'],
    model =[[ 2, 1, 3], [ 3, 2, 1], [ 1, 3, 2]];
for (;true;) {
    compStep = Math.floor(Math.random()/(1/3));
    userStep = prompt('Ваш ход:\nкамень - 1\nножницы - 2\nбумага - 3\nВыход - Отмена','');
    if (userStep === null) {
      alert('Пока');
      break;
    } else {
        userStep = Number(userStep-1);
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
}