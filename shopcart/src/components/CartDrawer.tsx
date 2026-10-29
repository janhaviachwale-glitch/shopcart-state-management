import CartItemsList from './CartItemsList';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
}: CartDrawerProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside
        className="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="drawer-header">
          <div>
            <p className="eyebrow">YOUR SELECTION</p>
            <h2 id="cart-title">Shopping cart</h2>
          </div>

          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close shopping cart"
          >
            ×
          </button>
        </div>

        <CartItemsList />

        <div className="drawer-footer">
          <div className="cart-total">
            <span>Subtotal</span>
            <strong>₹0.00</strong>
          </div>

          <button
            className="primary-button checkout-button"
            disabled
          >
            Proceed to Checkout
          </button>

          <p className="checkout-note">
            Cart functionality will be added in the Context deliverable.
          </p>
        </div>
      </aside>
    </div>
  );
}