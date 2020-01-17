import planToMinutes from '../planToMinutes';

test('PlanToMinutes working - FaleMais 30', () => {
  expect(planToMinutes('FaleMais 30')).toBe(30);
});

test('PlanToMinutes working - FaleMais 60', () => {
  expect(planToMinutes('FaleMais 60')).toBe(60);
});

test('PlanToMinutes working - FaleMais 120', () => {
  expect(planToMinutes('FaleMais 120')).toBe(120);
});
