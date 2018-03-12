import { Component } from '@angular/core';
@Component({
	selector:'empleado',
	templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
	public Titulo = 'Plantilla Empleado'
	public Nombre = 'Christian Javier';
	public Apellido = 'Lopez Roque';
	public Edad = 24;
}