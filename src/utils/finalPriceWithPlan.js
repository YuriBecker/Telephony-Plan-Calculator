import planToMinutes from './planToMinutes';
import pricePerMinute from './pricePerMinute';

export default function finalPriceWithPlan(duration, plan, origin, destiny) {
  return (
    (duration - planToMinutes(plan)) * pricePerMinute(origin, destiny, true)
  );
}
