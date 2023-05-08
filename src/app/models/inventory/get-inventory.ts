export interface GetInventory {
  num_serie: number | null;
}

export class Inventory {
  num_serie: number;
  marca: string;
  tipo_equipo: string;
  constructor(num_serie: number, marca: string, tipo_equipo: string) {
    this.num_serie = num_serie;
    this.marca = marca;
    this.tipo_equipo = tipo_equipo;
  }
}
