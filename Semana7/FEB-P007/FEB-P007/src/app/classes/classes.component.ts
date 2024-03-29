import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  @Input() categorias:any[] = [];
  @Output() categoriaSelecionada = new EventEmitter<string>();

  selecionarCategoria(categoria:string){
    this.categoriaSelecionada.emit(categoria);
  }

}
