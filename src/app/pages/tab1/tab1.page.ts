import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor( public deseosService: DeseosService,
               private router: Router,
               private alertCtrl: AlertController ) {
  }

  async agregarLista() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Crear',
          handler: ( data ) => {
            if (data.titulo.length === 0) {
              return;
            }
            // Crear lista
            const listaId = this.deseosService.crearLista(data.titulo);
            this.router.navigate([`/tabs/tab1/agregar/${listaId}`]);
          }
        }
      ]
    });

    alert.present();
  }
}
