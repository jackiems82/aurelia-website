import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = 'DeinBRETT';
    
    config.map([
      { route: ['', 'home'],  title: 'Home',        name: 'home',         moduleId: 'pages/home.html' },
      { route: 'projects/:psParams?',
        title: 'Projects',
        name: 'projects',
        moduleId: 'pages/projects',
        href: '#/projects',
        nav:true,
        settings: { isMainNav: true, t:'navigation.projects' } 
      },
      { route: 'about/:psParams?',
        title: 'About',
        name: 'about',
        moduleId: 'pages/about',
        href: '#/about',
        nav:true,
        settings: { isMainNav: true, t:'navigation.about' } 
      },
      // { route: 'contact',     title: 'Contact',     name: 'contact',      moduleId: 'pages/contact' },
      { route: 'impressum',   title: 'Impressum',   name: 'impressum',    moduleId: 'pages/impressum.html', nav:true, settings: {t:'navigation.impressum'} },
      { route: 'data-protection',   title: 'Data protection',   name: 'data-protection',    moduleId: 'pages/data-protection.html', nav:true, settings: {t:'navigation.data-protection'} },
      // { route: 'disclaimer',  title: 'Disclaimer',  name: 'disclaimer',   moduleId: 'pages/disclaimer.html', nav:true, settings: {t:'navigation.disclaimer'} }
    ]);

    this.router = router;
  }
}