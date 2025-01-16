import Link from "next/link";

export function ComponenteA() {
  return <h2>Rota carregada com sucesso</h2>;
}

export function ComponenteB() {
  return <h2>Tudo funcionando corretamente</h2>;
}

export default function Home() {
  return (
    <div>
      <h1>Página inicial</h1>
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
      </div>
    </div>
  );
}
