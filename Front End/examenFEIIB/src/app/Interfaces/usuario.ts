import {Rol} from "./rol";

export interface Usuario {
  id: number | string;
  nombre: string;
  correo: string;
  password: string;
  fechaNacimiento: string;
  roles: Rol[];
}
