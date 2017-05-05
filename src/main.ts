import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import { TCustomAttribute } from 'aurelia-i18n';
import * as Backend from 'i18next-xhr-backend';
// if you use TypeScript and target ES5 you might need to import it like this instead
// import * as Backend from 'i18next-xhr-backend';
// otherwise add "allowSyntheticDefaultImports": true, to your tsconfig

//Configure Bluebird Promises.
(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-validation')
    .plugin('aurelia-i18n', (instance) => {
      let aliases = ['t', 'i18n'];
      
      TCustomAttribute.configureAliases(aliases);
      // register backend plugin
      instance.i18next.use(Backend);

      return instance.setup({
        backend: {                                  
          loadPath: './locales/{{lng}}/{{ns}}.json', 
        },
        lng : window.navigator.language,
        attributes : aliases,
        fallbackLng : 'en',
        debug : true
      });
    })

    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use
    .plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
