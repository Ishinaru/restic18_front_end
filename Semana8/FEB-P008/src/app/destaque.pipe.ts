import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'destaque'
})
export class DestaquePipe implements PipeTransform {

  transform(text: string, term: string): string {
    if(!term) return text;
    const padrao = new RegExp(term, 'gi');
    return text.replace(padrao, x => `<b>${x}</b>`);
  }

}
