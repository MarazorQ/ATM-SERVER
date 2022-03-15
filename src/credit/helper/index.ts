export const isDolzen = (
  days: number,
  amount: number,
  payed: number,
  daycount: number,
) => {
  const credMonth = Math.round(days / 30);
  const credBody = amount / credMonth;
  const payment = [];

  for (let i = 0; i <= credMonth; i++) {
    payment.push(
      Math.round((((amount - credBody * i) * 0.05) / 365) * 30 + credBody),
    );
  }

  let count = 0;
  for (let k = 0; k < payment.length; k++) {
    count++;

    payed = payed - payment[k];
    if (payed >= 0) {
      console.log(1);
    } else {
      break;
    }
  }

  if (credMonth - count <= Math.round(daycount / 30)) {
    return 0;
  } else {
    return 1;
  }
};
