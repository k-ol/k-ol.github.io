// Как бонус: сделайте оптимально и игру, которая закончится только после нажатия отмена
var compStep, userStep,
    list = ['камень','ножницы','бумага'],
    model =[[ 0,-1, 1], [ 1, 0,-1], [-1, 1, 0]];
for (;true;) {
    compStep = Math.floor(Math.random()/0.33333);
    userStep = prompt('Ваш ход:\nкамень - 0\nножницы - 1\nбумага - 2\nВыход - Отмена','');
    if (!userStep) {
      alert('Пока');
      break;
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
}