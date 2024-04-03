export const formatAsDollars = (price: number | string): string => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price) / 100);

  return dollarsAmount;
};
