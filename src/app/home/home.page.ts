import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContatoModalPage } from '../contato-modal/contato-modal.page';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contatos: any;

  constructor(public modalController: ModalController, private storage: Storage,
    private router: Router, private http: HttpClient, public loadingController: LoadingController) {
    this.contatos = [];

    // Loading
    this.loadingController.create({
      message: 'Hellooo',
    }).then((loader) => {
      loader.present();
      this.http.get('http://5d0ab6c4c5896f0014e86dcb.mockapi.io/contact').subscribe(
        (data) => {
          this.contatos = data;
          loader.dismiss;
        }
      )
    });
  }

  add(contato) {
    this.loadingController.create({
      message: 'Ok'
    }).then((loader) => {
      loader.present();
      this.http.post('http://5d0ab6c4c5896f0014e86dcb.mockapi.io/contact/', contato).subscribe(
        (data) => {
          this.contatos.push(data)
        }
      )
    });
  }

  remove(contato) {
    this.loadingController.create({
      message: 'Ok'
    }).then((loader) => {
      loader.present();
      this.http.delete('http://5d0ab6c4c5896f0014e86dcb.mockapi.io/contact/' + contato.id).subscribe(
        (data) => {
          var i = this.contatos.indexOf(contato);
          this.contatos.splice(i, 1);
        }
      )
    });
  }

  async modal() {
    const modal = await this.modalController.create({
      component: ContatoModalPage
    });
    await modal.present();

    modal.onDidDismiss().then((contato) => {
      this.add(contato.data)
    })
  }

  ir_info(nome) {
    this.router.navigateByUrl('/info-detail/' + nome);
  }



}
