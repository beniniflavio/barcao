import { IngredienteData } from "./IngredienteData";

export class ConsumoPersonalizadoData {
  chave:string ='' ;
  consumidor:string = '';
  ingredientes:IngredienteData[]=[];
  total:number=0;
}
