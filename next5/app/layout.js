import Link from "next/link";

export const metadata = {
  title: "Página Inicial",
  description: "Exemplo de layout com menu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
          <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
            <Link href="/">Home</Link>
            <Link href="/rota1">Rota 1</Link>
            <Link href="/rota2">Rota 2</Link>
            <Link href="/rota3">Rota 3</Link>
            <Link href="/novarota">Nova Rota</Link>
            <Link href="/movieSearch">Movie Search</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
