import { Component } from '@angular/core';
import { RetornaObservableService } from '../retorna-observable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private valService:RetornaObservableService){}
  valores:any[]=[];
  getValores(){
    this.valService.getValores().subscribe(valor => {
      this.valores.push(valor);
    })
  }

}
