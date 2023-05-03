export class Clase {
    clase_id : number | null;
    servicio : string | null;
    modo : string | null;
    capacidad : number | null;
    fecha : string | null;
    hora_ingreso : string | null; 
    hora_salida : string | null; 
    encargado : string | null;

    constructor(clase_id: number, servicio: string, modo: string, capacidad: number, fecha: string, hora_ingreso: string, hora_salida: string, encargado: string) {
        this.clase_id = clase_id;
        this.servicio = servicio;
        this.modo = modo;
        this.capacidad = capacidad;
        this.fecha = fecha;
        this.hora_ingreso = hora_ingreso;
        this.hora_salida = hora_salida;
        this.encargado = encargado;
    }
  }

  export interface RequestClassI {
    fecha : string | null;
    sucursal : string | null;
  }