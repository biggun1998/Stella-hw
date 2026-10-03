export default function CartItem({ item, increaseQuantity, decreaseQuantity, removeItem }) {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex flex-wrap align-items-center gap-3">
        <img src={item.image} className="cart-image" alt={item.name} />
        <div className="flex-grow-1">
          <h2 className="h5">{item.name}</h2>
          <p className="mb-0">Price: ${item.price.toFixed(2)}</p>
          <p className="mb-0">Line total: ${(item.price * item.quantity).toFixed(2)}</p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-outline-secondary" disabled={item.quantity === 1}
            aria-label={`Decrease quantity of ${item.name}`} onClick={() => decreaseQuantity(item.id)}>−</button>
          <span>Quantity: {item.quantity}</span>
          <button className="btn btn-outline-secondary" aria-label={`Increase quantity of ${item.name}`}
            onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
        <button className="btn btn-outline-danger" onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </div>
  );
}
