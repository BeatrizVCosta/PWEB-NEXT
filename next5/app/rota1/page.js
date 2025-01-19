import { ComponenteA, ComponenteB, Autor } from "../novarota/componentes";

export default function Rota1() {
  return (
    <div>
      <h1>Bem-vindo à Rota 1!</h1>
      <ComponenteA />
      <ComponenteB />
      <Autor />
    </div>
  );
}
