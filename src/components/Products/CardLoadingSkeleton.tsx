import { ReactElement } from "react";

const CardLoadingSkeleton = (): ReactElement => {
  return (
    <div className="space-y-5 rounded-2xl bg-medGray p-4">
      <div className="h-[20rem] w-6/12 m-auto rounded-lg bg-white"></div>
      <div className="space-y-3 px-6 pt-2">
        <div className="h-3 w-4/5 rounded-lg bg-white"></div>
        <div className="h-3 w-2/5 rounded-lg bg-white"></div>
      </div>
    </div>
  );
};

export default CardLoadingSkeleton;
