//Models I will use as an example to test the functionality

export const branches = [
    { "sucursal": "Main Street" },
    { "sucursal": "Downtown" },
    { "sucursal": "Mall" },
    { "sucursal": "North Side" },
    { "sucursal": "South Side" },
    { "sucursal": "West Side" },
    { "sucursal": "East Side" },
    { "sucursal": "Airport" },
    { "sucursal": "Train Station" },
    { "sucursal": "Bus Terminal" },
    { "sucursal": "Beachfront" },
    { "sucursal": "Mountain View" },
    { "sucursal": "Suburbs" },
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


  export const get_branch = {
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
            "2222-2222",
            "3333-3333",
            "4444-4444",
            "5555-5555"
        ],
        "active_spa": true,
        "active_store": true
        }
    }

    export const  get_all_equipment = {
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

    export const get_all_products = {
        "status": "ok",
        "result": [
            {
                "nombre_producto": "Camisa Polo",
                "costo": 29.99
            },
            {
                "nombre_producto": "Jeans",
                "costo": 59.99
            },
            {
                "nombre_producto": "Zapatos de cuero",
                "costo": 129.99
            },
            {
                "nombre_producto": "Reloj de pulsera",
                "costo": 89.99
            },
            {
                "nombre_producto": "Gorra",
                "costo": 19.99
            }
            
        ]
    }

    export const get_all_inventories = {
        "status": "ok",
        "result": [
            {
                "num_serie": 12345,
                "marca": "Sony",
                "costo": 399.99
            },
            {
                "num_serie": 67890,
                "marca": "Samsung",
                "costo": 549.99
            },
            {
                "num_serie": 24680,
                "marca": "LG",
                "costo": 299.99
            },
            {
                "num_serie": 13579,
                "marca": "Apple",
                "costo": 749.99
            },
            {
                "num_serie": 86420,
                "marca": "Lenovo",
                "costo": 699.99
            }
        ]
    }

    export const get_all_employees = {
        "status": "ok",
        "result": [
            {
                "cedula": "123456789",
                "nombre": "Juan",
                "apellido_1": "Pérez",
                "apellido_2": "González"
            },
            {
                "cedula": "987654321",
                "nombre": "María",
                "apellido_1": "Rodríguez",
                "apellido_2": "Sánchez"
            },
            {
                "cedula": "456789123",
                "nombre": "Carlos",
                "apellido_1": "Gutiérrez",
                "apellido_2": "Jiménez"
            },
            {
                "cedula": "321654987",
                "nombre": "Ana",
                "apellido_1": "López",
                "apellido_2": "Hernández"
            },
            {
                "cedula": "789123456",
                "nombre": "Pedro",
                "apellido_1": "García",
                "apellido_2": "Martínez"
            },
            {
                "cedula": "654987321",
                "nombre": "Laura",
                "apellido_1": "Díaz",
                "apellido_2": "Pérez"
            },
            {
                "cedula": "111111111",
                "nombre": "José",
                "apellido_1": "González",
                "apellido_2": "Hernández"
            },
            {
                "cedula": "222222222",
                "nombre": "María",
                "apellido_1": "García",
                "apellido_2": "Martínez"
            }
        ]
    }

    export const adminInfo = {
        "status":"ok",
        "result":{
          "cedula":"123456789",
          "nombre":"Juan",
          "apellido_1":"Perez",
          "apellido_2":"Gonzalez",
          "provincia":"San Jose",
          "canton":"Central",
          "distrito":"Pavas",
          "salario":3000.00,
          "correo":"juan.perez@example.com",
          "password":"p@ssw0rd123"
        }
      }

    export const services = [
        {'servicio':'Masaje relajante'},
        {'servicio': 'masaje descarga muscular'},
        {'servicio': 'sauna'},
        {'servicio': 'baños a vapor'}
    ]

    export const get_employee = {
    "status": "ok",
    "result": {
        "cedula_empleado": "123456789",
        "nombre": "Juan",
        "apellido_1": "Pérez",
        "apellido_2": "González",
        "provincia": "San José",
        "canton": "Escazú",
        "distrito": "San Rafael",
        "salario": 1500.0,
        "correo": "juan.perez@example.com",
        "password": "secretpassword",
        "nombre_sucursal": "Sucursal Central",
        "puesto_descripcion": "Vendedor",
        "planilla_descripcion": "Mensual"
    }
}
      