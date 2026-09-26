import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListarModel } from '../interface/listar-model';

@Injectable({ providedIn: 'root' })
export class ListarService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  obtenerLista(): Observable<ListarModel[]> {
    return this.http.get<ListarModel[]>(this.apiUrl);
  }
}
