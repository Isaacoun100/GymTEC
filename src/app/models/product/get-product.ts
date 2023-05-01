export interface GetProduct {
  codigo_barras: string | null;
}

export class Product {
  nombre_producto: string;
  costo: number;
  constructor(nombre_producto: string, costo: number) {
    this.nombre_producto = nombre_producto;
    this.costo = costo;
  }
}
