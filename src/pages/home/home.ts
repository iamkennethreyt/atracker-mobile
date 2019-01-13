import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import Axios from "axios";
import { StudentsPage } from "../students/students";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  classsections = [
    {
      sy: "",
      section: {
        name: "",
        yearlevel: ""
      }
    }
  ];
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    Axios.get("http://localhost:5000/api/classsections/teachers/current")
      .then(res => {
        this.classsections = res.data;
      })
      .catch(err => console.log(err));
  }

  viewStudents(id) {
    this.navCtrl.push(StudentsPage, {
      data: id
    });
  }
}
