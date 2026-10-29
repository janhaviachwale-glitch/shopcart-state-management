export default function CartItemsList() {
  return (
    <div className="empty-cart">
      <span aria-hidden="true">🛍️</span>
      <h3>Your cart is empty</h3>
      <p>Add something you love from the collection.</p>
    </div>
  );
}