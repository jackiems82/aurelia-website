import {autoinject} from 'aurelia-dependency-injection';
import {ValidationController, ValidationControllerFactory, ValidationRules} from 'aurelia-validation';
import {BootstrapFormRenderer} from './resources/elements/bootstrap-form-renderer'


@autoinject
export class Contact{
    public email: string = "";
    public message: string = "";

    controller: ValidationController;

    constructor(private controllerFactory: ValidationControllerFactory,
                private bootstrapRenderer: BootstrapFormRenderer) {
      this.controller = controllerFactory.createForCurrentScope();
      this.controller.addRenderer(bootstrapRenderer);

    }

    submit(){
      this.controller.validate()
        .then(result => {
          if (result.valid)
            alert("Sending " + this.message + " to " + this.email);
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