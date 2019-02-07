import {Rol} from "./rol";
import {Usuario} from "./usuario";

export interface RolUsuarioInterface {
  id: number | string,
  idRol: number | string | Rol,
  idUsuario: number | string | Usuario
}
