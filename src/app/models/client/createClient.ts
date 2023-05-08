export interface createCliente {
    cedula_cliente: string | null;
    nombre : string | null;
    apellido_1 : string | null;
    apellido_2: string | null;
    direccion: string | null;
    email : string | null;
    password : string | null;
    Altura: number | null;
    Peso : number | null;
    fecha_nac: string | null; 

  }
  
  export class AddCliente {
    cedula_cliente: string | null;
    nombre : string | null;
    apellido_1 : string | null;
    apellido_2: string | null;
    direccion: string | null;
    email : string | null;
    password : string | null;
    Altura: number | null;
    Peso : number | null;
    fecha_nac: string | null;
    
    constructor(cedula_cliente: string , nombre : string , apellido_1 : string , apellido_2: string , direccion: string , email : string , password : string , Altura: number , Peso : number , Fecha_nac: string ) {
      this.cedula_cliente = cedula_cliente;
      this.nombre = nombre;
      this.apellido_1 = apellido_1;
      this.apellido_2 = apellido_2;
      this.direccion = direccion;
      this.email = email;
      this.password = password;
      this.Altura = Altura;
      this.Peso = Peso;
      this.fecha_nac = Fecha_nac;
    }

  }