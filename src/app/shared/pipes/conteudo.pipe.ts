import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'lido'
  })
  export class LidoPipe implements PipeTransform {
  
    transform(value: string) {
      if (!value) {
        return value;
      }
     
      let result: string = '';

      switch (value) {
        case "vídeo":
        result = 'Assisti o vídeo'
          break;
  
          case "artigo":
          result = 'Li o artigo'
          break;
  
          case "apostila" :
          result = 'Li a apostila'
          break;
  
          case "livro":
          result = 'Li o livro'
          break;
      
        default:
          result = 'Vi o conteúdo'
          break;
      }
      return result;
    }
  }