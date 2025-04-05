import { age, name } from "./data";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem></CartItem>
      {age}
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
