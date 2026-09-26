import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidarAccesoService } from './service/validar-acceso';
import { AccesoRequest } from './interface/acceso-model';

@Component({
  selector: 'app-validar-acceso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './validar-acceso.html',
  styleUrl: './validar-acceso.scss'
})
export class ValidarAccesoComponent {
  private servicioAcceso = inject(ValidarAccesoService);

  public edad: number | null = 18;
  public yaPago: boolean = false;

  public cargando: boolean = false;
  public errorMensaje: string = '';
  public exitoMensaje: string = '';

  validarAcceso(): void {
    this.cargando = true;
    this.errorMensaje = '';
    this.exitoMensaje = '';

    const payload: AccesoRequest = {
      edad: this.edad ?? 0,
      yaPago: this.yaPago
    };

    this.servicioAcceso.consultarAcceso(payload).subscribe({
      next: (respuesta) => {

        if (respuesta.puedeEntrar) {
          this.exitoMensaje = respuesta.mensaje || 'Validado';
        } else {
          this.errorMensaje = respuesta.mensaje || 'Rechazado';
        }
        this.cargando = false;
      },
      error: (err) => {
        this.errorMensaje = 'Error conectando a la API de prueba.';
        this.cargando = false;
      }
    });
  }
}
