import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getintro'
})
export class GetintroPipe implements PipeTransform {

  transform(s: string): string {
    var intro = s.substring(0,200);
    return intro;
  }

}
