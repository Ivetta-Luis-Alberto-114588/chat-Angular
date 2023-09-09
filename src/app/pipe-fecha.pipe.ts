import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFecha'
})
export class PipeFechaPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    const fechaToTransform = value.getHours().toString() 
                            + ':' 
                            + value.getMinutes().toString() 
                            + ':' 
                            + value.getSeconds().toString()
    
    return fechaToTransform;
  }

}
