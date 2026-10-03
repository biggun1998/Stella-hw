export default function Navbar({ onNavigate, cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" aria-label="Main navigation">
      <div className="container">
        <button className="navbar-brand btn" onClick={() => onNavigate('home')}>Stellar Hardware</button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <div className="navbar-nav ms-auto">
            {['home', 'shop', 'account', 'cart'].map(view => (
              <button key={view} className="nav-link" onClick={() => onNavigate(view)}>
                {view.charAt(0).toUpperCase() + view.slice(1)}{view === 'cart' && ` (${cartCount})`}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
