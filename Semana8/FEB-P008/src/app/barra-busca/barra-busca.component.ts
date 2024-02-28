import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-barra-busca',
  templateUrl: './barra-busca.component.html',
  styleUrl: './barra-busca.component.css'
})
export class BarraBuscaComponent {
  @Output() pesquisaFeita = new EventEmitter<any>();
  @Input() termo: any = [];

  pesquisar(){
    this.pesquisaFeita.emit(this.termo);
  }
}
