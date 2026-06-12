import { Link, useParams } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useFetch } from "../hooks/useFetch";
import type { Character } from "../types/types";

export function Detail() {
  const { id } = useParams<{ id: string }>();

  const apiUrl = import.meta.env.VITE_API_URL as string;

  const { data, loading, error } = useFetch<Character>(
    `${apiUrl}/character/${id}`
  );

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) {
    return (
      <main className="container">
        <p>Cargando detalle...</p>
      </main>
    );
  }

  if (error || !data) {
    return (
      <main className="container">
        <p className="error">No se pudo cargar el detalle del personaje.</p>
        <Link to="/">Volver al inicio</Link>
      </main>
    );
  }

  const favorite = isFavorite(data.id);

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(data.id);
    } else {
      addFavorite(data);
    }
  };

  return (
    <main className="container">
      <Link to="/">Volver al inicio</Link>

      <section className="detail">
        <img src={data.image} alt={data.name} />

        <div>
          <h2>{data.name}</h2>
          <p>Estado: {data.status}</p>
          <p>Especie: {data.species}</p>
          <p>Género: {data.gender}</p>
          <p>Origen: {data.origin.name}</p>
          <p>Ubicación actual: {data.location.name}</p>

          <button type="button" onClick={handleFavorite}>
            {favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          </button>
        </div>
      </section>
    </main>
  );
}