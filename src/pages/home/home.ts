import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import Axios from "axios";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Toast } from "@ionic-native/toast";
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
  constructor(
    public navCtrl: NavController,
    public toast: Toast,
    public barcodeScanner: BarcodeScanner
  ) {}

  ionViewDidLoad() {
    Axios.get("http://192.168.0.113:5000/api/classsections/teachers/current")
      .then(res => {
        this.classsections = res.data;
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  viewStudents(id) {
    this.navCtrl.push(StudentsPage, {
      data: id
    });
  }

  scan(id) {
    this.barcodeScanner.scan().then(
      barcodeData => {
        if (barcodeData.text) {
          Axios.put(
            `http://192.168.0.113:5000/api/classsections/attendance/${id}`,
            {
              student: barcodeData.text
            }
          )
            .then(res => {
              this.toast
                .show(res.data.success, "5000", "center")
                .subscribe(toast => {
                  console.log(toast);
                });
            })
            .catch(err => {
              this.toast
                .show(err.response.data.error, "5000", "center")
                .subscribe(toast => {
                  console.log(toast);
                });
            });
        }
      },
      err => {
        this.toast.show(err, "5000", "center").subscribe(toast => {
          console.log(toast);
        });
      }
    );
    console.log(id);
  }
}
