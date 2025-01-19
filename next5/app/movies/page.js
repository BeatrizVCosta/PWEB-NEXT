export default async function Home({ searchParams }) {
  const { titleSearchKey = "bagdad", yearSearchKey = "1900" } =
    await searchParams;

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}&y=${yearSearchKey}`
  );

  const data = await res.json();

  return (
    <div>
      <div>
        {" "}
        {data?.Search ? (
          data.Search.map((m) => (
            <div
              key={m.imdbID}
              style={{ border: "1px solid #ccc", padding: "10px" }}
            >
              <h2>{m.Title}</h2>
              <p>Ano de lançamento: {m.Year}</p>
              <p>Tipo: {m.Type}</p>
              <img
                src={m.Poster !== "N/A" ? m.Poster : "/placeholder.png"} // Verifica se há pôster disponível
                alt={m.Title}
                style={{ width: "200px", height: "300px", objectFit: "cover" }}
              />
            </div>
          ))
        ) : (
          <p>Nenhum resultado encontrado ou erro na API.</p>
        )}
      </div>
    </div>
  );
}
