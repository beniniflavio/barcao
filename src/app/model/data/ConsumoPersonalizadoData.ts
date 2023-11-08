import { IngredienteData } from "./IngredienteData";

export class ConsumoPersonalizadoData {
  chave:string ='' ;
  consumidor:string = '';
  ingredientes:IngredienteData[]=[];
  mensagens: {id: string, descricao: string, situacao: number, index: number}[]= [];
  total:number=0;
}
