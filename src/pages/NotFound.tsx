import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="container">
      <h2>Página no encontrada</h2>

      <p>
        La dirección que intentó acceder no existe o ya no se encuentra
        disponible dentro de la aplicación.
      </p>

      <Link to="/">Volver al inicio</Link>
    </main>
  );
}