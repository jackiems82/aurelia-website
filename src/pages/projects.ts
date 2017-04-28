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
        if (this.api.boardDetails)
            return this.boardDetails = this.api.boardDetails;
        else{
            return this.api.getImageDetails().then(result => {
                this.boardDetails = result;
                console.log("RESULT: ", result);
            });
        }
    }

    attached() {
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: 5000,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        })
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