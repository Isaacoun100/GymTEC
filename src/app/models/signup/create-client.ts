export interface CreateClient {
  cedula_cliente: number | null;
  nombre: string | null;
  apellido_1: string | null;
  apellido_2: string | null;
  direccion: string | null;
  email: string | null;
  password: string | null;
  altura: number | null;
  peso: number | null;
  fecha_nacimiento: string | null;
}
