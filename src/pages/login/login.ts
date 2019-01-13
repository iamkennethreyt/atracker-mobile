import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";
import { TabsPage } from "../tabs/tabs";
import Axios from "axios";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  teacher = {};
  sample = "";
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {
    Axios.get("http://192.168.1.5:5000/api/teachers/test/sample")
      .then(res => {
        this.sample = res.data.hello;
      })
      .catch(() => {
        this.sample = "not connected";
      });
  }

  loginForm() {
    Axios.post("http://192.168.1.5:5000/api/teachers/login", this.teacher)
      .then(res => {
        Axios.defaults.headers.common["Authorization"] = res.data.token;
        this.navCtrl.push(TabsPage);
      })
      .catch(err => {
        const { password, teacherid } = err.response.data;

        if (password) {
          var message = password;
        }

        if (teacherid) {
          var message = teacherid;
        }

        let alert = this.alertCtrl.create({
          title: "Invalid Credential",
          message: message,
          buttons: ["Ok"]
        });
        alert.present();
      });
  }
}
