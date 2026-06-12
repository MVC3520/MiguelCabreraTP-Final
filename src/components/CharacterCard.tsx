import { Link } from "react-router-dom";
import type { Character } from "../types/types";
import { useFavorites } from "../context/FavoritesContext";

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({
  character,
}: CharacterCardProps) {
  const {
    addFavorite,
    removeFavorite,
    isFavorite,
  } = useFavorites();

  const favorite = isFavorite(character.id);

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  return (
    <article className="card">
      <img
        src={character.image}
        alt={character.name}
      />

      <div className="card-content">
        <h2>{character.name}</h2>

        <p>{character.species}</p>

        <p>{character.status}</p>

        <Link to={`/item/${character.id}`}>
          Ver detalle
        </Link>

        <button onClick={handleFavorite}>
          {favorite
            ? "Quitar favorito"
            : "Agregar favorito"}
        </button>
      </div>
    </article>
  );
}