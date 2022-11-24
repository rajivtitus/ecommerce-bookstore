import { ReactElement } from "react";

interface Props {
  quantity: number;
  increment(): any;
  decrement(): any;
}

const Quantity = ({ quantity, increment, decrement }: Props): ReactElement => {
  return (
    <p className="py-2 text-lg font-bold">
      Quantity:
      <button
        disabled={quantity === 1}
        onClick={decrement}
        className="w-10 mx-4 text-xl rounded bg-secondary"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        disabled={quantity > 99}
        onClick={increment}
        className="w-10 mx-4 text-xl rounded bg-secondary"
      >
        +
      </button>
    </p>
  );
};

export default Quantity;
