# 🏋️ GymTEC

[![Angular](https://img.shields.io/badge/Angular-15-DD0031?logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-72.8%25-3178C6?logo=typescript)]()
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap)](https://getbootstrap.com/)
[![Status](https://img.shields.io/badge/Status-Academic_Project-yellow)]()

**GymTEC** is a web-based gym management system developed with Angular.

The application provides administrative and client-facing interfaces for managing gym branches, employees, inventory, equipment, products, services, treatments, classes, payroll, and customer registration.

GymTEC connects with a REST API to retrieve and modify application data.

---

## ✨ Main Features

- 👤 Client and administrator login
- 👥 Client registration
- 🏢 Gym branch management
- 📋 Branch copying and configuration
- 👷 Employee management
- 💰 Payroll visualization
- 📦 Inventory management
- 🧰 Equipment management
- 🛍️ Product management
- 🧘 Gym service management
- 💆 Treatment associations
- 🎓 Gym class creation
- 🔗 Service and inventory assignments
- 🧾 Administrative dashboard
- 👤 Client dashboard
- 🌐 REST API communication
- 🎨 Responsive interface components
- 🧩 Reusable Angular forms and templates

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Angular 15 | Main frontend framework |
| TypeScript | Application logic |
| HTML | Page structure |
| SCSS / CSS | Styling |
| Angular Router | Navigation |
| Angular Forms | Form handling |
| Reactive Forms | Dynamic form validation |
| RxJS | Reactive HTTP and asynchronous operations |
| Angular CLI | Development and builds |
| Bootstrap 5.3 | UI components and layout |
| Jasmine | Unit test definitions |
| Karma | Test execution |
| Zone.js | Angular change detection |
| REST API | Backend communication |
| IIS | Optional web deployment |

---

## 🌍 Language Composition

| Language | Percentage |
|---|---:|
| TypeScript | 72.8% |
| HTML | 26.4% |
| SCSS | 0.8% |

---

## 📁 Project Structure

```text
GymTEC/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── models/
│   │   ├── service/
│   │   ├── template/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## 📦 Main Components

### 🔐 Authentication

- `login-admin` — Administrator login
- `login-cliente` — Client login
- `crear-usuario` — User registration

### 🏢 Administration

- `panel-admin` — Administrative dashboard
- `manejar-sucursal` — Branch management
- `manejar-empleado` — Employee management
- `manejar-inventario` — Inventory management
- `manejar-producto` — Product management
- `ver-planilla` — Payroll visualization

### 🏋️ Gym Operations

- `agregar-servicio` — Add a gym service
- `crear-clase` — Create a gym class
- `asociar-tratamiento` — Associate treatments
- `asociar-inventario` — Associate inventory
- `asociar-producto` — Associate products
- `asignar-servicio` — Assign services
- `copy-sucursal` — Copy branch configuration

### 👤 Client Interface

- `panel-cliente` — Client dashboard
- Login and registration functionality
- Client-specific gym operations

---

## 🧱 Reusable Templates

The application includes reusable interface templates:

- `navbar`
- `sidebar`
- `footer`
- `form-sucursal`
- `form-empleado`
- `form-producto`
- `form-inventario`

These components help reuse forms and navigation across multiple administrative screens.

---

## 🌐 Application Routes

| Route | Component | Purpose |
|---|---|---|
| `/` | Home | Landing page |
| `/loginAdmin` | LoginAdmin | Administrator login |
| `/loginCliente` | LoginCliente | Client login |
| `/crearUsuario` | CrearUsuario | Account registration |
| `/panelAdmin` | PanelAdmin | Admin dashboard |
| `/panelCliente` | PanelCliente | Client dashboard |
| `/sucursales` | ManejarSucursal | Manage branches |
| `/empleados` | ManejarEmpleado | Manage employees |
| `/inventario` | ManejarInventario | Manage inventory |
| `/productos` | ManejarProducto | Manage products |
| `/plantilla` | VerPlanilla | View payroll |
| `/crearClase` | CrearClase | Create a class |
| `/agregarServicio` | AgregarServicio | Add a service |
| `/asociarTratamiento` | AsociarTratamiento | Associate treatments |
| `/asociarInventario` | AsociarInventario | Associate inventory |
| `/asociarProducto` | AsociarProducto | Associate products |
| `/asignarServicio` | AsignarServicio | Assign services |
| `/copySucursal` | CopySucursal | Copy a branch |

---

## 🗂️ Models

The project separates TypeScript models by domain:

- Branch
- Class
- Client
- Employee
- Equipment
- Inventory
- Login
- Payroll
- Product
- Service
- Signup
- Treatment
- Common API response types

This separation keeps API payloads and application data organized.

---

## 🔌 Services

Angular services handle communication with the REST API.

Service areas include:

- Classes
- Clients
- Employees
- Equipment
- Inventory
- Login
- Payroll
- Products
- Services
- Branches
- Treatments

Each service manages HTTP operations for its corresponding domain.

---

## ✅ Requirements

Before running GymTEC, install:

- Node.js
- npm
- Angular CLI 15
- A compatible web browser
- Access to the GymTEC REST API

Install Angular CLI if necessary:

```bash
npm install -g @angular/cli
```

---

## ⬇️ Installation

Clone the repository:

```bash
git clone https://github.com/Isaacoun100/GymTEC.git
cd GymTEC
```

Install project dependencies:

```bash
npm install
```

---

## ▶️ Running the Development Server

Start the Angular application:

```bash
npm start
```

Alternatively:

```bash
ng serve
```

Open:

```text
http://localhost:4200
```

The application will automatically reload when source files change.

---

## 🔨 Building the Project

Create a development build:

```bash
ng build
```

Create a production build:

```bash
npm run build
```

Build artifacts are stored in:

```text
dist/
```

---

## 🧪 Running Tests

Execute unit tests:

```bash
npm test
```

or:

```bash
ng test
```

Tests use:

- Jasmine
- Karma
- Chrome launcher
- TypeScript test configuration

---

## 🔗 API Configuration

The application communicates with a REST API through Angular HTTP services.

Review the following files before running the application:

```text
src/app/globals.ts
src/app/examples.ts
src/app/service/
src/app/service/*/proxy-*.service.ts
```

The API base URL may need to be updated according to the environment.

---

## 🗺️ Application Flow

```text
┌───────────────────────┐
│         User          │
│  Admin or Client      │
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│    Angular Interface  │
│  Login · Dashboard    │
│  Forms · Navigation   │
└──────────┬────────────┘
           │ HTTP / REST
           ▼
┌───────────────────────┐
│   GymTEC REST API     │
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│       Database        │
│ Branches · Employees  │
│ Inventory · Products  │
│ Classes · Services    │
└───────────────────────┘
```

---

## 🔮 Future Improvements

- 🔐 Implement JWT authentication
- 🛡️ Add route guards
- ⚠️ Improve form validation and error messages
- 🧾 Add API and response documentation
- 🧪 Increase unit test coverage
- 🌍 Externalize API configuration
- 📊 Add reports and statistics dashboards
- 📱 Improve responsive design
- 🔔 Add notifications
- ♿ Improve accessibility
- 🐳 Add Docker support
- ☁️ Add production deployment configuration
- 🧹 Remove unused components and assets
- 📝 Add screenshots and usage examples
- 🔄 Improve loading and caching behavior
- 📜 Add a license
- 🧭 Replace duplicate routes with a shared routing configuration

---

## ⚠️ Repository Notes

- The project is an academic Angular application.
- It expects an external REST API for full functionality.
- The root README is currently based on the Angular CLI template.
- Some generated test files and IDE settings are included.
- Deployment configuration for IIS is available through `src/web.config`.
- A license has not been specified.

---

## 📌 Repository Information

- **Repository:** [Isaacoun100/GymTEC](https://github.com/Isaacoun100/GymTEC)
- **Main language:** TypeScript
- **Framework:** Angular 15
- **Default branch:** `master`
- **License:** No license specified
- **Project type:** Web-based gym management system

---

## 👥 Authors

GymTEC was developed collaboratively by:

- [**Isaac Herrera Monge**](https://github.com/Isaacoun100)
- [**Naheem Johson**](https://github.com/NJohnsonCR)

Both contributors are listed in the repository's GitHub contributor history.

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch.
3. Implement the change.
4. Run the tests.
5. Commit your changes.
6. Push the branch.
7. Open a pull request.
