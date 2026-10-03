export default function HomeView({ onShop }) {
  return (
    <section className="hero">
      <h1>Stellar Hardware</h1>
      <p className="lead">Desktop graphics cards for gaming and computing.</p>
      <button className="btn btn-primary" onClick={onShop}>Shop GPUs</button>
    </section>
  );
}
