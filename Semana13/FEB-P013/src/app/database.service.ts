import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Cliente } from '../app/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements OnInit{
  loadedClientes:Cliente[]=[];

  constructor(private http: HttpClient) {}

   ngOnInit():void{}

   addCliente(clienteData:{ NomeCliente:string,
                            CpfCliente:string,
                            TelefoneContatoCliente:string}){
                              this.http.post(
                                'https://atendimento-petshop.firebaseapp.com/posts.json', clienteData
                              ).subscribe(responseData=>{
                                console.log(responseData);
                              });
                            }


    getClientes(){
      return this.http.get<{[key:string]:Cliente}>('https://atendimento-petshop.firebaseapp.com/posts.json',
        {params:new HttpParams().set('print', 'pretty')}).pipe(
          map((responseData)=>{
            const postArray:Cliente[]=[];
            for(const key in responseData){
              if((responseData).hasOwnProperty(key)){
                postArray.push({...(responseData as any)[key],id:key });
              }
            }
            return postArray;
          }
        ));
    }
}


