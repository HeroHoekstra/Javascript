let year = 2022;
const birthYears = [1988, 1982, 1988, 1988, 1922, 1990, 2000, 2020, 2033, 2001];
let ages = []
for (let i = 0; i < birthYears.length; i++) {
    if (typeof birthYears[i] === 'string') {
        console.log('Kan niet')
    } else {
        ages[i] = year - birthYears[i]
        console.log(ages[i])
    }
}