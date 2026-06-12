import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export function Navbar() {
  const { favorites } = useFavorites();

  return (
    <header className="navbar">
      <h1>Explorador de Personajes</h1>

      <nav>
        <Link to="/">Inicio</Link>

        <Link to="/login">Login</Link>

        <span>
          Favoritos: {favorites.length}
        </span>
      </nav>
    </header>
  );
}