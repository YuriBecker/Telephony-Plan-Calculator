import pricePerMinute from './pricePerMinute';

export default function finalPriceWithoutPlan(duration, origin, destiny) {
  return duration * pricePerMinute(origin, destiny, false);
}
