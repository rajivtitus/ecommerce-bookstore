import { CartItem } from "../utils/types";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const calcCartTotal = (items: CartItem[]): number => {
  return items.reduce((sum, cur: CartItem) => {
    const { price, quantity } = cur;
    return (sum += price * quantity);
  }, 0);
};

export const getMonthName = (): string => {
  const currMonth = new Date().getMonth();
  return MONTHS[currMonth];
};
