import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ofertas'
})
export class OfertasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
