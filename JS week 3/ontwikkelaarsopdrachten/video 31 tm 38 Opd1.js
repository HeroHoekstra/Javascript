const birthday = {
    birthDay: 28,
    birthMonth: 6,
    birthYear: 2006
}

const currentDay = {
    day: 21,
    month: 11,
    year: 2022
}

function calDay(day, month, year) {
    let allDays = 1;
    let leapYear;

    if (year % 4 == 0) leapYear = true;
    else leapYear = false;

    for (let i = 1; i < month; i++) {
        if (i % 2 == 0) allDays += 30;
        else allDays += 31;

        if (i == 2) {
            if (leapYear) allDays -= 1;
            else allDays -= 2;
        }
    }

    return allDays + day;
}

let birthDayOfYear = calDay(birthday.birthDay, birthday.birthMonth, birthday.birthYear);
let thisDayOfYear = calDay(currentDay.day, currentDay.month, currentDay.year);

console.log(`Je bent ${currentDay.year - birthday.birthYear} jaar en ${thisDayOfYear - birthDayOfYear} dagen`)