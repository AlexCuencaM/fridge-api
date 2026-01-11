export function getExpiryRange(days: number) {
  const now = new Date();
  const from = new Date(now);
  const to = new Date(now);

  from.setDate(now.getDate() - days);
  to.setDate(now.getDate() + days);

  return { from, to };
}