import { Component } from '@angular/core';
import { ValidarAccesoComponent } from './validar-acceso/validar-acceso';
import { ListarComponent } from './listar/listar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ValidarAccesoComponent, ListarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'validar-acceso-angular';
}
