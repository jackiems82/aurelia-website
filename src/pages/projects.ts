import { Items } from '../resources/elements/photoswipe-modal';
import { ImageModel, Url } from '../resources/ImageModel';
import { WebApi, BoardDetails } from '../web-api';

import {I18N} from 'aurelia-i18n';
import { autoinject} from 'aurelia-framework';

@autoinject
export class Projects{
    ps: any;
    pid: number;
    model: ImageModel;
    boardDetails: BoardDetails[];
    showInEnglish: boolean;

    constructor(private api: WebApi, private i18n: I18N) {
        this.i18n = i18n;

        // If the current locale is not any type of german, load the english texts.
        if (!(this.i18n.getLocale().indexOf("de") >= 0))
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
                    this.model.smallImages.push({ url: image.smallImgUrl })
                    this.model.largeImages.push({ url: image.largeImgUrl })
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
            // autoplay: 7500,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
            preloadImages: false,
            lazyLoading: true,
            lazyLoadingInPrevNext: true,
            centeredSlides: true            
        });

        // Create photoswipe image list
        if (!this.ps.items) {
            this.createImageList();
        }

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        let params = this.ps.photoswipeParseHash();

        // Currently there is only one gallery, so that index will always be 1
        if (params.pid)
            this.ps.openPhotoSwipe(params.pid);  
    }

    
    clickImage(id: number) {        
        this.ps.openPhotoSwipe(id);
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
                let width: number = 1200, height: number = 800;
                
                // FileName: "imageName_size_1200x800.jpg"
                let lrgImg = this.model.largeImages[image.photoSwipeIndex].url
                          .replace(/\.[^/.]+$/, "") // remove file extension
                          .split("size_");
   
                // "1200x800"
                if (lrgImg.length == 2)
                {
                    let measures = lrgImg[1].split("x");
                    width = Number(measures[0]);
                    height = Number(measures[1]);
                }

                // Small image sizes needed to position the small image over the thumbnail when the animation starts.
                let smlImg = this.model.smallImages[image.photoSwipeIndex].url
                          .replace(/\.[^/.]+$/, "") // remove file extension
                          .split("size_");

                let smlWidth = 0;
                let smlHeight = 0;
                if (smlImg.length == 2)
                {
                    let measures = smlImg[1].split("x");
                    smlWidth = Number(measures[0]);
                    smlHeight = Number(measures[1]);
                }

                // The offsets center the initial shown image over the thumbnail
                let topOffset = (smlHeight - rect.width) / 2;
                let leftOffset = (smlWidth - rect.width) / 2;                

                // Needed to scale the image to the size of the thumbnail
                let widthAdaption = smlWidth - rect.width;
                let heightAdaption = 0;

                // If portrait format also correct the starting point of the animation image
                if (height > width)
                    heightAdaption = smlHeight - rect.height;
                

                // Add the image information to array for the photoSwipe items
                items.push({
                    src: this.model.largeImages[image.photoSwipeIndex].url,
                    msrc: this.model.smallImages[image.photoSwipeIndex].url,
                    w: width,
                    h: height,
                    thumbBounds: { x: rect.left - leftOffset, 
                                   y: rect.top + pageYScroll - topOffset, 
                                   w: rect.width + widthAdaption
                    }
                });
            })  
        }
        
        this.ps.items = items;
    } 
}