import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CriarPensamentoComponent } from './pensamentos/criar-pensamentos/criar-pensamento.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [			
    AppComponent,
      CabecalhoComponent,
      RodapeComponent,
      CriarPensamentoComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
