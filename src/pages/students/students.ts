import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import Axios from "axios";
import { AttendancePage } from "../attendance/attendance";

@Component({
  selector: "page-students",
  templateUrl: "students.html"
})
export class StudentsPage {
  id = "";
  students = [
    {
      student: {
        firstname: "",
        lastname: "",
        studentid: "",
        guardianname: "",
        contactnumber: ""
      }
    }
  ];
  constructor(public navParams: NavParams, public navCtrl: NavController) {
    this.id = navParams.get("data");
  }

  ionViewDidLoad() {
    Axios.get(`http://192.168.1.5:5000/api/classsections/${this.id}`)
      .then(res => {
        this.students = res.data.students;
      })
      .catch(err => console.error(err));
  }

  viewAttendance(id) {
    this.navCtrl.push(AttendancePage, {
      data: {
        studentid: id,
        classid: this.id
      }
    });
  }
}
