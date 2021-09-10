import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';
import { IFilmeApi, IListaFilmes } from '../models/IFilmeApi.model';
import { DadosService } from '../services/dados.service';
import { FilmeService } from '../services/filme.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo: "Filmes";

  ListaVideos: IFilme[] = [
    {
      nome: 'Titans (2018)',
      lancamento: '15/04/2018',
      tempo: '1h 5m',
      classificacao: 80,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xKnUNWFsAOaKIviIYBLei02Bauu.jpg',
      genero: ['Action', 'Adventure'],
      pagina: '/mortal-kombat'
    },
    {
      nome: 'Expresso do Amanhã (2013)',
      lancamento: '30/07/2015',
      tempo: '2h 5m',
      classificacao: 90,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9rtJNrpDuxHJiRormrY5S3GXwEu.jpg',
      genero: ['Ação', 'Ficção Científica', 'Drama'],
      pagina: '/expresso'
    },
    {
      nome: 'A Saída (2021)',
      lancamento: '12/07/2021',
      tempo: '1h 20m',
      classificacao: 75,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yWRQOKmMncRcUrtzJaQ4rdm68dh.jpg',
      genero: ['Sci-Fi', 'Fantasy', 'Mistério']
    }
  ];

  listaFilmes: IListaFilmes;

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public route: Router) { }

    buscarFilmes(evento: any){
      console.log(evento.target.value);
      const busca = evento.target.value;
      if(busca && busca.trim() !== ''){
        this.filmeService.buscaFilmes(busca).subscribe(dados=>{
        console.log(dados);
        this.listaFilmes = dados;
        });
      }
   }

  exibirFilme(filme: IFilmeApi) {
    this.dadosService.guardaDados('filme', filme);
    this.route.navigateByUrl('/dados-filme')
  }

  async ExibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja escolher esse filme como favorito ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.apresentaToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentaToast() {
    const toast = await this.toastController.create({
      message: 'Filme Adicionado ao favoritos',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
