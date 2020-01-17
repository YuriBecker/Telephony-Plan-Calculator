export default function pricePerMinute(origin, destiny, tax = false) {
  let price;
  switch (origin) {
    case '011':
      if (destiny === '016') {
        price = 1.9;
      }
      if (destiny === '017') {
        price = 1.7;
      }
      if (destiny === '018') {
        price = 0.9;
      }
      break;

    case '016':
      price = 2.9;
      break;

    case '017':
      price = 2.7;
      break;

    case '018':
      price = 1.9;
      break;

    default:
  }
  return tax ? price * 1.1 : price;
}
