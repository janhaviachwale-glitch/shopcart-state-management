import { memo } from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-icon" aria-hidden="true">
        {product.name.includes('Keyboard')
          ? '⌨️'
          : product.name.includes('Mouse')
            ? '🖱️'
            : product.name.includes('Adapter')
              ? '🔌'
              : '💡'}
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">
          ₹{product.price.toFixed(2)}
        </p>

        <button className="primary-button" disabled>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default memo(ProductCard);