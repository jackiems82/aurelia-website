import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = '3Boards';

    config.map([
      { route: ['', 'home'],  title: 'Home',        name: 'home',         moduleId: 'pages/home.html' },
      { route: 'projects',    title: 'Projects',    name: 'projects',     moduleId: 'pages/projects', nav:true },
      { route: 'about',       title: 'About',       name: 'about',        moduleId: 'pages/about.html', nav:true },
      { route: 'contact',     title: 'Contact',     name: 'contact',      moduleId: 'misc/contact' },
      { route: 'impressum',   title: 'Impressum',   name: 'impressum',    moduleId: 'misc/impressum.html', nav:true },
      { route: 'disclaimer',  title: 'Disclaimer',  name: 'disclaimer',   moduleId: 'misc/disclaimer.html', nav:true }
    ]);

    this.router = router;
  }
}