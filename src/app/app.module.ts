import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LoginPage } from "../pages/login/login";
import { StudentsPage } from "../pages/students/students";
import { AttendancePage } from "../pages/attendance/attendance";
import { SettingsPage } from "../pages/settings/settings";
import { PasswordPage } from "../pages/password/password";
import { LogoutPage } from "../pages/logout/logout";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Toast } from "@ionic-native/toast";

@NgModule({
  declarations: [
    LoginPage,
    MyApp,
    SettingsPage,
    HomePage,
    TabsPage,
    StudentsPage,
    AttendancePage,
    PasswordPage,
    LogoutPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    MyApp,
    PasswordPage,
    SettingsPage,
    HomePage,
    LogoutPage,
    TabsPage,
    StudentsPage,
    AttendancePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Toast,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
