import finalPriceWithoutPlan from '../finalPriceWithoutPlan';

test('finalPriceWithoutPlan - Test1', () => {
  expect(finalPriceWithoutPlan(80, '011', '017').toFixed(2)).toBe('136.00');
});

test('finalPriceWithoutPlan - Test2', () => {
  expect(finalPriceWithoutPlan(200, '018', '011').toFixed(2)).toBe('380.00');
});
