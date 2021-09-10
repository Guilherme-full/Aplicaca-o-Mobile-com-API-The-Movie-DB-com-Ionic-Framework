import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IArray } from '../models/IFilme.model';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  lista: any[];

  constructor(public alertController: AlertController, public toastController: ToastController) { 
    this.lista = [
      {
        nome: 'Batman',
        isChecked: true,
        color: "primary"
      },
      {
        nome: 'Robin',
        isChecked: false,
        color: "dark"
      },
      {
        nome: 'Noturno',
        isChecked: false,
        color: "dark"
      }
    ]
  }

  

  listar(event: any){
    console.log(event.detail.value);
  }

  capturarSituacao(){
    this.lista.map((item:any) =>{
      if(item.isChecked){
        console.log(`O checked: ${item.nome} está marcado`);
      }
    });
  }

  async ExibirAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja escolher esse desenho como favorito ?',
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
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Desenho Adicionado ao favoritos',
      duration: 2000,
      color: 'success'
    });
    toast.present();

    
  }



}
