import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarService } from './service/listar';
import { ListarModel } from './interface/listar-model';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar.html',
  styleUrl: './listar.scss'
})
export class ListarComponent implements OnInit {
  private listarService = inject(ListarService);

  public listaDatos: ListarModel[] = [];
  public cargando: boolean = true;
  public errorMensaje: string = '';

  ngOnInit(): void {
    this.listarService.obtenerLista().subscribe({
      next: (datos) => {
        this.listaDatos = datos;
        this.cargando = false;
      },
      error: (err) => {
        this.errorMensaje = 'Error al cargar la lista de datos.';
        this.cargando = false;
      }
    });
  }
}
