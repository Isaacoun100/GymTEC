export interface AddBranch {
  nombre_sucursal: string | null;
  fecha_apertura: string | null;
  horario: string | null;
  cap_max: number | null;
  provincia: string | null;
  canton: string | null;
  distrito: string | null;
  manager: string | null;
  telefonos: (string | null)[];
  active_spa: boolean | null;
  active_store: boolean | null;
}
