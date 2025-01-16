import Link from "next/link";
// Componente
export function Novidade() {
  return <h2>.... vem aí novidades</h2>;
}

export default function Home() {
  return (
    <div>
      <h1>Página inicial</h1>
      <h1>Next 2 - Segunda receita de next</h1>
      <p>Escolha uma rota:</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link href="/rota1">
          <button>Ir para Rota 1</button>
        </Link>
        <Link href="/rota2">
          <button>Ir para Rota 2</button>
        </Link>
        <Link href="/rota3">
          <button>Ir para Rota 3</button>
        </Link>
        <Link href="/novarota">
          <button>Ir para a nova rota</button>
        </Link>
      </div>
    </div>
  );
}
