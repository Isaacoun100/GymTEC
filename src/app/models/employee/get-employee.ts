export interface GetEmployee {
  cedula_empleado: string | null;
}

export class Employees {
  cedula: string;
  nombre: string;
  apellido_1: string;
  apellido_2: string;

  constructor(cedula: string, nombre: string, apellido_1: string, apellido_2: string) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido_1 = apellido_1;
    this.apellido_2 = apellido_2;
  }
    
}

