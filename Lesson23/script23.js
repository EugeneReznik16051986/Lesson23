"use strict";

// № 1
//Нужно вывести в консоль сколько минут осталось до конца текущего дня.

let minutes = new Date();
let tomorrow = new Date(minutes.getFullYear(),minutes.getMonth(),minutes.getDate()+1,)
let getMinutesToTomorrow = (tomorrow - minutes)/60000;
console.log(Math.round(getMinutesToTomorrow));

// № 2
//Нужно вывести в консоль сколько секунд прошло с начала текущего дня.

function getSecondsToday(){
    let day = new Date();
    let hours = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();
    let sum = (hours * 3600) + (minutes * 60) + (seconds);
console.log(sum);
}
getSecondsToday();





// № 3
//Выведите в консоль название для недели (например: Понедельник), которая была 25 января 2013

let date = new Date(2013, 0, 25);
function dayName(date) {
    let days = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date.getDay()];
  }
console.log(dayName(date)); 



// № 4
//Сделайте скрипт, который будет просить пользователя ввести дату своего рождения в формате 1990-10-01
//и в ответ будет выдавать сколько дней осталось до его дня рождения.

let ownBirthday = prompt('Введите дату', '');
function daysToBirthday() { 
    let birthday = new Date(Date.parse(ownBirthday));
    let today = new Date();
    let dateOfBirthday = birthday.setFullYear(today.getFullYear());
        if (dateOfBirthday < today) {
        birthday.setFullYear(today.getFullYear()+1);
    }
    let mSeconds = 24 * 60 * 60 * 1000; 
    return Math.round((birthday.getTime() - today.getTime())/mSeconds);
}
console.log(daysToBirthday(ownBirthday));
