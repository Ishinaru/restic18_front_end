import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  @Input() veiculosSelecionados : any [] = [];
  @Output() veiculorRemovido = new EventEmitter<any>();

  removerVeiculo(index: number){
    this.veiculorRemovido.emit(index);
  }
}
