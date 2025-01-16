import { MariaPrea, Autor, Message } from "./componentes";

// importando um componente criado em um page
import { Novidade } from "../page";

export default function NovaRotaHome() {
  return (
    <div>
      <h1>Nova Rota, Nova Página</h1>
      <MariaPrea />
      <Novidade />
      <Message text="Será que Maria preá morreu mesmo?" />
      <Autor />
    </div>
  );
}
