export default async function Home({ searchParams }) {
  const { titleSearchKey = "bagdad" } = await searchParams;

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`
  );

  const data = await res.json();

  return (
    <div>
      <div>
        {data.Search.map((m) => (
          <div
            key={m.imdbID}
            style={{ border: "1px solid #ccc", padding: "10px" }}
          >
            <h2>{m.Title}</h2>
            <p>Ano de lançamento: {m.Year}</p>
            <p>Tipo: {m.Type}</p>

            {/* Exibindo a imagem do pôster */}
            <img
              src={m.Poster !== "N/A" ? m.Poster : "/placeholder.png"} // Verifica se há pôster disponível
              alt={m.Title}
              style={{ width: "200px", height: "300px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
