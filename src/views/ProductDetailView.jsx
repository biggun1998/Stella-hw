import { useState } from 'react';

export default function ProductDetailView({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="row g-4 align-items-center">
      <div className="col-md-5">
        <img src={product.image} className="img-fluid" alt={product.name} />
      </div>
      <div className="col-md-7">
        <h1>{product.name}</h1>
        <p>{product.manufacturer} · {product.series} · {product.vram} VRAM</p>
        <p>{product.description}</p>
        <p className="h4">${product.price.toFixed(2)}</p>
        <p>{product.stock === 0 ? 'Out of Stock' : `Stock: ${product.stock}`}</p>
        <div className="d-flex align-items-center gap-3 mb-3">
          <button className="btn btn-outline-secondary" aria-label="Decrease quantity" disabled={quantity === 1}
            onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
          <span>Quantity: {quantity}</span>
          <button className="btn btn-outline-secondary" aria-label="Increase quantity" disabled={quantity >= product.stock}
            onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}>+</button>
        </div>
        <button className="btn btn-primary" disabled={product.stock === 0}
          onClick={() => onAddToCart(product, quantity)}>Add to Cart</button>
      </div>
    </section>
  );
}
