import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FEB-P008';
  resultados: any[] = [];
  termo: string = '';

  constructor(private wikipediaService: WikipediaService){}

  pesquisar(termo:string){
    this.termo = termo;
    this.wikipediaService.pesquisa(termo).subscribe(data =>{
      this.resultados = data.query.search;
    })
  }
}
