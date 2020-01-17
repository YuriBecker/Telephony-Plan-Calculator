export default function planToMinutes(FaleMaisPlan) {
  switch (FaleMaisPlan) {
    case 'FaleMais 30':
      return 30;

    case 'FaleMais 60':
      return 60;

    case 'FaleMais 120':
      return 120;

    default:
  }
  return undefined;
}
