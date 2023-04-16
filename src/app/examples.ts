//Models I will use as an example to test the functionality

export const branches = [
    "sucursal_A",
    "sucursal_B",
    "sucursal_C",
    "sucursal_D"
  ]

  export const loginWorker = {
    "status":"ok",
    "result":{
      "cedula":"123408",
      "nombre":"Alejandro",
      "apellido_1":"Chavarría",
      "apellido_2":"Solano",
      "provincia":"San José",
      "canton":"Montes de Oca",
      "distrito":"San Pedro",
      "salario":"193455.12",
      "correo":"achaso@gymtec.com",
      "password":"password123"
    }
  }


  export const getBranch = {
    "status": "ok",
    "result": {
    "nombre_sucursal": "Example Spa",
    "fecha_apertura": "2022-01-01",
    "horario": "Lunes a Viernes de 8:00 am a 5:00 pm",
    "cap_max": 50,
    "provincia": "San José",
    "canton": "Escazú",
    "distrito": "San Rafael",
    "manager": "123456789",
    "telefonos": [
        "2222-3333",
        "8888-9999"
        ],
        "active_spa": true,
        "active_store": true
        }
    }

    export const  getAllEquipment = {
        "status": "ok",
        "result": [
            {
                "num_serie": 12345,
                "tipo_equipo": "Computadora",
                "descripcion": "Computadora de escritorio con procesador Intel Core i7 y 16GB de RAM"
            },
            {
                "num_serie": 67890,
                "tipo_equipo": "Impresora",
                "descripcion": "Impresora láser multifuncional con capacidad de impresión a doble cara"
            },
            {
                "num_serie": 24680,
                "tipo_equipo": "Teléfono",
                "descripcion": "Teléfono inalámbrico con pantalla táctil y contestador automático"
            },
            {
                "num_serie": 13579,
                "tipo_equipo": "Tableta",
                "descripcion": "Tableta con pantalla de 10 pulgadas, procesador quad-core y 64GB de almacenamiento"
            }
        ]
    }

    export const get_all_payrolls = {
        "status": "ok",
        "result": 
        [
            {
                "empleado_cedula": "123456789",
                "planilla_id": 1,
                "descripcion": "Mensual"
            },
            {
                "empleado_cedula": "987654321",
                "planilla_id": 2,
                "descripcion": "Pago por horas"
            },
            {
                "empleado_cedula": "555555555",
                "planilla_id": 3,
                "descripcion": "Pago por clase"
            },
            {
                "empleado_cedula": "111111111",
                "planilla_id": 4,
                "descripcion": "Mensual"
            }
        ]
        }
        
        
        
        
        
        