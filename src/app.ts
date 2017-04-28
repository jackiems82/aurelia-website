import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;
  router2: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = '3Boards';

    config.map([
      { route: ['', 'home'],  title: 'Home',        name: 'home',         moduleId: 'pages/home.html' },
      { route: 'projects',    title: 'Projects',    name: 'projects',     moduleId: 'pages/projects', nav:true, settings: {isMainNav: true} },
      { route: 'about',       title: 'About',       name: 'about',        moduleId: 'pages/about.html', nav:true, settings: {isMainNav: true} },
      // { route: 'contact',     title: 'Contact',     name: 'contact',      moduleId: 'pages/contact' },
      { route: 'impressum',   title: 'Impressum',   name: 'impressum',    moduleId: 'pages/impressum.html', nav:true },
      { route: 'disclaimer',  title: 'Disclaimer',  name: 'disclaimer',   moduleId: 'pages/disclaimer.html', nav:true }
    ]);

    this.router = router;
  }
}