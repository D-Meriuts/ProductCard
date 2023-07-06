import React from "react";
import { InnerPrice, PriceWrapper } from "./styled";
import OldPrice from "/src/old-price/old-price";

function FullPrice({ price, oldPrice, className }) {
  const showOldPrice = oldPrice && price < oldPrice;

  return (
    <PriceWrapper className={className}>
      {showOldPrice && <OldPrice value={oldPrice} />}
      {showOldPrice && " "}
      <InnerPrice value={price} />
    </PriceWrapper>
  );
}

export default FullPrice;
