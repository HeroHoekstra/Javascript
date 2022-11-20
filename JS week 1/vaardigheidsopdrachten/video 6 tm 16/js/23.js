//23. Bereken het gewicht van iemand die een BMI heeft van 28.6 en een lengte van 188 centimeter.
const height = 188;
const BMI = 28.6;
let weight = (height / 100) ** 2 * BMI
console.log(weight);