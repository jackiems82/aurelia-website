import { WebApi, BoardDetails } from '../web-api';
import { autoinject } from 'aurelia-framework';
import { activationStrategy } from 'aurelia-router';

@autoinject
export class Sub{
    boardDetails: BoardDetails[];
    constructor(private api: WebApi) {

    }
    
    activate(){
         return this.api.getImageDetails().then(result => {
            this.boardDetails = result;
            console.log("RESULT: ", result);
        });
    }

    // Router calls this to figure out the lifecycle.
    // This is because the    point to the same module.
    determineActivationStrategy() {
		return activationStrategy.replace;
	}
}