import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

   listaUsuario1: any[] =[]
   listaUsuario2: any[] = []
   entrada: string =""
 

  agarrarEvento(valor: any, usuario: string){

    if(usuario === 'usuario1'){
      this.entrada= valor
      const objeto = {fecha : new Date(), msj: valor }
      this.listaUsuario1.push(objeto);   
    } else {
      this.entrada= valor
      const objeto = {fecha : new Date(), msj: valor }
      this.listaUsuario2.push(objeto);   
    }
 
  }
}
