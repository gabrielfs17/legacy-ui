import { BairroModel } from '../../core/model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export class BairroFiltro {
  nome!: string;
  pagina: number = 0;
  itensPorPagina: number = 10;
}

@Injectable({
  providedIn: 'root'
})
export class BairroService {

  bairroUrl = 'http://localhost:8080/bairros';

  //bairroListarUrl = 'http://localhost:8080/bairros/listar';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    let params = new HttpParams()
                    .set('page', filtro.pagina)
                    .set('size', filtro.itensPorPagina);

    if(filtro.nome) {
      params = params.set('nome', filtro.nome);
    }
      
    return this.http.get(`${this.bairroUrl}`, { params })
      .toPromise()
      .then((response: any) => {
        const bairro = response['content'];
            
        const resultado = {
          bairro,
          total: response['totalElements']
        };

        return resultado;
      });
  }

  adicionar(bairroModel: BairroModel): Promise<void|BairroModel> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');         //Necessário o media type para salvar

    return this.http.post<BairroModel>(this.bairroUrl, bairroModel, { headers })
      .toPromise();
  }

    //Usar para pesquisa simples
  /*consultar(): Promise<any> {
    return this.http.get(`${this.bairroListarUrl}`)
              .toPromise();
  }*/

  excluir(id: number): Promise<void> {   
    return this.http.delete<void>(`${this.bairroUrl}/${id}`)
      .toPromise();
  }

  atualizar(bairroModel: BairroModel): Promise<void|BairroModel> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');  

    return this.http.put<BairroModel>(`${this.bairroUrl}/${bairroModel.id}`, bairroModel, { headers })
      .toPromise();
  }

  buscarPorId(id: number): Promise<BairroModel> {
    return this.http.get(`${this.bairroUrl}/${id}`, )
    .toPromise()
    .then((response:any) => {
      return response;
    });
  } 
}
