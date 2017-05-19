import PhotoSwipe from "photoswipe"; 
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default.js"

export class About {
    pswpElement;
    items;
    options;  


    attached() {
        this.pswpElement = document.querySelectorAll('.pswp')[0];
        // build items array
        this.items = [
            {
                src: 'https://placekitten.com/600/400',
                w: 600,
                h: 400
            },
            {
                src: 'https://placekitten.com/1200/900',
                w: 1200,
                h: 900
            }
        ];

        // define options (if needed)
        this.options = {
            // optionName: 'option value'
            // for example:
            index: 0 // start at first slide
        };

        // // Initializes and opens PhotoSwipe
        // var gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, this.items, this.options);
        // gallery.init();
    }

    openGallery() {
        console.log("test");
        let pswpElement = document.querySelectorAll('.pswp')[0];
        let gallery = new PhotoSwipe(pswpElement as HTMLElement, PhotoSwipeUI_Default, this.items, this.options);
        gallery.init();
    }
}