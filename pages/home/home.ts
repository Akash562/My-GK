import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MypresidentComponent } from "../Data/mypresident/mypresident.component";
import { MystatesComponent } from "../Data/states/mystates.component";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ["home.scss"]
})
export class HomePage {
  constructor(private navctrl: NavController) {}

  getstates() {
    this.navctrl.push(MystatesComponent, {});
  }

  getpresident() {
    this.navctrl.push(MypresidentComponent, {});
  }
}
