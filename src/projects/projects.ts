import { WebApi, BoardDetails } from '../web-api';
import { autoinject} from 'aurelia-framework';
import {RouterConfiguration, Router} from 'aurelia-router';

@autoinject
export class Projects{
    router: Router;
    boardDetails: BoardDetails[];

    constructor(private api: WebApi){
    } 

    activate(){
         return this.api.getImageDetails().then(result => {
            this.boardDetails = result;
            console.log("RESULT: ", result);
        });
    }
 

    // configureRouter(config, router) {
    //     this.router = router;

    //     config.map([
    //       { route: ['','0'], moduleId: './board-details', 
    //         title: 'First', nav: true, name: '0'},
    //       { route: '1', moduleId: './board-details', 
    //         title: 'Second', nav: true, href: '#/projects/1', name: '1'}
    //     ]);
	  // } 
}