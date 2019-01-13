import { Component } from "@angular/core";
import { NavParams, AlertController } from "ionic-angular";
import Axios from "axios";

@Component({
  selector: "page-attendance",
  templateUrl: "attendance.html"
})
export class AttendancePage {
  ids = {
    classid: "",
    studentid: ""
  };
  student = {
    firstname: "",
    lastname: "",
    studentid: "",
    contactnumber: "",
    guardianname: ""
  };

  attendances = [
    {
      date: ""
    }
  ];
  constructor(public navParams: NavParams, public alertCtrl: AlertController) {
    this.ids = navParams.get("data");
  }

  sendsms() {
    Axios.get(
      `http://192.168.1.5:5000/api/classsections/sendsms/${this.ids.studentid}`
    )
      .then(res => {
        let alert = this.alertCtrl.create({
          title: "Invalid Credential",
          message: res.data.success,
          buttons: ["Ok"]
        });
        alert.present();
      })
      .catch(err => {
        let alert = this.alertCtrl.create({
          title: "Invalid Credential",
          message: err.response.data.error,
          buttons: ["Ok"]
        });
        alert.present();
      });
  }

  ionViewDidLoad() {
    Axios.get(
      `http://192.168.1.5:5000/api/classsections/attendance/${
        this.ids.classid
      }/${this.ids.studentid}`
    )
      .then(res => {
        this.student = res.data.student;
        this.attendances = res.data.attendances;
      })
      .catch(err => console.error(err));
  }
}
