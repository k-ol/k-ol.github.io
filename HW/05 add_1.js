// Как бонус: сделайте оптимально и игру, которая закончится только после нажатия отмена
var compStep, userStep,
    list = ['камень','ножницы','бумага'];
for (;true;) {
    compStep = Math.floor(Math.random()/(1/3));
    userStep = prompt('Ваш ход:\nкамень - 1\nножницы - 2\nбумага - 3\nВыход - Отмена','');
    if (userStep === null) {
      alert('Пока');
      break;
    } else {
        userStep -=1;
        switch (compStep-userStep) {
          case -1: 
          case  2:alert('Моя победа - Я: '+ list[compStep]+' / Вы - '+list[userStep]);
            break;
          case  0: alert('Ничья - оба: '+ list[compStep]);
            break;    
          case  1:
          case -2:  alert('Ваша взяла - Я: '+ list[compStep]+' / Вы - '+list[userStep]);
            break;         
          default : alert('Некоректные данные');
        } 
    }
}