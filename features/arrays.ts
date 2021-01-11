const carMakers = ['Ford', 'Mercedes-Benz', 'BMW'];
const dates = [new Date(), new Date(), new Date()];

const carsBymake = [['Camry', 'S550', 'Series 7']];

//Help w/ inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incomptible values
// carMakers.push(100);

//Help w/ 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date(), '2021-03-21'];

importantDates.push('2021-03-21');
importantDates.push(new Date());
// importantDates.push(50);
