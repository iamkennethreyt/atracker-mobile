import { Component } from "@angular/core";

import { HomePage } from "../home/home";
import { SettingsPage } from "../settings/settings";
import { AlertController, NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { LogoutPage } from "../logout/logout";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = SettingsPage;
  tab3Root = LogoutPage;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController
  ) {}
  logout() {
    const confirm = this.alertCtrl.create({
      title: "Logout account",
      message: "Do you want to logout account",
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Ok",
          handler: () => {
            this.navCtrl.push(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
