import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { MystatesComponent } from "../pages/Data/states/mystates.component";
import { MypresidentComponent } from "../pages/Data/mypresident/mypresident.component";
import { MysymbolsComponent } from "../pages/Data/mysymbols/mysymbols.component";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MystatesComponent,
    MypresidentComponent,
    MysymbolsComponent
  ],
  exports: [MystatesComponent, MypresidentComponent, MysymbolsComponent],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MystatesComponent,
    MypresidentComponent,
    MysymbolsComponent
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
