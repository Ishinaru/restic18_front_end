import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  private apiUrl = 'https://pt.wikipedia.org/w/api.php?';

  constructor(private http: HttpClient) { }

  pesquisa(termo:string){
    const params = new HttpParams()
    .set('action', 'query')
    .set('format', 'json')
    .set('list', 'search')
    .set('utf8', '1')
    .set('srsearch', termo)
    .set('origin', '*');

    return this.http.get<any>(this.apiUrl, {params});
  }

}
