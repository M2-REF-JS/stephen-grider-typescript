const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const mulitply = function (a: number, b: number): number {
  return a * b;
};

const logger = (msg: string): void => {
  console.log(msg);
};

const throwError = (msg: string): void => {
  if (!msg) {
    throw new Error(msg);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

//ES2015
// const logWeather = ({ date, weather }) => {
//   console.log(date);
//   console.log(weather);
// };

logWeather(todaysWeather);
