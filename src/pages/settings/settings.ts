import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";
import Axios from "axios";
import { PasswordPage } from "../password/password";

@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  user = {
    _id: "",
    middlename: "",
    lastname: "",
    firstname: ""
  };
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}
  ionViewDidLoad() {
    Axios.get("http://172.20.83.30:5000/api/teachers/current")
      .then(res => {
        this.user = res.data;
      })
      .catch(err => console.log(err));
  }

  changesettings() {
    Axios.put(`http://172.20.83.30:5000/api/teachers/${this.user._id}`, {
      middlename: this.user.middlename,
      firstname: this.user.firstname,
      lastname: this.user.lastname
    })
      .then(() => {
        const alert = this.alertCtrl.create({
          title: "Success",
          subTitle: "You successfully modified your account",
          buttons: ["OK"]
        });
        alert.present();
      })
      .catch(err => console.log(err));
  }

  passwordSettings() {
    this.navCtrl.push(PasswordPage);
  }
}
