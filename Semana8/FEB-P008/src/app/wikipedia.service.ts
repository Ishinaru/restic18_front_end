import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  private apiUrl = 'https://pt.wikipedia.org/w/api.php?';

  constructor(private http: HttpClient) { }

  pesquisa(termo:string): Observable<any>{
    const params = new HttpParams({
      fromObject:{
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: termo,
        origin: '*'
      }
    });
    return this.http.get(this.apiUrl,{params});
  }

}
