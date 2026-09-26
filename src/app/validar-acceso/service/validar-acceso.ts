import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AccesoRequest, AccesoResponse } from '../interface/acceso-model';

@Injectable({ providedIn: 'root' })
export class ValidarAccesoService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  consultarAcceso(datos: AccesoRequest): Observable<AccesoResponse> {
    return this.http.post<any>(this.apiUrl, datos).pipe(
      map((respuestaDeLaApi: any) => {
        const esValido = datos.edad >= 18 && datos.yaPago;
        return {
          puedeEntrar: esValido,
          mensaje: esValido ? `Acceso concedido. (Ticket API ID: ${respuestaDeLaApi.id})` : 'Acceso denegado. No cumple requisitos.'
        };
      })
    );
  }
}
