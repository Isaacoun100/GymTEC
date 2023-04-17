export interface AddBranch {
  nombre_sucursal: string | undefined;
  fecha_apertura: string | undefined;
  horario: string | undefined;
  cap_max: number | undefined;
  provincia: string | undefined;
  canton: string | undefined;
  distrito: string | undefined;
  manager: string | undefined;
  telefonos: [] | undefined;
  active_spa: boolean | undefined;
  active_store: boolean | undefined;
}
