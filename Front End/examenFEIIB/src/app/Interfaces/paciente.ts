import {Usuario} from "./usuario";

export interface Paciente {
  id: number |string;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  hijos: number;
  tieneSeguro: boolean;
  idUsuario: number | string | Usuario
}
