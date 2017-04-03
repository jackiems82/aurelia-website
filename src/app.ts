import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = '3Boards';

    config.map([
      { route: ['', 'home'],  title: 'Home',        name: 'home',         moduleId: 'home' },
      { route: 'details',     title: 'Details',     name: 'boardDetails', moduleId: 'board-details' },
      { route: 'contact',     title: 'Contact',     name: 'contact',      moduleId: 'contact' },
      { route: 'impressum',   title: 'Impressum',   name: 'impressum',    moduleId: 'impressum.html' },
      { route: 'disclaimer',  title: 'Disclaimer',  name: 'disclaimer',   moduleId: 'disclaimer.html' }
    ]);

    this.router = router;
  }
}