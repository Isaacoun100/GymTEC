export interface CreateClient {
  cedula_cliente: number | undefined;
  nombre: string | undefined;
  apellido_1: string | undefined;
  apellido_2: string | undefined;
  direccion: string | undefined;
  email: string | undefined;
  password: string | undefined;
  altura: number | undefined;
  peso: number | undefined;
  fecha_nacimiento: string | undefined;
}
