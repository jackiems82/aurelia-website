import { inject, bindable } from 'aurelia-framework';
import * as PhotoSwipe from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/photoswipe-ui-default';

export interface Items
{
    src: string,
    msrc: string,
    w: number,
    h: number,
    thumbBounds: ThumbBounds
}

export interface ThumbBounds
{
    x: number;
    y: number;
    w: number;
}

export class PhotoswipeModal {
    gallery: any;
    @bindable
    items: Array<Items>;

    //@bindable
    //thumbBounds: ThumbBounds;

    attached()
    {
    }

    openPhotoSwipe = (index: number) => {
        var pswpElement = this.gallery;
        // var pswpElement = document.getElementById('gallery');

        // build items array
        var items = this.items;
        //var thumbBounds = this.thumbBounds;

        // define options (if needed)
        var options = {

            index: index,
            barsSize: { top: 44, bottom: 'auto' },

            // Timers / delays
            timeToIdle: 4000,
            timeToIdleOutside: 1000,
            loadingIndicatorDelay: 1000,

            // Buttons/elements
            closeEl: true,
            captionEl: true,
            fullscreenEl: true,
            zoomEl: true,
            shareEl: false,
            counterEl: true,
            arrowEl: true,
            preloaderEl: true,

            // Tap on sliding area should close gallery
            tapToClose: false,
            tapToToggleControls: true,
            clickToCloseNonZoomable: true,
            closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
            indexIndicatorSep: ' / ',

            // Share buttons
            // 
            // Available variables for URL:
            // {{url}}             - url to current page
            // {{text}}            - title
            // {{image_url}}       - encoded image url
            // {{raw_image_url}}   - raw image url
            shareButtons: [
                {id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
                {id: 'twitter', label: 'Twitter', url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
                {id: 'pinterest', label: 'Pinterest', url: 'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'},
            ],

            //// uncomment to display inline in a div
            //modal: false,
            //closeOnScroll: false,

            getThumbBoundsFn: function (index) {
                // console.log("GetThumbBounds called with ", index, " returned (xyw)", items[index].thumbBounds.x, items[index].thumbBounds.y, items[index].thumbBounds.w);
                return items[index].thumbBounds;
            }
        };
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe<PhotoSwipeUI_Default>(pswpElement, PhotoSwipeUI_Default, items, options);

        gallery.init();
    }

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params:any = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };
}