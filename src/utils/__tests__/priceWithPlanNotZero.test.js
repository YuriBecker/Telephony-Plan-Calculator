import priceWithPlanNotZero from '../priceWithPlanNotZero';

test('priceWithPlanNotZero working - More 1', () => {
  expect(priceWithPlanNotZero(31, 'FaleMais 30')).toBeTruthy();
});

test('priceWithPlanNotZero working - More 2', () => {
  expect(priceWithPlanNotZero(61, 'FaleMais 60')).toBeTruthy();
});

test('priceWithPlanNotZero working - More 3', () => {
  expect(priceWithPlanNotZero(121, 'FaleMais 120')).toBeTruthy();
});

test('priceWithPlanNotZero working - Equal 1', () => {
  expect(priceWithPlanNotZero(30, 'FaleMais 30')).not.toBeTruthy();
});

test('priceWithPlanNotZero working - Equal 2', () => {
  expect(priceWithPlanNotZero(60, 'FaleMais 60')).not.toBeTruthy();
});

test('priceWithPlanNotZero working - Equal 3', () => {
  expect(priceWithPlanNotZero(120, 'FaleMais 120')).not.toBeTruthy();
});

test('priceWithPlanNotZero working - Less 1', () => {
  expect(priceWithPlanNotZero(7, 'FaleMais 30')).not.toBeTruthy();
});

test('priceWithPlanNotZero working - Less 2', () => {
  expect(priceWithPlanNotZero(57, 'FaleMais 60')).not.toBeTruthy();
});

test('priceWithPlanNotZero working - Less 3', () => {
  expect(priceWithPlanNotZero(112, 'FaleMais 120')).not.toBeTruthy();
});
