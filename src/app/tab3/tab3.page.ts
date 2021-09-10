import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  listar(event: any){
    console.log(event);
  }

  async ExibirAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja escolher o corinthians ?',
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
      message: 'Corinthians Adicionado',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
