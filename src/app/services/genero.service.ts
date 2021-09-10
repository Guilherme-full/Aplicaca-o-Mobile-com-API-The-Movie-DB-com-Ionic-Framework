import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IListaGenero } from '../models/Genero.model';


@Injectable({
  providedIn: 'root'
})
export class GeneroService {
 
  //languag e region (Brasil)
  language = 'pt-BR';
  region = 'BR';

  //chave de api e link http
  private apiUrl = 'https://api.themoviedb.org/3/';
  private key = '?api_key=f34f093cbddf4daba67dfa4e52dca724';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscaGeneros(): Observable<IListaGenero>{
    const url = `${this.apiUrl}genre/movie/list${this.key}&language=${this.language}`;

    return this.http.get<IListaGenero>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    )
  }

   //Exibição de erro
   async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a Api',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }


}
