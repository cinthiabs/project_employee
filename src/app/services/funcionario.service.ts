import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import {Response} from '../models/response'
import {Funcionario} from '../models/funcionarios'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiUrl = `${environment.ApiUrl}/Employee`

  constructor(private http: HttpClient) { }

  GetFuncionarios(): Observable<Response<Funcionario[]>>{
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }
  CreateFuncionario(funcionario: Funcionario): Observable<Response<Funcionario[]>>{
    return this.http.post<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }
  GetFuncionario(id : number): Observable<Response<Funcionario>>{
    return this.http.get<Response<Funcionario>>(`${this.apiUrl}/${id}`);
  }
  EditFuncionario(funcionario: Funcionario): Observable<Response<Funcionario[]>>{
    return this.http.put<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }
  InativaFuncionario(funcionarioId: Number): Observable<Response<Funcionario>> {
    return this.http.put<Response<Funcionario>>(`api/Funcionario/inativaFuncionario/${funcionarioId}`, funcionarioId);
  }
}
