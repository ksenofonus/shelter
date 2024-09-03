export const getRandom = (max) => {
  return Math.floor(Math.random() * max);
}

export const getRandomStartOrder = (count) => {
  let order = [];
  while (order.length < count) {
    let x = getRandom(8);
    (order.includes(x)) ? x = getRandom(8) : order.push(x);
  }
  console.log(order);
  return order;
}
