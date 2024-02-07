import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetornaObservableService {

  constructor() { }

  getValores():Observable<any>{
    
    const observable = this.getValores();
    observable.subscribe({
    next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log(value);
  }
  
});

}
