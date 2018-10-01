import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {title: 'Home',url: '/home',icon: 'home'},
    {title: 'Klanten', url: '/customers', icon: 'contacts'},
    {title: 'Afspraken', url: '/appointments', icon: 'calendar'},
    {title: 'Instellingen', url: '/settings', icon: 'settings'},
    {title: 'Log-uit', url: '/log-out', icon: 'log-out'}
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
