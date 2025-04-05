export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h2>Products</h2>
      {상품.map((item, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img"></img>
            <h4>{item} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
