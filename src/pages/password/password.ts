import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";
import Axios from "axios";

@Component({
  selector: "page-password",
  templateUrl: "password.html"
})
export class PasswordPage {
  password = "";
  password2 = "";
  password3 = "";
  user = {
    _id: ""
  };

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}
  ionViewDidLoad() {
    Axios.get("http://localhost:5000/api/teachers/current")
      .then(res => {
        this.user = res.data;
      })
      .catch(err => console.log(err));
  }

  changesettings() {
    Axios.put(`http://localhost:5000/api/teachers/accountsettings/password`, {
      password: this.password,
      password2: this.password2,
      password3: this.password3
    })
      .then(() => {
        const alert = this.alertCtrl.create({
          title: "Success",
          subTitle: "You successfully modified your account",
          buttons: ["OK"]
        });
        alert.present();
      })
      .catch(err => {
        const { password, password2, password3 } = err.response.data;

        var message = "";
        if (password) {
          message = password;
        }

        if (password2) {
          message = password2;
        }

        if (password3) {
          message = password3;
        }

        let alert = this.alertCtrl.create({
          title: "Invalid Credential",
          message: message,
          buttons: ["Ok"]
        });
        alert.present();
      });
  }

  // passwordSettings(){
  //   this.navCtrl.push(StudentsPage, {
  //     data: id
  //   });
  // }
}
