import ProductCard from './ProductCard';

export default function ProductList({ products, onSelectProduct }) {
  // Render products using .map()
  return (
    <div className="row g-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onSelectProduct={onSelectProduct} />
      ))}
    </div>
  );
}
