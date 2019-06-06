import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-contato-modal',
  templateUrl: './contato-modal.page.html',
  styleUrls: ['./contato-modal.page.scss'],
})
export class ContatoModalPage implements OnInit {

  constructor(public modalController: ModalController, private camera: Camera) { }

  ngOnInit() {
  }

  novo_contato = {
    "nome": "",
    "url": "",
    "id": ""
  }

  add() {
    this.modalController.dismiss(this.novo_contato)
  }
  
  take_picture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.novo_contato.url = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert(err);
     // Handle error
    });
  }
}
