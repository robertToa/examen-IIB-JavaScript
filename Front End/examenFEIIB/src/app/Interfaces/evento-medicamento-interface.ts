import {Evento} from "./evento";
import {Medicamento} from "./medicamento";

export interface EventoMedicamentoInterface {
  id: string | number,
  idEvento: number | string | Evento,
  idMedicamento: number | string | Medicamento,
}
