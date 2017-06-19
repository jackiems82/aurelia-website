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

    test_ps = (index: number) => {
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
            shareEl: true,
            counterEl: true,
            arrowEl: true,
            preloaderEl: true,

            // Tap on sliding area should close gallery
            tapToClose: false,
            tapToToggleControls: true,
            clickToCloseNonZoomable: true,
            closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
            indexIndicatorSep: ' / ',

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
}