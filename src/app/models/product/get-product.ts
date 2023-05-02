export interface GetProduct {
  codigo_barras: string | null;
}

export class Product {
  codigo_barras: string;
  nombre_producto: string;
  costo: number;
  constructor(nombre_producto: string, costo: number, codigo_barras: string) {
    this.codigo_barras = codigo_barras; 
    this.nombre_producto = nombre_producto;
    this.costo = costo;
  }
}
