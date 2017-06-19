import { Items } from '../resources/elements/photoswipe-modal';
import { ImageModel, Url } from '../resources/ImageModel';


export class About {
    ps: any;
    model: ImageModel;
    pswpElement;
    items;
    options;  


    constructor() {
        this.model = new ImageModel();
        this.model.smallImages = new Array<Url>(); 
        this.model.mediumImages = new Array<Url>();
        this.model.largeImages = new Array<Url>();
    }

    attached() {
        this.model.smallImages.push({ url: "images/Stadthafen_230.jpg" });
        this.model.mediumImages.push({ url: "images/Stadthafen_230.jpg"});
        this.model.largeImages.push({ url: "images/stadthafen_size_805x1200.jpg" });
    }

    createImageList() {
        var items: Array<Items> = [];

        var thumbnails = document.querySelectorAll('img.photoswipe')
        var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;

        for (var n = 0; n < this.model.smallImages.length; n++) {
            var rect = thumbnails[n].getBoundingClientRect();

            items.push({
                src: this.model.largeImages[n].url,
                msrc: this.model.smallImages[n].url,
                w: 2597,
                h: 3872,
                thumbBounds: { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
            });
        }

        this.ps.items = items;
    }

    clickImage(id: any) {
        console.log("CLick");
        var index = id.index;
        if (!this.ps.items) {
            this.createImageList();
        }
        this.ps.test_ps(index);
    }
}