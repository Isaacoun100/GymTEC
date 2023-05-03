export interface GetBranch {
  nombre_sucursal: string | null;
}

export class Branch {
  nombre_sucursal: string;
  constructor(status: string) {
    this.nombre_sucursal = status;
  }
}