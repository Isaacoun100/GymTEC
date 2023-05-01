export interface GetBranch {
  nombre_sucursal: string | null;
}

export class Branch {
  nombre_sucursal: string;
  constructor(status: string) {
    this.nombre_sucursal = status;
  }
}

/*
"result": {
    "nombre_sucursal": "Sucursal Cartago",
    "fecha_apertura": "4/19/2023 12:00:00 AM",
    "horario": "08:00:00-20:00:00",
    "cap_max": 110,
    "provincia": "Cartago",
    "canton": "Oreamuno",
    "distrito": "San Rafael",
    "manager": "127832846",
    "telefonos": [
      "2567-8778",
      "7898-2132"
    ],
    "active_spa": false,
    "active_store": false
  }
}
*/
