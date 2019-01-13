import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { LoginPage } from "../login/login";

@Component({
  selector: "page-logout",
  templateUrl: "logout.html"
})
export class LogoutPage {
  teacher = {};
  constructor(public navCtrl: NavController) {
    // this.navCtrl.push(LoginPage);
    location.reload();
  }
}
