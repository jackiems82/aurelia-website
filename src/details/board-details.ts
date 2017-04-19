import { WebApi } from '../web-api';
import { autoinject} from 'aurelia-framework';

@autoinject
export class BoardDetails{

    images: string[];

    constructor(private api: WebApi){
    } 

    activate(params){
         return this.api.getImageDetails(params.id).then(result => {
            this.images = result;
            console.log("RESULT: ", result);
        });
    }
}