import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  texto : string =""
  @Output() emisor = new EventEmitter();


  capturarTexto(valor: any){
    this.texto= valor.target.value
  }

  Enviar(){
    this.emisor.emit(this.texto)
  }


}
