import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraBuscaComponent } from './barra-busca/barra-busca.component';
import { ResultadoPesquisaComponent } from './resultado-pesquisa/resultado-pesquisa.component';
import { DestaquePipe } from './destaque.pipe';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarraBuscaComponent,
    ResultadoPesquisaComponent,
    DestaquePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
