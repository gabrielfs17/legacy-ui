import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';


@Injectable({
  providedIn: 'root'
})

export class ClienteService {
    private baseURL = "http://localhost:8080/api/clientes";
    private urlEnderecos = "http://localhost:8080/api/enderecos";
    constructor(private http : HttpClient ) {}

    public findAll(): Observable<any> {
      return this.http.get<any>(this.baseURL);
    }

    public findAllEnderecos(): Observable<any> {
      return this.http.get<any>(this.urlEnderecos);
    }

    public getEnderecosById(id:number): Observable <Cliente>{
      return this.http.get<Cliente>(`${this.urlEnderecos}/${id}`);
    }
    
    createClientes(cliente: Cliente): Observable <Object>{
      return this.http.post(`${this.baseURL}`, cliente);
    }
    
    getClientesById(id:number): Observable <Cliente>{
      return this.http.get<Cliente>(`${this.baseURL}/${id}`);
    }
    
    updateClientesById(id:number,cliente: Cliente): Observable<Object>{
      return this.http.put(`${this.baseURL}/${id}`, cliente);
    }
    
    deleteClientesById(id:number):Observable <Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
    }
}
