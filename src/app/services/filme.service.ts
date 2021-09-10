import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListaFilmes } from '../models/IFilmeApi.model';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  //idioma e regiao
  lingua = 'pt-BR';
  regiao = 'BR';

  //chave de api e link http
  private apiUrl = 'https://api.themoviedb.org/3/';
  private key = '?api_key=f34f093cbddf4daba67dfa4e52dca724';
  
  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscaFilmes(busca: string): Observable<IListaFilmes>{
    const url = `${this.apiUrl}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListaFilmes>(url).pipe(
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
