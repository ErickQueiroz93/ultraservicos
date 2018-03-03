import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PagarProvider } from '../../providers/pagar/pagar';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-pagar',
  templateUrl: 'pagar.html',
})
export class PagarPage {

  model: PagarOS;

  public id;

  public imageURI:any;
  public imageFileName:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private transfer: FileTransfer, private camera: Camera, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public pagarProvider: PagarProvider) {
    this.id = navParams.get("id");
    //this.navParams.get("id");

    this.model = new PagarOS();
    this.model.valor = '';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagarPage');
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
  
    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "multipart/form-data",
      headers: {}
    }
  
    fileTransfer.upload(this.imageURI, 'http://ultraconsultas.com.br/apiUltraServicos/uploadImage.php', options)
      .then((data) => {
      this.imageFileName = "http://ultraconsultas.com.br/comprovantesParceiros/ionicfile.jpg"
      loader.dismiss();
      this.presentToast("Imagem carregada com sucesso!");
    }, (err) => {
      alert(err);
      loader.dismiss();
      this.presentToast(err);
    });
  }

  pagarOrdemServicoAgora(){
    this.pagarProvider.pagarOrdemServico(this.model.valor, this.id)
      .then((result: any) => {
        this.toastCtrl.create({ message: 'OS paga com sucesso!.', position: 'botton', duration: 5000 }).present();
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error: any) => {
        this.toastCtrl.create({ message: 'Erro ao pagar OS.', position: 'botton', duration: 5000 }).present();
      });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}

export class PagarOS {
  valor: string;
}