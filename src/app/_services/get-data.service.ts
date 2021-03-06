import { Injectable } from '@angular/core';
import { GrauModel, HistoricoModel, ProdutoModel, SocioModel } from '../_models/data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {}

  getSocios() {
    return this.http.get<SocioModel[]>('http://localhost:3000/socios');
  }
  getGraus() {
    return this.http.get<GrauModel[]>('http://localhost:3000/graus');
  }
  getHistorico() {
    return this.http.get<HistoricoModel[]>('http://localhost:3000/historico');
  }
  getProdutos() {
    return this.http.get<ProdutoModel[]>('http://localhost:3000/produtos');
  }

}
