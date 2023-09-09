import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatComponent } from './Components/chat/chat.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { PipeFechaPipe } from './pipe-fecha.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    UsuarioComponent,
    PipeFechaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
