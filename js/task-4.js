const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = ({ id, amount }) => {
  const delay = randomIntegerFromInterval(200, 500);
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (canProcess) {
        resolved(
          `Transaction ${id} was processed in the amount of $${amount}.`
        );
      } else {
        rejected(`Error processing transaction ${id}. Please try again later.`);
      }
    }, delay);
  });
};

/*
 * Работает так
 */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

makeTransaction({ id: 71, amount: 230 })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

makeTransaction({ id: 72, amount: 75 })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

makeTransaction({ id: 73, amount: 100 })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
