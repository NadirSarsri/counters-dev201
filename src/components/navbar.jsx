// stateless Function Component
function Navbar({ totalItems }) {
  return (
    <nav className="navbar bg-body tertiary">
      <div className="container-fluid">
        <span className="navbar-brand h1 mb-0">
          Navbar <span className="badge text-bg-primary">{totalItems}</span>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
