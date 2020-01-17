import planToMinutes from './planToMinutes';

export default function priceWithPlanNotZero(duration, plan) {
  return duration > planToMinutes(plan);
}
