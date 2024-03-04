import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroAtendimentoComponent } from './cadastro-atendimento/cadastro-atendimento.component';
import { ListagemAtendimentosComponent } from './listagem-atendimentos/listagem-atendimentos.component';
import { EdicaoAtendimentoComponent } from './edicao-atendimento/edicao-atendimento.component';
import { DetalhesAtendimentoComponent } from './detalhes-atendimento/detalhes-atendimento.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroAtendimentoComponent,
    ListagemAtendimentosComponent,
    EdicaoAtendimentoComponent,
    DetalhesAtendimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
