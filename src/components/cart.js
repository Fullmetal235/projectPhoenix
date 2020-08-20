import React from "react";
import Title from "./Title";
function Cart() {
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="Your " title="Cart" />
          <div className="row"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Cart;
