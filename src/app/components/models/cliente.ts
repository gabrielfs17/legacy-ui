import { Endereco } from "./endereco";

export class Cliente {
    id:number;
    pessoaFisjuridica:string
    nome:string;
    dataNascimento:Date;
    cpf:string;
    cnpj:string;
    rg:string;
    telefone1:string;
    telefone2:string;
    naturalidade:string;
    endereco:Endereco

}