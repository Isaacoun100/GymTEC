import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginClienteComponent } from './components/login-cliente/login-cliente.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { ManejarSucursalComponent } from './components/manejar-sucursal/manejar-sucursal.component';
import { EditarSucursalComponent } from './components/editar-sucursal/editar-sucursal.component';
import { AgregarSucursalComponent } from './components/agregar-sucursal/agregar-sucursal.component';
import { AgregarServicioComponent } from './components/agregar-servicio/agregar-servicio.component';
import { VerPlanillaComponent } from './components/ver-planilla/ver-planilla.component';
import { ManejarEmpleadoComponent } from './components/manejar-empleado/manejar-empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { ManejarInventarioComponent } from './components/manejar-inventario/manejar-inventario.component';
import { EditarInventarioComponent } from './components/editar-inventario/editar-inventario.component';
import { ManejarProductoComponent } from './components/manejar-producto/manejar-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { AsociarTratamientoComponent } from './components/asociar-tratamiento/asociar-tratamiento.component';
import { AsociarInventarioComponent } from './components/asociar-inventario/asociar-inventario.component';
import { CrearClaseComponent } from './components/crear-clase/crear-clase.component';
import { AsociarProductoComponent } from './components/asociar-producto/asociar-producto.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { FormSucursalComponent } from './template/form-sucursal/form-sucursal.component';
import { FormEmpleadoComponent } from './template/form-empleado/form-empleado.component';
import { FormProductoComponent } from './template/form-producto/form-producto.component';
import { AgregarInventarioComponent } from './components/agregar-inventario/agregar-inventario.component';
import { AsignarServicioComponent } from './components/asignar-servicio/asignar-servicio.component';
import { FormInventarioComponent } from './template/form-inventario/form-inventario.component';
import { PanelClienteComponent } from './components/panel-cliente/panel-cliente.component';
import { CopySucursalComponent } from './components/copy-sucursal/copy-sucursal.component';


@NgModule({
  declarations: [AppComponent, FooterComponent, NavbarComponent,HomeComponent, 
    LoginAdminComponent, LoginClienteComponent, CrearUsuarioComponent, PanelAdminComponent,
    ManejarSucursalComponent, EditarSucursalComponent, AgregarSucursalComponent, AgregarServicioComponent, 
    VerPlanillaComponent, ManejarEmpleadoComponent, EditarEmpleadoComponent, AgregarEmpleadoComponent, 
    ManejarInventarioComponent, EditarInventarioComponent, ManejarProductoComponent, EditarProductoComponent, 
    AgregarProductoComponent, AsociarTratamientoComponent, AsociarInventarioComponent, CrearClaseComponent, 
    AsociarProductoComponent, SidebarComponent, FormSucursalComponent, FormEmpleadoComponent, 
    FormProductoComponent, AgregarInventarioComponent,  AsignarServicioComponent, FormInventarioComponent, 
    PanelClienteComponent, CopySucursalComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      
      {
        path:'', 
        component:HomeComponent
      },
      {
        path:'loginAdmin', 
        component:LoginAdminComponent
      },
      {
        path:'loginCliente',
        component:LoginClienteComponent
      },
      {
        path:'panelAdmin',
        component:PanelAdminComponent
      },
      {
        path:'sucursales', 
        component:ManejarSucursalComponent
      },
      {
        path:'agregarServicio', 
        component:AgregarServicioComponent
      },
      {
        path:'plantilla', 
        component:VerPlanillaComponent
      },
      {
        path:'empleados', 
        component:ManejarEmpleadoComponent
      },
      {
        path:'inventario', 
        component:ManejarInventarioComponent
      },
      {
        path:'productos', 
        component:ManejarProductoComponent
      },
      {
        path:'asociarTratamiento', 
        component:AsociarTratamientoComponent
      },
      {
        path:'asociarInventario', 
        component:AsociarInventarioComponent
      },
      {
        path:'crearClase', 
        component:CrearClaseComponent
      },
      {
        path:'asociarProducto', 
        component:AsociarProductoComponent
      },
      {
        path:'sucursales/:sucursalNombre', 
        component:EditarSucursalComponent
      },
      {
        path:'agregarSucursal', 
        component:AgregarSucursalComponent
      },
      {
        path:'empleados/:empleadoCedula', 
        component:EditarEmpleadoComponent
      },
      {
        path:'agregarEmpleado', 
        component:AgregarEmpleadoComponent
      },
      {
        path:'asignarServicio', 
        component: AsignarServicioComponent
      },
      {
        path:'inventario/:inventarioCodigo', 
        component:EditarInventarioComponent
      },
      {
        path:'agregarInventario', 
        component:AgregarInventarioComponent
      },
      {
        path:'productos/:productoNombre', 
        component:EditarProductoComponent
      },
      {
        path:'agregarProducto', 
        component:AgregarProductoComponent
      },
      {
        path:'crearUsuario', 
        component:CrearUsuarioComponent
      },
      {
        path:'panelCliente', 
        component:PanelClienteComponent
      },
      {
        path:'copySucursal', 
        component:CopySucursalComponent
      }

    ])
],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
