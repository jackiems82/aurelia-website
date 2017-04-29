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
        // The 'return' should actually wait for the promise and after that render the page.
        // But as it appears the page is rendered nevertheless beforean image is shown.
        // Maybe because of the simple images array in the web api?
        return this.api.getImageDetails().then(result => {
            this.boardDetails = result;
            console.log("RESULT: ", result);
        });        
    }

    attached() {
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: 5000,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
            preloadImages: false,
            lazyLoading: true,
            lazyLoadingInPrevNext: true,
            
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