import ProductList from '../components/ProductList';

export default function ShopView({ products, onSelectProduct }) {
  return (
    <section>
      <h1 className="mb-4">Shop GPUs</h1>
      <ProductList products={products} onSelectProduct={onSelectProduct} />
    </section>
  );
}
