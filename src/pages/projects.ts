import { Items } from '../resources/elements/photoswipe-modal';
import { ImageModel, Url } from '../resources/ImageModel';
import { WebApi, BoardDetails } from '../web-api';

import {I18N} from 'aurelia-i18n';
import { autoinject} from 'aurelia-framework';

@autoinject
export class Projects{
    ps: any;
    model: ImageModel;
    boardDetails: BoardDetails[];
    showInEnglish: boolean;

    constructor(private api: WebApi, private i18n: I18N) {
        this.i18n = i18n;

        if (this.i18n.getLocale() != "de")
            this.showInEnglish = true;   

        this.model = new ImageModel();
        this.model.smallImages = new Array<Url>(); 
        this.model.mediumImages = new Array<Url>();
        this.model.largeImages = new Array<Url>();         
    }

    activate(){
        // The 'return' should actually wait for the promise and after that render the page.
        // But as it appears the page is rendered nevertheless beforean image is shown.
        // Maybe because of the simple images array in the web api?
        this.api.getImageDetails().then(result => {
            this.boardDetails = result;
            let idx = 0;
            this.boardDetails.forEach(element => {                
                element.images.forEach(image => {
                    image.photoSwipeIndex = idx;
                    idx++;
                    this.model.smallImages.push({ url: image.thumb })
                    this.model.largeImages.push({ url: image.imageUrl })
                })
            });
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
            centeredSlides: true            
        });
    }
 
    createImageList() {
        var items: Array<Items> = [];
        
        var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;

        for (var i = 0; i < this.boardDetails.length; i++) {
            var thumbnails = document.querySelectorAll('.swiper-container-' + i)
            // Access always the first element because there will only be one, since
            // the thumbs in this case are each the individual slide containers
            var rect = thumbnails[0].getBoundingClientRect();

            this.boardDetails[i].images.forEach(image => {
                items.push({
                    src: this.model.largeImages[image.photoSwipeIndex].url,
                    msrc: this.model.smallImages[image.photoSwipeIndex].url,
                    w: 2136,
                    h: 2848,
                    thumbBounds: { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
                });
            })  
                
            
        }
        
        this.ps.items = items;
    }

    clickImage(id: any) {
        console.log("CLick");
        var index = id;
        if (!this.ps.items) {
            this.createImageList();
        }
        this.ps.test_ps(index);
    }
 
}