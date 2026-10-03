import CartItem from './CartItem';

export default function Cart({ cartItems, increaseQuantity, decreaseQuantity, removeItem }) {
  // Calculate subtotal from cart state
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <section>
      <h1 className="mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity} removeItem={removeItem} />
          ))}
          <div className="border-top pt-3 text-end">
            <p>Items: {itemCount}</p>
            <p className="h5">Subtotal: ${subtotal.toFixed(2)}</p>
          </div>
        </>
      )}
    </section>
  );
}
