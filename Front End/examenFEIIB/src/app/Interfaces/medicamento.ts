import {Paciente} from "./paciente";

export interface Medicamento {
  id: string | number;
  gramosIngerir: number;
  nombre:string;
  composicion:string;
  usadoPara:string;
  fechaCaducidad:string;
  numeroPastillas: number;
  idPaciente: number |string | Paciente
}
