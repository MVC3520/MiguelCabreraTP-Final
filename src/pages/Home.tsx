import { useState } from "react";
import { CharacterCard } from "../components/CharacterCard";
import { useFetch } from "../hooks/useFetch";
import type { ApiResponse } from "../types/types";

export function Home() {
  const [search, setSearch] = useState<string>("");

  const apiUrl = import.meta.env.VITE_API_URL as string;

  const url =
    search.trim().length > 0
      ? `${apiUrl}/character/?name=${search}`
      : `${apiUrl}/character`;

  const { data, loading, error } = useFetch<ApiResponse>(url);

  return (
    <main className="container">
      <section className="intro">
        <h2>Buscador de personajes</h2>
        <p>
          Aplicación SPA desarrollada con React, TypeScript, React Router,
          Custom Hooks y Context API.
        </p>
      </section>

      <section className="search-box">
        <input
          type="text"
          placeholder="Buscar personaje"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </section>

      {loading && <p>Cargando información...</p>}

      {error && <p className="error">{error}</p>}

      <section className="grid">
        {data?.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </section>
    </main>
  );
}