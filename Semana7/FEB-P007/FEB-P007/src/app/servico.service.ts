import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private readonly veiculosJson = './assets/veiculos.json';
  constructor(private http: HttpClient) {}

  getVeiculos():Observable<any>{
    return this.http.get<any>(this.veiculosJson);
  }
}
