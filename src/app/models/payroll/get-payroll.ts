export interface GetPayroll {
  planilla_id: number | null;
}

export class Payroll {
  empleado_cedula: string;
  nombre_planilla: string;
  salario: number;
  constructor(empleado_cedula: string, nombre_planilla: string, salario: number) {
    this.empleado_cedula = empleado_cedula;
    this.nombre_planilla = nombre_planilla;
    this.salario = salario;
  }

}