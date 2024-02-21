import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formaadicionar',
  templateUrl: './formaadicionar.component.html',
  styleUrl: './formaadicionar.component.css'
})
export class FormaadicionarComponent {
  modelo:string = "";
  marca:string = "";
  ano:number = 0;
  valor:number = 0;
  cor:string = "";
  foto:string= "";

  servicoForms :FormGroup;
  constructor(){this.servicoForms = new FormGroup({
    modelo: new FormControl(''),
    marca: new FormControl(''),
    ano: new FormControl(''),
    valor: new FormControl(''),
    cor: new FormControl(''),
    foto: new FormControl('')
  })};

  onSubmit(){
    onclick;
  }

}