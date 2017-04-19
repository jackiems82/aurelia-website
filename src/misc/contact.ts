import {autoinject} from 'aurelia-dependency-injection';
import {ValidationController, ValidationControllerFactory, ValidationRules} from 'aurelia-validation';
import {BootstrapFormRenderer} from '../resources/elements/bootstrap-form-renderer'

import { WebApi } from '../web-api';


@autoinject
export class Contact{
    public email: string = "";
    public message: string = "";
    public test;

    controller: ValidationController;

    constructor(private controllerFactory: ValidationControllerFactory,
                private bootstrapRenderer: BootstrapFormRenderer,
                private api: WebApi) {
      this.controller = controllerFactory.createForCurrentScope();
      this.controller.addRenderer(bootstrapRenderer);
      this.test = false;

    }

    submit(){
      this.controller.validate()
        .then(result => {
          if (result.valid)
            this.api.sendEmail(this.email, this.message);

            //if successful -> redirect to success page
        });
      
    }
}

ValidationRules
  .ensure((a: Contact) => a.email)
  .email()
  .required()

  .ensure((m: Contact) => m.message)
  .required()
  .on(Contact);