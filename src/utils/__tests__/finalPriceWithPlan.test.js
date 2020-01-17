import finalPriceWithPlan from '../finalPriceWithPlan';

test('PlanToMinutes working - FaleMais 60', () => {
  expect(finalPriceWithPlan(80, 'FaleMais 60', '011', '017').toFixed(2)).toBe(
    '37.40'
  );
});

test('PlanToMinutes working - FaleMais 30', () => {
  expect(finalPriceWithPlan(200, 'FaleMais 120', '018', '011').toFixed(2)).toBe(
    '167.20'
  );
});
