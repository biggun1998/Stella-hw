export default function ProductCard({ product, onSelectProduct }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card h-100">
        <img src={product.image} className="card-img-top product-image p-3" alt={product.name} />
        <div className="card-body d-flex flex-column">
          <h2 className="h5 card-title">{product.name}</h2>
          <p className="text-muted mb-2">{product.manufacturer} · {product.series} · {product.vram} VRAM</p>
          <p className="card-text">{product.description}</p>
          <p className="fw-bold">${product.price.toFixed(2)}</p>
          <button className="btn btn-primary mt-auto" onClick={() => onSelectProduct(product)}>View Product</button>
        </div>
      </div>
    </div>
  );
}
