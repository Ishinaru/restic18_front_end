import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.component.html',
  styleUrl: './resultado-pesquisa.component.css'
})
export class ResultadoPesquisaComponent {
  @Input() resultadosPesquisa:any[] = [];
  @Input() termo: string = '';
}
