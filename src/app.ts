import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = '3Boards';

    config.map([
      { route: ['', 'home'],  title: 'Home',        name: 'home',         moduleId: 'home' },
      { route: 'details/:id',     title: 'The boards',  name: 'boardDetails', moduleId: 'details/board-details' },
      { route: 'contact',     title: 'Contact',     name: 'contact',      moduleId: 'misc/contact', nav:true },
      { route: 'impressum',   title: 'Impressum',   name: 'impressum',    moduleId: 'misc/impressum.html', nav:true },
      { route: 'disclaimer',  title: 'Disclaimer',  name: 'disclaimer',   moduleId: 'misc/disclaimer.html', nav:true }
    ]);

    this.router = router;
  }
}