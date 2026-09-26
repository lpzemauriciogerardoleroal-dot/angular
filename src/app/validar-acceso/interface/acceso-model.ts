export interface AccesoRequest {
  edad: number;
  yaPago: boolean;
}

export interface AccesoResponse {
  puedeEntrar: boolean;
  mensaje?: string;
}
export interface ListarModel {
  id: number;
  nombre: string;
}
