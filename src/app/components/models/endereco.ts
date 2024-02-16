import { Cidade } from "./cidade";
import { Estado } from "./estado";

export class Endereco{
     id?:number;
     cep?:string;
     bairro?:string;
     rua?:string;
     numero?:number;
     proximidades?:string;
     estado?:Estado
     cidade?:Cidade
    
    

}